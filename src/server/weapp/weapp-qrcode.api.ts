import weappUtil, { CommonRequestParams, CommonResponseData, Request, Response } from '../../utils/weapp.util';

// ///// getQRCode /////
export interface GetQRCodeRequestParams extends CommonRequestParams {}

export interface GetQRCodeRequestData {
  /** 扫码进入的小程序页面路径，最大长度 1024 个字符，不能为空，scancode_time为系统保留参数，不允许配置；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。 */
  path: string;
  /** 二维码的宽度，单位 px。默认值为430，最小 280px，最大 1280px */
  width?: number;
  /** 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调 */
  auto_color?: boolean;
  /** 线条颜色 默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示 */
  line_color?: {
    r: number;
    g: number;
    b: number;
  };
  /** 是否需要透明底色，为 true 时，生成透明底色的小程序码 */
  is_hyaline?: boolean;
  /** 环境版本，默认release */
  env_version?: 'release' | 'trial' | 'develop';
}

export interface GetQRCodeData extends CommonResponseData {}

// ///// getUnlimitedQRCode /////
export interface GetUnlimitedQRCodeRequestParams extends CommonRequestParams {}

export interface GetUnlimitedQRCodeRequestData {
  /** 最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~，其它字符请自行编码为合法字符（因不支持%，中文无法使用 urlencode 处理，请使用其他编码方式） */
  scene: string;
  /** 默认是主页，页面 page，例如 pages/index/index，根路径前不要填加 /，不能携带参数（参数请放在scene字段里），如果不填写这个字段，默认跳主页面。scancode_time为系统保留参数，不允许配置 */
  page?: string;
  /** 默认是true，检查page 是否存在，为 true 时 page 必须是已经发布的小程序存在的页面（否则报错）；为 false 时允许小程序未发布或者 page 不存在， 但page 有数量上限（60000个）请勿滥用。 */
  check_path?: boolean;
  /** 环境版本，默认release */
  env_version?: 'release' | 'trial' | 'develop';
  /** 默认430，二维码的宽度，单位 px，最小 280px，最大 1280px */
  width?: number;
  /** 自动配置线条颜色，如果颜色依然是黑色，则说明不建议配置主色调 */
  auto_color?: boolean;
  /** 线条颜色 默认值{"r":0,"g":0,"b":0} ；auto_color 为 false 时生效，使用 rgb 设置颜色 例如 {"r":"xxx","g":"xxx","b":"xxx"} 十进制表示 */
  line_color?: {
    r: number;
    g: number;
    b: number;
  };
  /** 是否需要透明底色，为 true 时，生成透明底色的小程序码 */
  is_hyaline?: boolean;
}

export interface GetUnlimitedQRCodeData extends CommonResponseData {}

// ///// createQRCode /////
export interface CreateQRCodeRequestParams extends CommonRequestParams {}

export interface CreateQRCodeRequestData {
  /** 扫码进入的小程序页面路径，最大长度 128 个字符，不能为空；对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"，即可在 wx.getLaunchOptionsSync 接口中的 query 参数获取到 {foo:"bar"}。scancode_time为系统保留参数，不允许配置。 */
  path: string;
  /** 二维码的宽度，单位 px。最小 280px，最大 1280px;默认是430 */
  width?: number;
}

export interface CreateQRCodeData extends CommonResponseData {}

const weappQRCodeApi = {
  /**
   * 获取小程序码 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getQRCode.html
   * 该接口用于获取小程序码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制。
   * @param options
   * @returns
   */
  getQRCode: async (
    options: Request<GetQRCodeRequestData, GetQRCodeRequestParams>,
  ): Promise<Response<GetQRCodeData | Buffer>> => {
    return weappUtil.request<GetQRCodeRequestData, GetQRCodeRequestParams, GetQRCodeData | Buffer>({
      url: 'https://api.weixin.qq.com/wxa/getwxacode',
      method: 'POST',
      dataType: 'buffer',
      ...options,
    });
  },

  /**
   * 获取小程序码（永久有效） https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getUnlimitedQRCode.html
   * 该接口用于获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。
   * @param options`
   * @returns
   */
  getUnlimitedQRCode: async (
    options: Request<GetUnlimitedQRCodeRequestData, GetUnlimitedQRCodeRequestParams>,
  ): Promise<Response<GetUnlimitedQRCodeData | Buffer>> => {
    return weappUtil.request<GetUnlimitedQRCodeRequestData, GetUnlimitedQRCodeRequestParams, GetUnlimitedQRCodeData | Buffer>({
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit',
      method: 'POST',
      dataType: 'buffer',
      ...options,
    });
  },

  /**
   * 创建二维码 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/createQRCode.html
   * @param options
   * @returns
   */
  createQRCode: async (
    options: Request<CreateQRCodeRequestData, CreateQRCodeRequestParams>,
  ): Promise<Response<CreateQRCodeData | Buffer>> => {
    return weappUtil.request<CreateQRCodeRequestData, CreateQRCodeRequestParams, CreateQRCodeData | Buffer>({
      url: 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode',
      method: 'POST',
      dataType: 'buffer',
      ...options,
    });
  },
};

export default weappQRCodeApi;
