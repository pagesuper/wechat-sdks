"use strict";
// https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/mp-access-token/getAccessToken.html
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var basic_util_1 = tslib_1.__importDefault(require("almighty-tool/lib/utils/basic.util"));
var weappTokenApi = {
    getAccessToken: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = {
                        status: 'error',
                        code: 'RequestFail',
                        message: '',
                    };
                    return [4 /*yield*/, fetch(basic_util_1.default.buildUrl('https://api.weixin.qq.com/cgi-bin/token', {
                            grant_type: 'client_credential',
                            appid: options.appid,
                            secret: options.secret,
                        }))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (response.status === 200) {
                        if (data.errcode) {
                            result.code = "FailCode#".concat(data.errcode);
                            result.message = data.errmsg;
                        }
                        else {
                            result.status = 'ok';
                            result.code = '';
                            result.message = '';
                            result.data = {
                                accessToken: data.access_token,
                                expiresIn: data.expires_in,
                            };
                        }
                    }
                    else {
                        result.code = "HTTPCode#".concat(response.status);
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
    getStableAccessToken: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    result = {
                        status: 'error',
                        code: 'RequestFail',
                        message: '',
                    };
                    return [4 /*yield*/, fetch(basic_util_1.default.buildUrl('https://api.weixin.qq.com/cgi-bin/stable_token'), {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                grant_type: 'client_credential',
                                appid: options.appid,
                                secret: options.secret,
                                force_refresh: options.forceRefresh === true,
                            }),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (response.status === 200) {
                        if (data.errcode) {
                            result.code = "FailCode#".concat(data.errcode);
                            result.message = data.errmsg;
                        }
                        else {
                            result.status = 'ok';
                            result.code = '';
                            result.message = '';
                            result.data = {
                                accessToken: data.access_token,
                                expiresIn: data.expires_in,
                            };
                        }
                    }
                    else {
                        result.code = "HTTPCode#".concat(response.status);
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
};
exports.default = weappTokenApi;
//# sourceMappingURL=weapp-token.api.js.map