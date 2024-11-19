// import assert from 'power-assert';
// import weappLoginApi from '../../../../src/server/weapp/weapp-login.api';
// import testConfig from '../../../test.config';
// import cryptoUtil from 'almighty-tool/lib/utils/crypto.util';

// wx.login({{ success: (res) => { console.log(res) } })

// describe('weappLoginApi.code2Session', () => {
//   test('ok', async () => {
//     const result = await weappLoginApi.code2Session({
//       params: {
//         appid: testConfig.weapp.appid,
//         secret: testConfig.weapp.secret,
//         js_code: '0a1L2C100AROdT1B0R000hWMCv2L2C1R',
//       },
//     });

//     console.log('weappLoginApi.code2Session: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });

// describe('weappLoginApi.checkSessionKey', () => {
//   test('ok', async () => {
//     const result = await weappLoginApi.checkSessionKey({
//       params: {
//         openid: 'o1D3m5SLKQrIZzlmq_5EvuM5XRG4',
//         signature: cryptoUtil.hmac('K4SA0V2+hVT8rx7WEZyltQ==', '', 'sha256'),
//         access_token: testConfig.weapp.access_token,
//       },
//     });

//     console.log('weappLoginApi.checkSessionKey: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });

// describe('weappLoginApi.resetUserSessionKey', () => {
//   test('ok', async () => {
//     const result = await weappLoginApi.resetUserSessionKey({
//       params: {
//         openid: 'o1D3m5SLKQrIZzlmq_5EvuM5XRG4',
//         signature: cryptoUtil.hmac('K4SA0V2+hVT8rx7WEZyltQ==', '', 'sha256'),
//         access_token: testConfig.weapp.access_token,
//       },
//     });

//     console.log('weappLoginApi.resetUserSessionKey: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });
