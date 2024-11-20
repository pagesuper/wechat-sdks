"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappImageApi = {
    /**
     * 图片智能裁剪
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/img/aiCrop.html
     */
    aiCrop: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/img/aicrop', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
    /**
     * 二维码、条码识别
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/img/scanQRCode.html
     */
    scanQRCode: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/img/qrcode', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
    /**
     * 图片超分辨率
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/img/superResolution.html
     */
    superResolution: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    console.log('data: ...', data);
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/img/superresolution', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
};
exports.default = weappImageApi;
//# sourceMappingURL=weapp-image.api.js.map