"use strict";
// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/
// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappTokenApi = {
    /**
     * 获取微信小程序的 Access Token
     * @param options
     * @returns
     */
    getAccessToken: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/token', method: 'GET' }, options), { normalizeRequestParams: function (params) {
                        return tslib_1.__assign(tslib_1.__assign({}, params), { grant_type: 'client_credential' });
                    } }))];
        });
    }); },
    /**
     * 获取微信小程序的稳定 Access Token
     * @param options
     * @returns
     */
    getStableAccessToken: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/stable_token', method: 'POST', contentType: 'application/json' }, options), { normalizeRequestData: function (data) {
                        return tslib_1.__assign(tslib_1.__assign({}, data), { grant_type: 'client_credential', force_refresh: (data === null || data === void 0 ? void 0 : data.force_refresh) === true });
                    } }))];
        });
    }); },
};
exports.default = weappTokenApi;
//# sourceMappingURL=weapp-token.api.js.map