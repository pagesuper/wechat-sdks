# wechat-sdks

- 服务器端接口(能在服务器端快捷的调用腾讯的服务): weapp(微信小程序 - 已实现部分), wecom(企业微信 - 尚未实现)
- 客户端接口(能在客户端快捷的调用腾讯微信相关SDK): weapp(微信小程序 - 尚未实现), wecom(企业微信 - 尚未实现)

## 插件使用文档

```bash
# 要求
# 服务器端：node >= 18.0.0

# 安装
yarn add wechat-sdks
# or
npm install wechat-sdks --save
# or
bun add wechat-sdks
```

## 已完成API

### 服务器端：微信小程序API(weapp)

```ts
// 登录相关API
import weappLoginApi from 'wechat-sdks/lib/server/weapp/weapp-login.api';

/** 登录 */
const result = await weappLoginApi.code2Session({
  params: {
    appid: 'wxa1234567890',
    secret: '1234567890',
    js_code: '1234567890',
  },
});

if (result.status === 'ok') {
  result.data?.openid;
  result.data?.unionid;
  result.data?.session_key;
}

/** 检查登录态 */
weappLoginApi.checkSessionKey({ ... });
/** 重置登录态 */
weappLoginApi.resetUserSessionKey({ ... });

// 获取微信小程序的 Access Token
import weappTokenApi from 'wechat-sdks/lib/server/weapp/weapp-token.api ';

/** 获取微信小程序的 Access Token */
weappTokenApi.getAccessToken({ ... });
/** 获取稳定的微信小程序的 Access Token */
weappTokenApi.getStableAccessToken({ ... });

// 用户相关API
import weappUserApi from 'wechat-sdks/lib/server/weapp/weapp-user.api';

/** 获取用户支付的UnionID */
weappUserApi.getPaidUnionid({ ... });
/** 检查加密数据 */
weappUserApi.checkEncryptedData({ ... });
/** 获取用户手机号 */
weappUserApi.getPhoneNumber({ ... });

// 开放API
import weappOpenApi from 'wechat-sdks/lib/server/weapp/weapp-open-api.api';

/** 清除API调用配额 */
weappOpenApi.clearQuota({ ... });
/** 获取API调用配额 */
weappOpenApi.getApiQuota({ ... });
/** 获取请求ID信息 */
weappOpenApi.getRidInfo({ ... });
/** 清除API调用配额 */
weappOpenApi.clearQuotaByAppSecret({ ... });

// 二维码相关API
import weappQRCodeApi from 'wechat-sdks/lib/server/weapp/weapp-qrcode.api';

/** 获取小程序码 */
weappQRCodeApi.getQRCode({ ... });
/** 获取小程序码（永久有效, 数量不限制） */
weappQRCodeApi.getUnlimitedQRCode({ ... });
/** 创建二维码 */
weappQRCodeApi.createQRCode({ ... });

// 内容安全API
import weappSafetyApi from 'wechat-sdks/lib/server/weapp/weapp-safety.api';

/** 内容安全-文本内容安全检测 */
weappSafetyApi.msgSecCheck({ ... });
/** 内容安全-图片内容安全检测 */
weappSafetyApi.mediaCheckAsync({ ... });
/** 内容安全-用户风险等级 */
weappSafetyApi.getUserRiskRank({ ... });
```

## 待开发API

### 服务器端：微信小程序API(weapp)

```ts
// ...
```

## Build Setup

``` bash
$ yarn install
$ yarn run test
$ yarn run test --watch
```

## 参考文档

- [微信开放平台](https://open.weixin.qq.com/)
- [微信公众平台](https://mp.weixin.qq.com/)
- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/)
