/* eslint-disable camelcase */
import weappUtil, { CommonImageData, CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';

export interface PrintedTextOCRRequestParams extends CommonRequestParams {}
export interface PrintedTextOCRRequestData extends CommonImageData {}

export interface PrintedTextOCRData extends CommonResponseData {
  /** 识别结果 */
  items: {
    /** 识别出的文本 */
    text: string;
    /** 文本位置信息 */
    pos: {
      left_top: {
        x: number;
        y: number;
      };
      right_top: {
        x: number;
        y: number;
      };
      left_bottom: {
        x: number;
        y: number;
      };
      right_bottom: {
        x: number;
        y: number;
      };
    };
  }[];
  /** 图片尺寸 */
  img_size: {
    w: number;
    h: number;
  };
}

// ///// vehicleLicenseOCR /////
export interface VehicleLicenseOCRRequestParams extends CommonRequestParams {}
export interface VehicleLicenseOCRRequestData extends CommonImageData {}
export interface VehicleLicenseOCRData extends CommonResponseData {
  /** 车辆类型 */
  vehicle_type: string;
  /** 所有人 */
  owner: string;
  /** 住址 */
  addr: string;
  /** 使用性质 */
  use_character: string;
  /** 品牌型号 */
  model: string;
  /** 车辆识别代号 */
  engine_num: string;
  /** 注册日期 */
  register_date: string;
  /** 发证日期 */
  issue_date: string;
  /** 车牌号码 */
  plate_num_b: string;
  /** 号牌 */
  record: string;
  /** 核定载人数 */
  passengers_num: string;
  /** 总质量 */
  total_quality: string;
  /** 整备质量 */
  prepare_quality: string;
}

// ///// driverLicenseOCR /////
export interface DriverLicenseOCRRequestParams extends CommonRequestParams {}
export interface DriverLicenseOCRRequestData extends CommonImageData {}
export interface DriverLicenseOCRData extends CommonResponseData {
  /** 证号 */
  id_num: string;
  /** 姓名 */
  name: string;
  /** 性别 */
  sex: string;
  /** 地址 */
  address: string;
  /** 出生日期 */
  birth_date: string;
  /** 初次领证日期 */
  issue_date: string;
  /** 准驾车型 */
  car_class: string;
  /** 有效期限起始日 */
  valid_from: string;
  /** 有效期限终止日 */
  valid_to: string;
  /** 印章文构 */
  official_seal: string;
}

// ///// bankCardOCR /////
export interface BankCardOCRRequestParams extends CommonRequestParams {}
export interface BankCardOCRRequestData extends CommonImageData {}
export interface BankCardOCRData extends CommonResponseData {
  /** 银行卡号 */
  number: string;
}

// ///// businessLicenseOCR /////
export interface BusinessLicenseOCRRequestParams extends CommonRequestParams {}
export interface BusinessLicenseOCRRequestData extends CommonImageData {}
export interface BusinessLicenseOCRData extends CommonResponseData {}

// ///// idCardOCR /////
export interface IdCardOCRRequestParams extends CommonRequestParams {}
export interface IdCardOCRRequestData extends CommonImageData {}
export interface IdCardOCRData extends CommonResponseData {
  /** 正面或背面，Front / Back */
  type: string;
  /** 正面返回，姓名 */
  name: string;
  /** 正面返回，身份证号 */
  id: string;
  /** 背面返回，有效期 */
  valid_date: string;
  /** 正面返回，地址 */
  addr: string;
  /** 正面返回，性别 */
  gender: string;
  /** 正面返回，国籍 */
  nationality: string;
}

const weappOcrApi = {
  /**
   * 通用印刷体识别
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/printedTextOCR.html
   * @param options
   * @returns
   */
  printedTextOCR: async (
    options: Request<PrintedTextOCRRequestData, PrintedTextOCRRequestParams>,
  ): Promise<Response<PrintedTextOCRData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, PrintedTextOCRRequestParams, PrintedTextOCRData>({
      url: 'https://api.weixin.qq.com/cv/ocr/comm',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },

  /**
   * 行驶证识别
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/vehicleLicenseOCR.html
   * @param options
   * @returns
   */
  vehicleLicenseOCR: async (
    options: Request<VehicleLicenseOCRRequestData, VehicleLicenseOCRRequestParams>,
  ): Promise<Response<VehicleLicenseOCRData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, VehicleLicenseOCRRequestParams, VehicleLicenseOCRData>({
      url: 'https://api.weixin.qq.com/cv/ocr/driving',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },

  /**
   * 驾驶证识别
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/driverLicenseOCR.html
   * @param options
   * @returns
   */
  driverLicenseOCR: async (
    options: Request<DriverLicenseOCRRequestData, DriverLicenseOCRRequestParams>,
  ): Promise<Response<DriverLicenseOCRData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, DriverLicenseOCRRequestParams, DriverLicenseOCRData>({
      url: 'https://api.weixin.qq.com/cv/ocr/drivinglicense',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },

  /**
   * 银行卡识别
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/bankCardOCR.html
   * @param options
   * @returns
   */
  bankCardOCR: async (options: Request<BankCardOCRRequestData, BankCardOCRRequestParams>): Promise<Response<BankCardOCRData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, BankCardOCRRequestParams, BankCardOCRData>({
      url: 'https://api.weixin.qq.com/cv/ocr/bankcard',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },

  /**
   * 营业执照识别
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/businessLicenseOCR.html
   * @param options
   * @returns
   */
  businessLicenseOCR: async (
    options: Request<BusinessLicenseOCRRequestData, BusinessLicenseOCRRequestParams>,
  ): Promise<Response<BusinessLicenseOCRData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, BusinessLicenseOCRRequestParams, BusinessLicenseOCRData>({
      url: 'https://api.weixin.qq.com/cv/ocr/bizlicense',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },

  /**
   * 身份证识别
   * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/idCardOCR.html
   * @param options
   * @returns
   */
  idCardOCR: async (options: Request<IdCardOCRRequestData, IdCardOCRRequestParams>): Promise<Response<IdCardOCRData>> => {
    const data = await weappUtil.normalizeImageData(options.data as CommonImageData);

    return weappUtil.request<FormData, IdCardOCRRequestParams, IdCardOCRData>({
      url: 'https://api.weixin.qq.com/cv/ocr/idcard',
      method: 'POST',
      contentType: 'multipart/form-data',
      ...options,
      data,
    });
  },
};

export default weappOcrApi;
