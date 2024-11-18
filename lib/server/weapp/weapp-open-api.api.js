"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappOpenApi = {
    /**
     * POST https://api.weixin.qq.com/cgi-bin/clear_quota?access_token=ACCESS_TOKEN
     */
    clearQuota: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/clear_quota', method: 'POST' }, options))];
        });
    }); },
    getApiQuota: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/openapi/quota/get', method: 'POST' }, options))];
        });
    }); },
    getRidInfo: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/openapi/rid/get', method: 'POST' }, options))];
        });
    }); },
    clearQuotaByAppSecret: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/clear_quota/v2', method: 'POST' }, options))];
        });
    }); },
};
exports.default = weappOpenApi;
//# sourceMappingURL=weapp-open-api.api.js.map