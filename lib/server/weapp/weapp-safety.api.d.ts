import { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';
export interface MsgSecCheckRequestParams extends CommonRequestParams {
}
export interface MsgSecCheckRequestData {
    /** 需检测的文本内容，文本字数的上限为2500字，需使用UTF-8编码 */
    content: string;
    /** 接口版本号，2.0版本为固定值2 */
    version?: number;
    /** 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志） */
    scene: number;
    /** 用户的openid（用户需在近两小时访问过小程序） */
    openid: string;
    /** 文本标题，需使用UTF-8编码 */
    title?: string;
    /** 用户昵称，需使用UTF-8编码 */
    nickname?: string;
    /** 个性签名，该参数仅在资料类场景有效(scene=1)，需使用UTF-8编码 */
    signature?: string;
}
export interface MsgSecCheckData extends CommonResponseData {
    /** 检测结果详情 */
    detail: {
        /** 策略类型 */
        strategy: string;
        /** 错误码，仅当该值为0时，该项结果有效 */
        errcode: number;
        /** 建议，有risky、pass、review三种值 */
        suggest: string;
        /** 命中标签枚举值，100 正常；10001 广告；20001 时政；20002 色情；20003 辱骂；20006 违法犯罪；20008 欺诈；20012 低俗；20013 版权；21000 其他 */
        label: number;
        /** 命中的自定义关键词 */
        keyword: string;
        /** 0-100，代表置信度，越高代表越有可能属于当前返回的标签（label） */
        prob: number;
    }[];
    /** 唯一请求标识，标记单次请求 */
    trace_id: string;
    result: {
        /** 建议，有risky、pass、review三种值 */
        suggest: string;
        /** 命中标签枚举值，100 正常；10001 广告；20001 时政；20002 色情；20003 辱骂；20006 违法犯罪；20008 欺诈；20012 低俗；20013 版权；21000 其他 */
        label: number;
    };
}
export interface MediaCheckAsyncRequestParams extends CommonRequestParams {
}
export interface MediaCheckAsyncRequestData {
    /** 要检测的图片或音频的url，支持图片格式包括jpg, jpeg, png, bmp, gif（取首帧），支持的音频格式包括mp3, aac, ac3, wma, flac, vorbis, opus, wav */
    media_url: string;
    /** 1:音频;2:图片 */
    media_type: number;
    /** 接口版本号，2.0版本为固定值2 */
    version?: number;
    /** 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志） */
    scene: number;
    /** 用户的openid（用户需在近两小时访问过小程序） */
    openid: string;
}
export interface MediaCheckAsyncData extends CommonResponseData {
    /**
     * 唯一请求标识，标记单次请求，用于匹配异步推送结果
     * 异步检测结果在 30 分钟内会推送到你的消息接收服务器: https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html
     */
    trace_id: string;
}
export interface GetUserRiskRankRequestParams extends CommonRequestParams {
}
export interface GetUserRiskRankRequestData {
    /** 小程序appid */
    appid: string;
    /** 用户的openid */
    openid: string;
    /** 场景值，0:注册，1:营销作弊 */
    scene: number;
    /** 用户手机号 */
    mobile_no?: string;
    /** 用户访问源ip */
    client_ip: string;
    /** 用户邮箱地址 */
    email_address?: string;
    /** 额外补充信息 */
    extended_info?: string;
    /** 默认值false。false：正式调用，true：测试调用 */
    is_test?: boolean;
}
export interface GetUserRiskRankData extends CommonResponseData {
    /** 用户风险等级，合法值为0,1,2,3,4，数字越大风险越高 */
    risk_rank: number;
    /** 唯一请求标识，标记单次请求 */
    unoin_id: number;
    /** 命中标签列表 */
    label_list: string[];
}
declare const weappSafetyApi: {
    /**
     * 内容安全-文本内容安全检测
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/msgSecCheck.html
     * @param options
     * @returns
     */
    msgSecCheck: (options: Request<MsgSecCheckRequestData, MsgSecCheckRequestParams>) => Promise<Response<MsgSecCheckData>>;
    /**
     * 内容安全-异步检测图片/音频
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/mediaCheckAsync.html
     * @param options
     * @returns
     */
    mediaCheckAsync: (options: Request<MediaCheckAsyncRequestData, MediaCheckAsyncRequestParams>) => Promise<Response<MediaCheckAsyncData>>;
    /**
     * 内容安全-获取用户安全等级
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/getUserRiskRank.html
     * @param options
     * @returns
     */
    getUserRiskRank: (options: Request<GetUserRiskRankRequestData, GetUserRiskRankRequestParams>) => Promise<Response<GetUserRiskRankData>>;
};
export default weappSafetyApi;
