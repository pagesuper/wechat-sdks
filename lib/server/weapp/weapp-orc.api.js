"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* eslint-disable camelcase */
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappOcrApi = {
    /**
     * 通用印刷体识别
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/printedTextOCR.html
     * @param options
     * @returns
     */
    printedTextOCR: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/ocr/comm', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
    /**
     * 行驶证识别
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/vehicleLicenseOCR.html
     * @param options
     * @returns
     */
    vehicleLicenseOCR: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/ocr/driving', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
    /**
     * 驾驶证识别
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/driverLicenseOCR.html
     * @param options
     * @returns
     */
    driverLicenseOCR: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/ocr/drivinglicense', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
    /**
     * 银行卡识别
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/bankCardOCR.html
     * @param options
     * @returns
     */
    bankCardOCR: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/ocr/bankcard', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
    /**
     * 营业执照识别
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/businessLicenseOCR.html
     * @param options
     * @returns
     */
    businessLicenseOCR: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/ocr/bizlicense', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
    /**
     * 身份证识别
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/img-ocr/ocr/idCardOCR.html
     * @param options
     * @returns
     */
    idCardOCR: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, weapp_util_1.default.normalizeImageData(options.data)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cv/ocr/idcard', method: 'POST', contentType: 'multipart/form-data' }, options), { data: data }))];
            }
        });
    }); },
};
exports.default = weappOcrApi;
//# sourceMappingURL=weapp-orc.api.js.map