import weappUtil, { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';

// ///// getFeedbackMedia /////
export interface GetFeedbackMediaRequestParams extends CommonRequestParams {
  /** 用户反馈信息的 record_id, 可通过 getFeedback 获取 */
  record_id: string;
  /** 媒体文件 ID */
  media_id: string;
}
export interface GetFeedbackMediaRequestData {}
export interface GetFeedbackMediaData extends CommonResponseData {}

const weappOperationApi = {
  getFeedbackMedia: async (
    options: Request<GetFeedbackMediaRequestData, GetFeedbackMediaRequestParams>,
  ): Promise<Response<GetFeedbackMediaData | Buffer>> => {
    return weappUtil.request<GetFeedbackMediaRequestData, GetFeedbackMediaRequestParams, GetFeedbackMediaData | Buffer>({
      url: 'https://api.weixin.qq.com/cgi-bin/media/getfeedbackmedia',
      method: 'GET',
      dataType: 'buffer',
      ...options,
    });
  },
};

export default weappOperationApi;
