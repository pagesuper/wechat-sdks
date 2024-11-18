import basicUtil from 'almighty-tool/lib/utils/basic.util';
import qs from 'qs';

export interface AnyObject {
  [key: string]: any;
}

export interface Request<T, P> {
  data?: T;
  params?: P;
}

export interface RequestOptions<T, P, S> extends Request<T, P> {
  url: string;
  /**
   * @default GET
   */
  method: 'GET' | 'POST';
  /**
   * @default application/json
   */
  contentType?: 'application/json' | 'application/x-www-form-urlencoded';
  /**
   * @default json
   */
  dataType?: 'json';
  timeout?: number;
  /** 规范化请求参数 */
  normalizeRequestParams?: (params?: undefined | P) => AnyObject;
  /** 规范化请求数据 */
  normalizeRequestData?: (data?: undefined | T) => AnyObject;
  /** 规范化返回数据 */
  normalizeData?: (data?: AnyObject) => undefined | S;
}

export interface Response<S> {
  status: 'ok' | 'error';
  code: string;
  message: string;
  rid?: string;
  data?: S;
}

export interface CommonRequestParams {
  access_token: string;
}

export interface CommonResponseData {
  errcode: number;
  errmsg: string;
}

const weappUtil = {
  request: async <T, P, S>(options: RequestOptions<T, P, S>): Promise<Response<S>> => {
    const normalizeRequestParams = options.normalizeRequestParams ?? ((params) => params);
    const normalizeRequestData = options.normalizeRequestData ?? ((data) => data);
    const normalizeData = options.normalizeData ?? ((data) => data as undefined | S);

    const params = normalizeRequestParams(options.params);
    const url = basicUtil.buildUrl(options.url, params as AnyObject);
    const contentType = options.contentType ?? 'application/json';
    const dataType = options.dataType ?? 'json';
    const method = options.method ?? 'GET';

    const body = (() => {
      const data = normalizeRequestData(options.data);

      if (contentType === 'application/x-www-form-urlencoded') {
        return qs.stringify(data);
      }

      return JSON.stringify(data);
    })();

    console.log('weappUtil.request: ...', url, body);

    const response = await fetch(url, {
      method,
      body,
      headers: {
        'Content-Type': contentType,
      },
    });

    const originData = await (async () => {
      if (dataType === 'json') {
        return await response.json();
      }

      return undefined;
    })();

    if (response.status === 200) {
      if (originData?.errcode) {
        const message = originData.errmsg;

        const errorResult: Response<S> = {
          status: 'error',
          code: `FailCode#${originData.errcode}`,
          message,
        };

        const rid = (() => {
          if (message.match(/rid: ([\w-]+)/)) {
            return RegExp.$1;
          }
        })();

        if (rid) {
          errorResult.rid = rid;
        }

        return errorResult;
      }

      const result: Response<S> = {
        status: 'ok',
        code: '',
        message: '',
      };

      const normalizedData = normalizeData(originData as undefined | object);

      if (normalizedData) {
        result.data = normalizedData;
      }

      return result;
    }

    return {
      status: 'error',
      code: `HTTPCode#${response.status}`,
      message: '',
    };
  },
};

export default weappUtil;
