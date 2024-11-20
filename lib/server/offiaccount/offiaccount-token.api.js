"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var offiaccount_util_1 = tslib_1.__importDefault(require("../../utils/offiaccount.util"));
var offiaccountTokenApi = {
    getAccessToken: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, offiaccount_util_1.default.request(tslib_1.__assign(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/token', method: 'GET' }, options), { normalizeRequestParams: function (params) {
                        return tslib_1.__assign({ grant_type: 'client_credential' }, params);
                    } }))];
        });
    }); },
};
exports.default = offiaccountTokenApi;
//# sourceMappingURL=offiaccount-token.api.js.map