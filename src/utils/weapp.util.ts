import basicUtil from 'almighty-tool/lib/utils/basic.util';
import qs from 'qs';
import requestUtil from './request.util';

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
  contentType?: 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
  /**
   * @default json
   */
  dataType?: 'json' | 'buffer';
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

export interface CommonImageData {
  img_url?: string;
  img?: Buffer;
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

      if (contentType === 'multipart/form-data') {
        return data as FormData;
      }

      return JSON.stringify(data);
    })();

    // console.log('weappUtil.request: ...', url, body);

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

      if (dataType === 'buffer') {
        const result = await response.arrayBuffer();

        try {
          return JSON.parse(Buffer.from(result).toString('utf-8'));
        } catch (error) {
          return result;
        }
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

  /** 规范化图片数据 */
  normalizeImageData: async (data: CommonImageData): Promise<FormData> => {
    let imgBuffer: Buffer | undefined = data.img;

    if (data.img_url && !imgBuffer) {
      imgBuffer = await requestUtil.getFileBuffer(data.img_url);
    }

    const formData = new FormData();

    if (imgBuffer) {
      formData.append('img', new Blob([imgBuffer]), 'img');
    }

    return formData;
  },
};

export default weappUtil;
