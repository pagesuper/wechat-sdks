"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappOperationApi = {
    getFeedbackMedia: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/cgi-bin/media/getfeedbackmedia', method: 'GET', dataType: 'buffer' }, options))];
        });
    }); },
};
exports.default = weappOperationApi;
//# sourceMappingURL=weapp-operation.api.js.map