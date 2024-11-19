"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var requestUtil = {
    getFileBuffer: function (url) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var response, _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _c.sent();
                    _b = (_a = Buffer).from;
                    return [4 /*yield*/, response.arrayBuffer()];
                case 2: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
            }
        });
    }); },
};
exports.default = requestUtil;
//# sourceMappingURL=request.util.js.map