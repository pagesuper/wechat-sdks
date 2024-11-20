import assert from 'power-assert';
import offiaccountTokenApi from '../../../../src/server/offiaccount/offiaccount-token.api';
import testConfig from '../../../test.config';
// import fs from 'fs';
// import path from 'path';

describe('offiaccountTokenApi.getAccessToken', () => {
  test('ok', async () => {
    const result = await offiaccountTokenApi.getAccessToken({
      params: {
        appid: testConfig.offiaccount.appid,
        secret: testConfig.offiaccount.secret,
      },
    });

    console.log('offiaccountTokenApi.getAccessToken: ...', result);
    assert.equal(result.status, 'ok');
    assert.ok(result.data?.access_token && result.data?.access_token.length > 0);
    assert.ok(result.data?.expires_in && result.data?.expires_in > 0);
  });
});
