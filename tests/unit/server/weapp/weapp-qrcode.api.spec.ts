import assert from 'power-assert';
import weappQRCodeApi from '../../../../src/server/weapp/weapp-qrcode.api';
import testConfig from '../../../test.config';
import fs from 'fs';

// describe('weappQRCodeApi.getQRCode', () => {
//   test('error: invalid page path', async () => {
//     const result = await weappQRCodeApi.getQRCode({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         path: '',
//       },
//     });

//     console.log('weappQRCodeApi.getQRCode: ...', result);
//     assert.equal(result.status, 'error');
//     assert.equal(result.code, 'FailCode#40159');
//     assert.ok(result.message.startsWith('invalid length for path, or the data is not json string'));
//   });

//   test('ok', async () => {
//     const result = await weappQRCodeApi.getQRCode({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         path: '/pages/tabs/index',
//         env_version: 'develop',
//       },
//     });

//     console.log('weappQRCodeApi.getQRCode: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//     assert.ok(result.data instanceof ArrayBuffer);

//     if (result.data instanceof ArrayBuffer) {
//       fs.mkdirSync('./tmp', { recursive: true });
//       fs.writeFileSync('./tmp/qrcode.png', Buffer.from(result.data));
//     }
//   });
// });

// describe('weappQRCodeApi.getUnlimitedQRCode', () => {
//   test('error: invalid page path', async () => {
//     const result = await weappQRCodeApi.getUnlimitedQRCode({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         scene: '',
//       },
//     });

//     console.log('weappQRCodeApi.getUnlimitedQRCode: ...', result);
//     assert.equal(result.status, 'error');
//     assert.equal(result.code, 'FailCode#40169');
//     assert.ok(result.message.startsWith('invalid length for scene, or the data is not json string rid'));
//   });

//   test('ok', async () => {
//     const result = await weappQRCodeApi.getUnlimitedQRCode({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         scene: 'test',
//         env_version: 'develop',
//       },
//     });

//     console.log('weappQRCodeApi.getUnlimitedQRCode: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//     assert.ok(result.data instanceof ArrayBuffer);

//     if (result.data instanceof ArrayBuffer) {
//       fs.mkdirSync('./tmp', { recursive: true });
//       fs.writeFileSync('./tmp/qrcode-unlimited.png', Buffer.from(result.data));
//     }
//   });
// });

// describe('weappQRCodeApi.getUnlimitedQRCode', () => {
//   test('error: invalid page path', async () => {
//     const result = await weappQRCodeApi.getUnlimitedQRCode({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         scene: '',
//       },
//     });

//     console.log('weappQRCodeApi.getUnlimitedQRCode: ...', result);
//     assert.equal(result.status, 'error');
//     assert.equal(result.code, 'FailCode#40169');
//     assert.ok(result.message.startsWith('invalid length for scene, or the data is not json string rid'));
//   });

//   test('ok', async () => {
//     const result = await weappQRCodeApi.getUnlimitedQRCode({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         scene: 'test',
//         env_version: 'develop',
//       },
//     });

//     console.log('weappQRCodeApi.getUnlimitedQRCode: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//     assert.ok(result.data instanceof ArrayBuffer);

//     if (result.data instanceof ArrayBuffer) {
//       fs.mkdirSync('./tmp', { recursive: true });
//       fs.writeFileSync('./tmp/qrcode-unlimited.png', Buffer.from(result.data));
//     }
//   });
// });

describe('weappQRCodeApi.createQRCode', () => {
  test('error: invalid page path', async () => {
    const result = await weappQRCodeApi.createQRCode({
      params: {
        access_token: testConfig.weapp.access_token,
      },
      data: {
        path: '',
      },
    });

    console.log('weappQRCodeApi.createQRCode: ...', result);
    assert.equal(result.status, 'error');
    assert.equal(result.code, 'FailCode#40159');
    assert.ok(result.message.startsWith('invalid length for path, or the data is not json string rid:'));
  });

  test('ok', async () => {
    const result = await weappQRCodeApi.createQRCode({
      params: {
        access_token: testConfig.weapp.access_token,
      },
      data: {
        path: '/pages/tabs/index',
      },
    });

    console.log('weappQRCodeApi.createQRCode: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.ok(result.data instanceof ArrayBuffer);

    if (result.data instanceof ArrayBuffer) {
      fs.mkdirSync('./tmp', { recursive: true });
      fs.writeFileSync('./tmp/qrcode-create.png', Buffer.from(result.data));
    }
  });
});
