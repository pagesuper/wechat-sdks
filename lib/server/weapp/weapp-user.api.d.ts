import { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';
export interface GetUserPhonenumberRequestParams extends CommonRequestParams {
}
export interface GetUserPhonenumberRequestData {
    /** 通过：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html 获取的code */
    code: string;
    /** 用户唯一标识符 */
    openid?: string;
}
export interface GetUserPhonenumberData extends CommonResponseData {
    phone_info: {
        phoneNumber: string;
        purePhoneNumber: string;
        countryCode: string;
        watermark: {
            appid: string;
            timestamp: number;
        };
    };
}
export interface GetUserEncryptKeyRequestParams extends CommonRequestParams {
    /** 用户唯一标识符 */
    openid: string;
    /** 用户登录态签名，用session_key对空字符串签名得到的结果。即 signature = hmac_sha256(session_key, "") */
    signature: string;
    /** 签名方法，目前只支持 hmac_sha256 */
    sig_method: string;
}
export interface GetUserEncryptKeyRequestData {
}
export interface GetUserEncryptKeyData extends CommonResponseData {
    /** 用户最近三次的加密key列表 */
    key_info_list: {
        /** 加密密钥 */
        encrypt_key: string;
        /** 加密密钥版本 */
        version: number;
        /** 加密密钥过期时间 */
        expire_in: string;
        /** 加密密钥初始化向量 */
        iv: string;
        /** 加密密钥创建时间 */
        create_time: number;
    }[];
}
export interface GetPaidUnionidRequestParams extends CommonRequestParams {
    /** 用户唯一标识符 */
    openid: string;
    /** 微信支付订单号 */
    transaction_id: string;
    /** 商户号 */
    mch_id: string;
    /** 商户订单号 */
    out_trade_no: string;
}
export interface GetPaidUnionidRequestData {
}
export interface GetPaidUnionidData extends CommonResponseData {
    /** 用户唯一标识符 */
    unionid: string;
}
export interface CheckEncryptedDataRequestParams extends CommonRequestParams {
}
export interface CheckEncryptedDataRequestData {
    encrypted_msg_hash: string;
}
export interface CheckEncryptedDataData extends CommonResponseData {
    vaild: boolean;
    create_time: number;
}
export interface GetPluginOpenPIdRequestParams extends CommonRequestParams {
}
export interface GetPluginOpenPIdRequestData {
    /** 通过 wx.pluginLogin 获得的插件用户标志凭证 code，有效时间为5分钟，一个 code 只能获取一次 openpid。 */
    code: string;
}
export interface GetPluginOpenPIdData extends CommonResponseData {
    /** 插件用户的唯一标识 */
    openpid: string;
}
declare const weappUserApi: {
    /**
     * 获取手机号：
     * - 服务API；https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html
     * - 前端API：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
     */
    getPhoneNumber: (options: Request<GetUserPhonenumberRequestData, GetUserPhonenumberRequestParams>) => Promise<Response<GetUserPhonenumberData>>;
    /** 获取用户加密信息：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/internet/getUserEncryptKey.html */
    getUserEncryptKey: (options: Request<GetUserEncryptKeyRequestData, GetUserEncryptKeyRequestParams>) => Promise<Response<GetUserEncryptKeyData>>;
    /** 支付后获取 Unionid：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/basic-info/getPaidUnionid.html */
    getPaidUnionid: (options: Request<GetPaidUnionidRequestData, GetPaidUnionidRequestParams>) => Promise<Response<GetPaidUnionidData>>;
    /** 检查加密数据：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/basic-info/checkEncryptedData.html */
    checkEncryptedData: (options: Request<CheckEncryptedDataRequestData, CheckEncryptedDataRequestParams>) => Promise<Response<CheckEncryptedDataData>>;
    /** 获取插件 openpid：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/basic-info/getPluginOpenPId.html */
    getPluginOpenPId: (options: Request<GetPluginOpenPIdRequestData, GetPluginOpenPIdRequestParams>) => Promise<Response<GetPluginOpenPIdData>>;
};
export default weappUserApi;
