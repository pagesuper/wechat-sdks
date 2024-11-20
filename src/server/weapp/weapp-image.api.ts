import weappUtil, { CommonImageData, CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';

// ///// aiCrop /////
export interface AiCropRequestParams extends CommonRequestParams {}
export interface AiCropRequestData extends CommonImageData {}
export interface AiCropData extends CommonResponseData {
  /** 智能裁剪结果 */
  results?: {
    /** 裁剪框的左上角x坐标 */
    crop_left: number;
    /** 裁剪框的左上角y坐标 */
    crop_top: number;
    /** 裁剪框的右下角x坐标 */
    crop_right: number;
    /** 裁剪框的右下角y坐标 */
    crop_bottom: number;
  }[];
  /** 图片尺寸 */
  img_size?: {
    /** 图片宽度 */
    w: number;
    /** 图片高度 */
    h: number;
  };
}

// ///// scanQRCode /////
export interface ScanQRCodeRequestParams extends CommonRequestParams {}
export interface ScanQRCodeRequestData extends CommonImageData {}
export interface ScanQRCodeData extends CommonResponseData {
  code_results: {
    /** 码的类型 */
    type_name: string;
    /** 码的信息 */
    data: string;
    /** 码的坐标 */
    pos: {
      /** 左上角坐标 */
      left_top: {
        x: number;
        y: number;
      };
      /** 右上角坐标 */
      right_top: {
        x: number;
        y: number;
      };
      /** 左下角坐标 */
      left_bottom: {
        x: number;
        y: number;
      };
      /** 右下角坐标 */
      right_bottom: {
        x: number;
        y: number;
      };
    };
  }[];
  /** 图片尺寸 */
  img_size?: {
    w: number;
    h: number;
  };
}

// ///// superResolution /////
export interface SuperResolutionRequestParams extends CommonRequestParams {}
export interface SuperResolutionRequestData extends CommonImageData {}
export interface SuperResolutionData extends CommonResponseData {
  /** 图片的media_id */
  media_id: string;
}

const weappImageApi = {
  /**
   * 图片智能裁剪
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/img/aiCrop.html
   */
  aiCrop: async (options: Request<AiCropRequestData, AiCropRequestParams>): Promise<Response<AiCropData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, AiCropRequestParams, AiCropData>({
      url: 'https://api.weixin.qq.com/cv/img/aicrop',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },

  /**
   * 二维码、条码识别
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/img/scanQRCode.html
   */
  scanQRCode: async (options: Request<ScanQRCodeRequestData, ScanQRCodeRequestParams>): Promise<Response<ScanQRCodeData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, ScanQRCodeRequestParams, ScanQRCodeData>({
      url: 'https://api.weixin.qq.com/cv/img/qrcode',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },

  /**
   * 图片超分辨率
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/img/superResolution.html
   */
  superResolution: async (
    options: Request<SuperResolutionRequestData, SuperResolutionRequestParams>,
  ): Promise<Response<SuperResolutionData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    console.log('data: ...', data);

    return weappUtil.request<FormData, SuperResolutionRequestParams, SuperResolutionData>({
      url: 'https://api.weixin.qq.com/cv/img/superresolution',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },
};

export default weappImageApi;
