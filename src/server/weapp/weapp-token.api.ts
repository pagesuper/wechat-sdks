// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/
// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html

import weappUtil, { Request, Response } from '../../utils/weapp.util';

export interface GetAccessTokenRequestParams {
  appid: string;
  secret: string;
}

export interface GetAccessTokenRequestData {
  appid: string;
  secret: string;
}

export interface GetStableAccessTokenRequestData extends GetAccessTokenRequestData {
  /** 强制刷新：默认为 false */
  force_refresh?: boolean;
}

export interface GetAccessTokenData {
  access_token: string;
  expires_in: number;
}

const weappTokenApi = {
  /**
   * 获取微信小程序的 Access Token
   * @param options
   * @returns
   */
  getAccessToken: async (options: Request<undefined, GetAccessTokenRequestParams>): Promise<Response<GetAccessTokenData>> => {
    return weappUtil.request<undefined, GetAccessTokenRequestParams, GetAccessTokenData>({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      method: 'GET',
      ...options,
      normalizeRequestParams(params) {
        return {
          ...params,
          grant_type: 'client_credential',
        };
      },
    });
  },

  /**
   * 获取微信小程序的稳定 Access Token
   * @param options
   * @returns
   */
  getStableAccessToken: async (
    options: Request<GetStableAccessTokenRequestData, undefined>,
  ): Promise<Response<GetAccessTokenData>> => {
    return weappUtil.request<GetStableAccessTokenRequestData, undefined, GetAccessTokenData>({
      url: 'https://api.weixin.qq.com/cgi-bin/stable_token',
      method: 'POST',
      contentType: 'application/json',
      ...options,
      normalizeRequestData: (data) => {
        return {
          ...data,
          grant_type: 'client_credential',
          force_refresh: data?.force_refresh === true,
        };
      },
    });
  },
};

export default weappTokenApi;
