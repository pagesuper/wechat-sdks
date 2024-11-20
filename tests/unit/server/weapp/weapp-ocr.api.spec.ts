import assert from 'power-assert';
import weappOcrApi from '../../../../src/server/weapp/weapp-orc.api';
import testConfig from '../../../test.config';

describe('weappOcrApi.printedTextOCR', () => {
  test('ok', async () => {
    const result = await weappOcrApi.printedTextOCR({
      params: {
        access_token: testConfig.weapp.access_token,
      },
      data: {
        img_url: 'https://m.360buyimg.com/babel/jfs/t20270821/244767/31/17428/121959/66c5c944F36baa4d2/09a06337264c15f6.png',
      },
    });

    console.log('weappOcrApi.printedTextOCR: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.equal(result.data?.items?.length, 15);
    assert.equal(result.data?.img_size?.w, 1065);
    assert.equal(result.data?.img_size?.h, 555);
    assert.deepEqual(
      result.data?.items?.map((item) => item.text),
      [
        '08.17',
        'Timeless Earth',
        ':美丽的地球',
        '上新',
        '三三高',
        '高山',
        '征服高山',
        '亲近自然',
        'Worid',
        'Greatest',
        'Mountains',
        'NEW',
        '新出版',
        '中国国家地理美丽的地球系列:高山',
        '300余幅珍藏级摄影作品，呈现世界70余座宏伟高山',
      ],
    );
  });
});
