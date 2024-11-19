import weappUtil, { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';

// ///// clear_quota /////
export interface ClearQuotaRequestParams extends CommonRequestParams {}

export interface ClearQuotaRequestData {
  appid: string;
}

export interface ClearQuotaData extends CommonResponseData {}

// ///// get_api_quota /////
export interface GetApiQuotaRequestParams extends CommonRequestParams {}

export interface GetApiQuotaRequestData {
  cgi_path: string;
}

export interface GetApiQuotaData extends CommonResponseData {
  quota: {
    daily_limit: number;
    used: number;
    remain: number;
  };
  rate_limit: {
    call_count: number;
    refresh_second: number;
  };
  component_rate_limit: {
    call_count: number;
    refresh_second: number;
  };
}

// ///// get_rid_info /////
export interface GetRidInfoRequestParams extends CommonRequestParams {}

export interface GetRidInfoRequestData {
  rid: string;
}

export interface GetRidInfoData extends CommonResponseData {
  request: {
    /** 发起请求的时间戳 */
    invoke_time: number;
    /** 请求毫秒级耗时 */
    cost_in_ms: number;
    /** 请求的URL参数 */
    request_url: string;
    /** post请求的请求参数 */
    request_body: string;
    /** 接口请求返回参数 */
    response_body: string;
    /** 接口请求的客户端ip */
    client_ip: string;
  };
}

// ///// clear_quota_by_appsecret /////
export interface ClearQuotaByAppSecretRequestParams {
  appid: string;
  appsecret: string;
}

export interface ClearQuotaByAppSecretRequestData {}

export interface ClearQuotaByAppSecretData extends CommonResponseData {}

const weappOpenApi = {
  /**
   * POST https://api.weixin.qq.com/cgi-bin/clear_quota?access_token=ACCESS_TOKEN
   */
  clearQuota: async (options: Request<ClearQuotaRequestData, ClearQuotaRequestParams>): Promise<Response<ClearQuotaData>> => {
    return weappUtil.request<ClearQuotaRequestData, ClearQuotaRequestParams, ClearQuotaData>({
      url: 'https://api.weixin.qq.com/cgi-bin/clear_quota',
      method: 'POST',
      ...options,
    });
  },

  getApiQuota: async (options: Request<GetApiQuotaRequestData, GetApiQuotaRequestParams>): Promise<Response<GetApiQuotaData>> => {
    return weappUtil.request<GetApiQuotaRequestData, GetApiQuotaRequestParams, GetApiQuotaData>({
      url: 'https://api.weixin.qq.com/cgi-bin/openapi/quota/get',
      method: 'POST',
      ...options,
    });
  },

  getRidInfo: async (options: Request<GetRidInfoRequestData, GetRidInfoRequestParams>): Promise<Response<GetRidInfoData>> => {
    return weappUtil.request<GetRidInfoRequestData, GetRidInfoRequestParams, GetRidInfoData>({
      url: 'https://api.weixin.qq.com/cgi-bin/openapi/rid/get',
      method: 'POST',
      ...options,
    });
  },

  clearQuotaByAppSecret: async (
    options: Request<ClearQuotaByAppSecretRequestData, ClearQuotaByAppSecretRequestParams>,
  ): Promise<Response<ClearQuotaByAppSecretData>> => {
    return weappUtil.request<ClearQuotaByAppSecretRequestData, ClearQuotaByAppSecretRequestParams, ClearQuotaByAppSecretData>({
      url: 'https://api.weixin.qq.com/cgi-bin/clear_quota/v2',
      method: 'POST',
      ...options,
    });
  },
};

export default weappOpenApi;
