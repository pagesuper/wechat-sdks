/// <reference types="node" />
import { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';
export interface GetFeedbackMediaRequestParams extends CommonRequestParams {
    /** 用户反馈信息的 record_id, 可通过 getFeedback 获取 */
    record_id: string;
    /** 媒体文件 ID */
    media_id: string;
}
export interface GetFeedbackMediaRequestData {
}
export interface GetFeedbackMediaData extends CommonResponseData {
}
declare const weappOperationApi: {
    getFeedbackMedia: (options: Request<GetFeedbackMediaRequestData, GetFeedbackMediaRequestParams>) => Promise<Response<GetFeedbackMediaData | Buffer>>;
};
export default weappOperationApi;
