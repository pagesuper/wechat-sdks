import { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';
interface Code2SessionRequestParams extends CommonRequestParams {
}
interface Code2SessionRequestData {
    /** 小程序 appId */
    appid: string;
    /** 小程序 appSecret */
    secret: string;
    /** 登录时获取的 code，可通过wx.login获取 */
    js_code: string;
}
interface Code2SessionData extends CommonResponseData {
    /** 用户唯一标识 */
    openid: string;
    /** 会话密钥 */
    session_key: string;
    /** 用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回，详见 UnionID 机制说明 */
    unionid: string;
}
interface CheckSessionKeyRequestParams extends CommonRequestParams {
    /** 用户唯一标识符 */
    openid: string;
    /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
    signature: string;
}
interface CheckSessionKeyRequestData {
}
interface CheckSessionKeyData extends CommonResponseData {
}
interface ResetUserSessionKeyRequestParams extends CommonRequestParams {
    /** 用户唯一标识符 */
    openid: string;
    /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
    signature: string;
}
interface ResetUserSessionKeyRequestData {
}
interface ResetUserSessionKeyData extends CommonResponseData {
    openid: string;
    session_key: string;
}
declare const weappLoginApi: {
    code2Session: (options: Request<Code2SessionRequestData, Code2SessionRequestParams>) => Promise<Response<Code2SessionData>>;
    checkSessionKey: (options: Request<CheckSessionKeyRequestData, CheckSessionKeyRequestParams>) => Promise<Response<CheckSessionKeyData>>;
    resetUserSessionKey: (options: Request<ResetUserSessionKeyRequestData, ResetUserSessionKeyRequestParams>) => Promise<Response<ResetUserSessionKeyData>>;
};
export default weappLoginApi;
