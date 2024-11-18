import weappUtil, { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';

// ///// code2session /////
interface Code2SessionRequestParams {
  /** 小程序 appId */
  appid: string;
  /** 小程序 appSecret */
  secret: string;
  /** 登录时获取的 code，可通过wx.login获取 */
  js_code: string;
}

interface Code2SessionRequestData {}

interface Code2SessionData extends CommonResponseData {
  /** 用户唯一标识 */
  openid: string;
  /** 会话密钥 */
  session_key: string;
  /** 用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回，详见 UnionID 机制说明 */
  unionid: string;
}

// ///// check_session_key /////
interface CheckSessionKeyRequestParams extends CommonRequestParams {
  /** 用户唯一标识符 */
  openid: string;
  /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
  signature: string;
}

interface CheckSessionKeyRequestData {}

interface CheckSessionKeyData extends CommonResponseData {}

// ///// reset_user_session_key /////
interface ResetUserSessionKeyRequestParams extends CommonRequestParams {
  /** 用户唯一标识符 */
  openid: string;
  /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
  signature: string;
}

interface ResetUserSessionKeyRequestData {}

interface ResetUserSessionKeyData extends CommonResponseData {
  openid: string;
  session_key: string;
}

const weappLoginApi = {
  /** 小程序登录：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html */
  code2Session: async (
    options: Request<Code2SessionRequestData, Code2SessionRequestParams>,
  ): Promise<Response<Code2SessionData>> => {
    return weappUtil.request<Code2SessionRequestData, Code2SessionRequestParams, Code2SessionData>({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      method: 'GET',
      ...options,
      normalizeRequestParams(params) {
        return {
          ...params,
          grant_type: 'authorization_code',
        };
      },
    });
  },

  /** 检验登录态 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/checkSessionKey.html */
  checkSessionKey: async (
    options: Request<CheckSessionKeyRequestData, CheckSessionKeyRequestParams>,
  ): Promise<Response<CheckSessionKeyData>> => {
    return weappUtil.request<CheckSessionKeyRequestData, CheckSessionKeyRequestParams, CheckSessionKeyData>({
      url: 'https://api.weixin.qq.com/wxa/checksession',
      method: 'GET',
      ...options,
      normalizeRequestParams(params) {
        return {
          ...params,
          sig_method: 'hmac_sha256',
        };
      },
    });
  },

  /** 重置登录态 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/ResetUserSessionKey.html */
  resetUserSessionKey: async (
    options: Request<ResetUserSessionKeyRequestData, ResetUserSessionKeyRequestParams>,
  ): Promise<Response<ResetUserSessionKeyData>> => {
    return weappUtil.request<ResetUserSessionKeyRequestData, ResetUserSessionKeyRequestParams, ResetUserSessionKeyData>({
      url: 'https://api.weixin.qq.com/wxa/resetusersessionkey',
      method: 'GET',
      ...options,
      normalizeRequestParams(params) {
        return {
          ...params,
          sig_method: 'hmac_sha256',
        };
      },
    });
  },
};

export default weappLoginApi;
