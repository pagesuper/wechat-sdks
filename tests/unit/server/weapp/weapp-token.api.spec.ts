import assert from 'power-assert';
import weappTokenUtil from '../../../../src/server/weapp/weapp-token.api';
import testConfig from '../../../test.config';

describe('weappTokenUtil.getAccessToken', () => {
  test('ok', async () => {
    const result = await weappTokenUtil.getAccessToken({
      appid: testConfig.appid,
      secret: testConfig.secret,
    });

    console.log('weappTokenUtil.getAccessToken: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.notEqual(result.data?.accessToken, '');
    assert.notEqual(result.data?.expiresIn, undefined);
  });
});

describe('weappTokenUtil.getStableAccessToken', () => {
  test('ok', async () => {
    const result = await weappTokenUtil.getStableAccessToken({
      appid: testConfig.appid,
      secret: testConfig.secret,
      forceRefresh: false,
    });

    console.log('weappTokenUtil.getStableAccessToken: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.notEqual(result.data?.accessToken, '');
    assert.notEqual(result.data?.expiresIn, undefined);
  });
});
