import fs from 'fs';
import path from 'path';
import assert from 'power-assert';
import weappImageApi from '../../../../src/server/weapp/weapp-image.api';
import testConfig from '../../../test.config';

describe('weappImageApi.scanQRCode', () => {
  test('ok', async () => {
    const result = await weappImageApi.scanQRCode({
      params: {
        access_token: testConfig.weapp.access_token,
      },
      data: {
        // img_url: 'https://res.wx.qq.com/mpres/htmledition/images/mp_qrcode721d4e.gif',
        img: fs.readFileSync(path.resolve(process.cwd(), 'tests', 'data', 'image-qrcode.gif')),
      },
    });

    console.log('weappImageApi.scanQRCode: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.deepEqual(result.data, {
      errcode: 0,
      errmsg: 'ok',
      code_results: [
        {
          type_name: 'QR_CODE',
          data: 'http://weixin.qq.com/r/RHU6NQjE1japhxlWnyBg',
          charset: 'UTF-8',
          pos: {
            left_top: {
              x: 0,
              y: 1,
            },
            right_top: {
              x: 100,
              y: 1,
            },
            right_bottom: {
              x: 100,
              y: 100,
            },
            left_bottom: {
              x: 0,
              y: 100,
            },
          },
        },
      ],
      img_size: {
        w: 102,
        h: 102,
      },
    });
  });
});

// describe('weappImageApi.superResolution', () => {
//   test('ok', async () => {
//     const result = await weappImageApi.superResolution({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         // img_url: 'https://m.360buyimg.com/babel/jfs/t20270821/244767/31/17428/121959/66c5c944F36baa4d2/09a06337264c15f6.png',
//         img: fs.readFileSync(path.resolve(process.cwd(), 'tests', 'data', 'image-small.png')),
//       },
//     });

//     console.log('weappImageApi.superResolution: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });

// describe('weappImageApi.aiCrop', () => {
//   test('ok', async () => {
//     const result = await weappImageApi.aiCrop({
//       params: {
//         access_token: testConfig.weapp.access_token,
//       },
//       data: {
//         img: fs.readFileSync(path.resolve(process.cwd(), 'tests', 'data', 'image-large.jpg')),
//       },
//     });

//     console.log('weappImageApi.aiCrop: ...', result);
//     assert.equal(result.status, 'ok');
//     assert.equal(result.code, '');
//     assert.equal(result.message, '');
//   });
// });
