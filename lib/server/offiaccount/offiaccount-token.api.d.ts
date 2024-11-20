import { Request, Response } from '../../utils/offiaccount.util';
export interface GetAccessTokenRequestParams {
    appid: string;
    secret: string;
}
export interface GetAccessTokenData {
    access_token: string;
    expires_in: number;
}
declare const offiaccountTokenApi: {
    getAccessToken: (options: Request<undefined, GetAccessTokenRequestParams>) => Promise<Response<GetAccessTokenData>>;
};
export default offiaccountTokenApi;
