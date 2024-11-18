import { Request, Response } from '../../utils/weapp.util';
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
declare const weappTokenApi: {
    /**
     * 获取微信小程序的 Access Token
     * @param options
     * @returns
     */
    getAccessToken: (options: Request<undefined, GetAccessTokenRequestParams>) => Promise<Response<GetAccessTokenData>>;
    /**
     * 获取微信小程序的稳定 Access Token
     * @param options
     * @returns
     */
    getStableAccessToken: (options: Request<GetStableAccessTokenRequestData, undefined>) => Promise<Response<GetAccessTokenData>>;
};
export default weappTokenApi;
