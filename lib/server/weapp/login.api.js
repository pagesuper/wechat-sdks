"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappLoginApi = {
    code2Session: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/sns/jscode2session', method: 'GET' }, options), { normalizeRequestParams: function (params) {
                        return tslib_1.__assign(tslib_1.__assign({}, params), { grant_type: 'authorization_code' });
                    } }))];
        });
    }); },
    checkSessionKey: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/checksession', method: 'GET' }, options), { normalizeRequestParams: function (params) {
                        return tslib_1.__assign(tslib_1.__assign({}, params), { sig_method: 'hmac_sha256' });
                    } }))];
        });
    }); },
    resetUserSessionKey: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/resetusersessionkey', method: 'GET' }, options))];
        });
    }); },
};
exports.default = weappLoginApi;
//# sourceMappingURL=login.api.js.map