"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var basic_util_1 = tslib_1.__importDefault(require("almighty-tool/lib/utils/basic.util"));
var qs_1 = tslib_1.__importDefault(require("qs"));
var weappUtil = {
    request: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var normalizeRequestParams, normalizeRequestData, normalizeData, params, url, contentType, dataType, method, body, response, originData, message_1, errorResult, rid, result, normalizedData;
        var _a, _b, _c, _d, _e, _f;
        return tslib_1.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    normalizeRequestParams = (_a = options.normalizeRequestParams) !== null && _a !== void 0 ? _a : (function (params) { return params; });
                    normalizeRequestData = (_b = options.normalizeRequestData) !== null && _b !== void 0 ? _b : (function (data) { return data; });
                    normalizeData = (_c = options.normalizeData) !== null && _c !== void 0 ? _c : (function (data) { return data; });
                    params = normalizeRequestParams(options.params);
                    url = basic_util_1.default.buildUrl(options.url, params);
                    contentType = (_d = options.contentType) !== null && _d !== void 0 ? _d : 'application/json';
                    dataType = (_e = options.dataType) !== null && _e !== void 0 ? _e : 'json';
                    method = (_f = options.method) !== null && _f !== void 0 ? _f : 'GET';
                    body = (function () {
                        var data = normalizeRequestData(options.data);
                        if (contentType === 'application/x-www-form-urlencoded') {
                            return qs_1.default.stringify(data);
                        }
                        return JSON.stringify(data);
                    })();
                    console.log('weappUtil.request: ...', url, body);
                    return [4 /*yield*/, fetch(url, {
                            method: method,
                            body: body,
                            headers: {
                                'Content-Type': contentType,
                            },
                        })];
                case 1:
                    response = _g.sent();
                    return [4 /*yield*/, (function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(dataType === 'json')) return [3 /*break*/, 2];
                                        return [4 /*yield*/, response.json()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2: return [2 /*return*/, undefined];
                                }
                            });
                        }); })()];
                case 2:
                    originData = _g.sent();
                    if (response.status === 200) {
                        if (originData === null || originData === void 0 ? void 0 : originData.errcode) {
                            message_1 = originData.errmsg;
                            errorResult = {
                                status: 'error',
                                code: "FailCode#".concat(originData.errcode),
                                message: message_1,
                            };
                            rid = (function () {
                                if (message_1.match(/rid: ([\w-]+)/)) {
                                    return RegExp.$1;
                                }
                            })();
                            if (rid) {
                                errorResult.rid = rid;
                            }
                            return [2 /*return*/, errorResult];
                        }
                        result = {
                            status: 'ok',
                            code: '',
                            message: '',
                        };
                        normalizedData = normalizeData(originData);
                        if (normalizedData) {
                            result.data = normalizedData;
                        }
                        return [2 /*return*/, result];
                    }
                    return [2 /*return*/, {
                            status: 'error',
                            code: "HTTPCode#".concat(response.status),
                            message: '',
                        }];
            }
        });
    }); },
};
exports.default = weappUtil;
//# sourceMappingURL=weapp.util.js.map