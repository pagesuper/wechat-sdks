// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html

import basicUtil from 'almighty-tool/lib/utils/basic.util';
import { Result } from '../../interfaces/result.interface';

export interface GetAccessTokenOptions {
  appid: string;
  secret: string;
}

export interface GetStableAccessTokenOptions extends GetAccessTokenOptions {
  /** 强制刷新：默认为 false */
  forceRefresh?: boolean;
}

export interface GetAccessTokenData {
  accessToken: string;
  expiresIn: number;
}

const weappTokenApi = {
  getAccessToken: async (options: GetAccessTokenOptions): Promise<Result<GetAccessTokenData>> => {
    const result: Result<GetAccessTokenData> = {
      status: 'error',
      code: 'RequestFail',
      message: '',
    };

    const response = await fetch(
      basicUtil.buildUrl('https://api.weixin.qq.com/cgi-bin/token', {
        grant_type: 'client_credential',
        appid: options.appid,
        secret: options.secret,
      }),
    );

    const data = await response.json();

    if (response.status === 200) {
      if (data.errcode) {
        result.code = `FailCode#${data.errcode}`;
        result.message = data.errmsg;
      } else {
        result.status = 'ok';
        result.code = '';
        result.message = '';
        result.data = {
          accessToken: data.access_token,
          expiresIn: data.expires_in,
        };
      }
    } else {
      result.code = `HTTPCode#${response.status}`;
    }

    return result;
  },

  getStableAccessToken: async (options: GetStableAccessTokenOptions): Promise<Result<GetAccessTokenData>> => {
    const result: Result<GetAccessTokenData> = {
      status: 'error',
      code: 'RequestFail',
      message: '',
    };

    const response = await fetch(basicUtil.buildUrl('https://api.weixin.qq.com/cgi-bin/stable_token'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credential',
        appid: options.appid,
        secret: options.secret,
        force_refresh: options.forceRefresh === true,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      if (data.errcode) {
        result.code = `FailCode#${data.errcode}`;
        result.message = data.errmsg;
      } else {
        result.status = 'ok';
        result.code = '';
        result.message = '';
        result.data = {
          accessToken: data.access_token,
          expiresIn: data.expires_in,
        };
      }
    } else {
      result.code = `HTTPCode#${response.status}`;
    }

    return result;
  },
};

export default weappTokenApi;
