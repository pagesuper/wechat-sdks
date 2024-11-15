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
declare const weappTokenApi: {
    getAccessToken: (options: GetAccessTokenOptions) => Promise<Result<GetAccessTokenData>>;
    getStableAccessToken: (options: GetStableAccessTokenOptions) => Promise<Result<GetAccessTokenData>>;
};
export default weappTokenApi;
