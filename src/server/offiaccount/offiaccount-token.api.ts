import offiaccountUtil, { Request, Response } from '../../utils/offiaccount.util';

// ///// getAccessToken /////
export interface GetAccessTokenRequestParams {
  appid: string;
  secret: string;
}

export interface GetAccessTokenData {
  access_token: string;
  expires_in: number;
}

const offiaccountTokenApi = {
  getAccessToken: async (options: Request<undefined, GetAccessTokenRequestParams>): Promise<Response<GetAccessTokenData>> => {
    return offiaccountUtil.request<undefined, GetAccessTokenRequestParams, GetAccessTokenData>({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      method: 'GET',
      ...options,
      normalizeRequestParams(params) {
        return {
          grant_type: 'client_credential',
          ...params,
        };
      },
    });
  },
};

export default offiaccountTokenApi;
