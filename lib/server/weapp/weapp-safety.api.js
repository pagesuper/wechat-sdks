"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappSafetyApi = {
    /**
     * 内容安全-文本内容安全检测
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/msgSecCheck.html
     * @param options
     * @returns
     */
    msgSecCheck: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/msg_sec_check', method: 'POST' }, options), { normalizeRequestData: function (data) {
                        return tslib_1.__assign({ version: 2 }, data);
                    } }))];
        });
    }); },
    /**
     * 内容安全-异步检测图片/音频
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/mediaCheckAsync.html
     * @param options
     * @returns
     */
    mediaCheckAsync: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/media_check_async', method: 'POST' }, options))];
        });
    }); },
    /**
     * 内容安全-获取用户安全等级
     * https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/sec-center/sec-check/getUserRiskRank.html
     * @param options
     * @returns
     */
    getUserRiskRank: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/getuserriskrank', method: 'POST' }, options))];
        });
    }); },
};
exports.default = weappSafetyApi;
//# sourceMappingURL=weapp-safety.api.js.map