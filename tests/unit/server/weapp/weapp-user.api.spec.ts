// import assert from 'power-assert';
// import weappUserApi from '../../../../src/server/weapp/weapp-user.api';
// import testConfig from '../../../test.config';

// describe('weappUserApi.getPaidUnionid', () => {
//   test('ok', async () => {
//     const result = await weappUserApi.getPaidUnionid({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//     });
//   });
// });

// describe('weappUserApi.checkEncryptedData', () => {
//   test('ok', async () => {
//     const result = await weappUserApi.getPhoneNumber({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         code: '802f7d782b7b76087998cd32bbf068bf48394e75d03efb2121045f9eeb7a1aa0',
//       },
//     });

//     console.log('weappUserApi.getPhoneNumber: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });
