import assert from 'power-assert';
import weappTokenUtil from '../../../../src/server/weapp/weapp-token.api';
import testConfig from '../../../test.config';

describe('weappTokenUtil.getAccessToken', () => {
  test('error: error appid', async () => {
    const result = await weappTokenUtil.getAccessToken({
      params: {
        appid: 'xxx',
        secret: testConfig.weapp.secret,
      },
    });

    // console.log('weappTokenUtil.getAccessToken: ...', result);
    assert.equal(result.status, 'error');
    assert.equal(result.code, 'FailCode#40013');
    assert.ok(result.message.startsWith('invalid appid rid:'));
  });

  test('error: error secret', async () => {
    const result = await weappTokenUtil.getAccessToken({
      params: {
        appid: testConfig.weapp.appid,
        secret: 'xxx',
      },
    });

    // console.log('weappTokenUtil.getAccessToken: ...', result);
    assert.equal(result.status, 'error');
    assert.equal(result.code, 'FailCode#40125');
    assert.ok(result.message.startsWith('invalid appsecret rid:'));
  });

  test('ok', async () => {
    const result = await weappTokenUtil.getAccessToken({
      params: {
        appid: testConfig.weapp.appid,
        secret: testConfig.weapp.secret,
      },
    });

    console.log('weappTokenUtil.getAccessToken: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.notEqual(result.data?.access_token, '');
    assert.notEqual(result.data?.expires_in, undefined);
  });
});

describe('weappTokenUtil.getStableAccessToken', () => {
  test('ok', async () => {
    const result = await weappTokenUtil.getStableAccessToken({
      data: {
        appid: testConfig.weapp.appid,
        secret: testConfig.weapp.secret,
        force_refresh: false,
      },
    });

    console.log('weappTokenUtil.getStableAccessToken: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.notEqual(result.data?.access_token, '');
    assert.notEqual(result.data?.expires_in, undefined);
  });
});
