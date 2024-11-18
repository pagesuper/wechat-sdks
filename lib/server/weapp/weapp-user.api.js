"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var weapp_util_1 = tslib_1.__importDefault(require("../../utils/weapp.util"));
var weappUserApi = {
    /**
     * 获取手机号：
     * - 服务API；https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html
     * - 前端API：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
     */
    getPhoneNumber: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/business/getuserphonenumber', method: 'POST' }, options))];
        });
    }); },
    /** 获取用户加密信息：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/internet/getUserEncryptKey.html */
    getUserEncryptKey: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/business/getuserencryptkey', method: 'GET' }, options))];
        });
    }); },
    /** 支付后获取 Unionid：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/basic-info/getPaidUnionid.html */
    getPaidUnionid: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/getpaidunionid', method: 'GET' }, options))];
        });
    }); },
    /** 检查加密数据：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/basic-info/checkEncryptedData.html */
    checkEncryptedData: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/business/checkencryptedmsg', method: 'POST' }, options))];
        });
    }); },
    /** 获取插件 openpid：https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/basic-info/getPluginOpenPId.html */
    getPluginOpenPId: function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, weapp_util_1.default.request(tslib_1.__assign({ url: 'https://api.weixin.qq.com/wxa/getpluginopenpid', method: 'POST' }, options))];
        });
    }); },
};
exports.default = weappUserApi;
//# sourceMappingURL=weapp-user.api.js.map