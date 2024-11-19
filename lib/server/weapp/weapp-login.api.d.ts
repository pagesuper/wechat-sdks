import { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';
export interface Code2SessionRequestParams {
    /** 小程序 appId */
    appid: string;
    /** 小程序 appSecret */
    secret: string;
    /** 登录时获取的 code，可通过wx.login获取 */
    js_code: string;
}
export interface Code2SessionRequestData {
}
export interface Code2SessionData extends CommonResponseData {
    /** 用户唯一标识 */
    openid: string;
    /** 会话密钥 */
    session_key: string;
    /** 用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回，详见 UnionID 机制说明 */
    unionid: string;
}
export interface CheckSessionKeyRequestParams extends CommonRequestParams {
    /** 用户唯一标识符 */
    openid: string;
    /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
    signature: string;
}
export interface CheckSessionKeyRequestData {
}
export interface CheckSessionKeyData extends CommonResponseData {
}
export interface ResetUserSessionKeyRequestParams extends CommonRequestParams {
    /** 用户唯一标识符 */
    openid: string;
    /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
    signature: string;
}
export interface ResetUserSessionKeyRequestData {
}
export interface ResetUserSessionKeyData extends CommonResponseData {
    openid: string;
    session_key: string;
}
declare const weappLoginApi: {
    /** 小程序登录：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html */
    code2Session: (options: Request<Code2SessionRequestData, Code2SessionRequestParams>) => Promise<Response<Code2SessionData>>;
    /** 检验登录态 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/checkSessionKey.html */
    checkSessionKey: (options: Request<CheckSessionKeyRequestData, CheckSessionKeyRequestParams>) => Promise<Response<CheckSessionKeyData>>;
    /** 重置登录态 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/ResetUserSessionKey.html */
    resetUserSessionKey: (options: Request<ResetUserSessionKeyRequestData, ResetUserSessionKeyRequestParams>) => Promise<Response<ResetUserSessionKeyData>>;
};
export default weappLoginApi;
