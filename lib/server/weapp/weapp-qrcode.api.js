"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappQRCodeApi = {
    /**
     * 获取小程序码 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getQRCode.html
     * 该接口用于获取小程序码，适用于需要的码数量较少的业务场景。通过该接口生成的小程序码，永久有效，有数量限制。
     * @param options
     * @returns
     */
    getQRCode: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/getwxacode', method: 'POST', dataType: 'buffer' }, options))];
        });
    }); },
    /**
     * 获取小程序码（永久有效） https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getUnlimitedQRCode.html
     * 该接口用于获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。
     * @param options`
     * @returns
     */
    getUnlimitedQRCode: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit', method: 'POST', dataType: 'buffer' }, options))];
        });
    }); },
    /**
     * 创建二维码 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/createQRCode.html
     * @param options
     * @returns
     */
    createQRCode: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode', method: 'POST', dataType: 'buffer' }, options))];
        });
    }); },
};
exports.default = weappQRCodeApi;
//# sourceMappingURL=weapp-qrcode.api.js.map