export interface AnyObject {
    [key: string]: any;
}
export interface Request<T, P> {
    data?: T;
    params?: P;
}
export interface RequestOptions<T, P, S> extends Request<T, P> {
    url: string;
    /**
     * @default GET
     */
    method: 'GET' | 'POST';
    /**
     * @default application/json
     */
    contentType?: 'application/json' | 'application/x-www-form-urlencoded';
    /**
     * @default json
     */
    dataType?: 'json' | 'buffer';
    timeout?: number;
    /** 规范化请求参数 */
    normalizeRequestParams?: (params?: undefined | P) => AnyObject;
    /** 规范化请求数据 */
    normalizeRequestData?: (data?: undefined | T) => AnyObject;
    /** 规范化返回数据 */
    normalizeData?: (data?: AnyObject) => undefined | S;
}
export interface Response<S> {
    status: 'ok' | 'error';
    code: string;
    message: string;
    rid?: string;
    data?: S;
}
export interface CommonRequestParams {
    access_token: string;
}
export interface CommonResponseData {
    errcode: number;
    errmsg: string;
}
declare const weappUtil: {
    request: <T, P, S>(options: RequestOptions<T, P, S>) => Promise<Response<S>>;
};
export default weappUtil;
