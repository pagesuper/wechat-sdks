// import assert from 'power-assert';
// import weappOpenApi from '../../../../src/server/weapp/weapp-open-api.api';
// import testConfig from '../../../test.config';

// describe('weappOpenApi.clearQuota', () => {
//   test('error: accessToken missing', async () => {
//     const result = await weappOpenApi.clearQuota({
//       params: {
//         access_token: '',
//       },
//       data: {
//         appid: testConfig.weapp.appid,
//       },
//     });

//     console.log('weappOpenApi.clearQuota: ...', result);
//     assert.equal(result.status, 'error');
//     assert.equal(result.code, 'FailCode#41001');
//     assert.ok(result.message.startsWith('access_token missing rid:'));
//   });

//   test('ok', async () => {
//     const result = await weappOpenApi.clearQuota({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         appid: testConfig.weapp.appid,
//       },
//     });

//     console.log('weappOpenApi.clearQuota: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });

// describe('weappOpenApi.get', () => {
//   test('error: accessToken missing', async () => {
//     const result = await weappOpenApi.getQuota({
//       params: {
//         access_token: '',
//       },
//       data: {
//         cgi_path: '/cgi-bin/message/custom/send',
//       },
//     });

//     console.log('weappOpenApi.get: ...', result);
//     assert.equal(result.status, 'error');
//     assert.equal(result.code, 'FailCode#41001');
//     assert.ok(result.message.startsWith('access_token missing rid:'));
//   });

//   test('ok', async () => {
//     const result = await weappOpenApi.getQuota({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         cgi_path: '/cgi-bin/message/custom/send',
//       },
//     });

//     console.log('weappOpenApi.get: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//     assert.deepEqual(result.data, {
//       errcode: 0,
//       errmsg: 'ok',
//       quota: {
//         daily_limit: 5000000,
//         used: 0,
//         remain: 5000000,
//       },
//       rate_limit: {
//         call_count: 1260000,
//         refresh_second: 60,
//       },
//       component_rate_limit: {
//         call_count: 1050000,
//         refresh_second: 60,
//       },
//     });
//   });
// });

// describe('weappOpenApi.getRidInfo', () => {
//   test('error: rid not found', async () => {
//     const result = await weappOpenApi.getRidInfo({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         rid: '1234567890',
//       },
//     });

//     console.log('weappOpenApi.getRidInfo: ...', result);
//     assert.equal(result.status, 'error');
//     assert.equal(result.code, 'FailCode#76002');
//     assert.ok(result.message.startsWith('rid is error, please check rid:'));
//   });

//   test('ok', async () => {
//     const result = await weappOpenApi.getRidInfo({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         rid: '673af10a-2a918ce9-3decf6db',
//       },
//     });

//     console.log('weappOpenApi.getRidInfo: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//     assert.deepEqual(result.data, {
//       errcode: 0,
//       errmsg: 'ok',
//       request: {
//         invoke_time: 1731916042,
//         cost_in_ms: 97,
//         request_url:
//           'access_token=86_s4F-zC3bmLWEwf4ATjffaj4W2ivTQzqwpiiNOdz1EznCjxxmAGYFAi3vcA9_PS5gpDF-V2sqIeaq9G-cb-Pn5dHINuq0BQnaC9xQhWUgQAn1YxE6AdWcKHmkIxoOHDgAEAXQM',
//         request_body: '{"rid":"1234567890"}',
//         response_body: '{"errcode":76002,"errmsg":"rid is error, please check rid: 673af10a-2a918ce9-3decf6db"}',
//         client_ip: '121.13.250.76',
//       },
//     });
//   });
// });

// describe('weappOpenApi.clearQuotaByAppSecret', () => {
//   test('ok', async () => {
//     const result = await weappOpenApi.clearQuotaByAppSecret({
//       params: {
//         appid: testConfig.weapp.appid,
//         appsecret: testConfig.weapp.secret,
//       },
//     });

//     console.log('weappOpenApi.clearQuotaByAppSecret: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });
