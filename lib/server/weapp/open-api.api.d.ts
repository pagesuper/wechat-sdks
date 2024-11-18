import { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';
interface ClearQuotaRequestParams extends CommonRequestParams {
}
interface ClearQuotaRequestData {
    appid: string;
}
interface ClearQuotaData extends CommonResponseData {
}
interface GetApiQuotaRequestParams extends CommonRequestParams {
}
interface GetApiQuotaRequestData {
    cgi_path: string;
}
interface GetApiQuotaData extends CommonResponseData {
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
interface GetRidInfoRequestParams extends CommonRequestParams {
}
interface GetRidInfoRequestData {
    rid: string;
}
interface GetRidInfoData extends CommonResponseData {
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
interface ClearQuotaByAppSecretRequestParams {
    appid: string;
    appsecret: string;
}
interface ClearQuotaByAppSecretRequestData {
}
interface ClearQuotaByAppSecretData extends CommonResponseData {
}
declare const weappOpenApi: {
    /**
     * POST https://api.weixin.qq.com/cgi-bin/clear_quota?access_token=ACCESS_TOKEN
     */
    clearQuota: (options: Request<ClearQuotaRequestData, ClearQuotaRequestParams>) => Promise<Response<ClearQuotaData>>;
    getApiQuota: (options: Request<GetApiQuotaRequestData, GetApiQuotaRequestParams>) => Promise<Response<GetApiQuotaData>>;
    getRidInfo: (options: Request<GetRidInfoRequestData, GetRidInfoRequestParams>) => Promise<Response<GetRidInfoData>>;
    clearQuotaByAppSecret: (options: Request<ClearQuotaByAppSecretRequestData, ClearQuotaByAppSecretRequestParams>) => Promise<Response<ClearQuotaByAppSecretData>>;
};
export default weappOpenApi;
