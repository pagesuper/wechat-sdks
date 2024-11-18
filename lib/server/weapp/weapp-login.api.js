"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappLoginApi = {
    /** 小程序登录：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/code2Session.html */
    code2Session: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/sns/jscode2session', method: 'GET' }, options), { normalizeRequestParams: function (params) {
                        return tslib_1.__assign(tslib_1.__assign({}, params), { grant_type: 'authorization_code' });
                    } }))];
        });
    }); },
    /** 检验登录态 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/checkSessionKey.html */
    checkSessionKey: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/checksession', method: 'GET' }, options), { normalizeRequestParams: function (params) {
                        return tslib_1.__assign(tslib_1.__assign({}, params), { sig_method: 'hmac_sha256' });
                    } }))];
        });
    }); },
    /** 重置登录态 https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-login/ResetUserSessionKey.html */
    resetUserSessionKey: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/resetusersessionkey', method: 'GET' }, options), { normalizeRequestParams: function (params) {
                        return tslib_1.__assign(tslib_1.__assign({}, params), { sig_method: 'hmac_sha256' });
                    } }))];
        });
    }); },
};
exports.default = weappLoginApi;
//# sourceMappingURL=weapp-login.api.js.map