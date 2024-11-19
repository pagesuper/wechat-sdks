import assert from 'power-assert';
import weappSafetyApi from '../../../../src/server/weapp/weapp-safety.api';
import testConfig from '../../../test.config';

describe('weappSafetyApi.msgSecCheck', () => {
  // test('ok: risky', async () => {
  //   const result = await weappSafetyApi.msgSecCheck({
  //     params: {
  //       access_token: testConfig.weapp.access_token,
  //     },
  //     data: {
  //       content: '测试内容：出售枪支',
  //       scene: 1,
  //       openid: 'o1D3m5SLKQrIZzlmq_5EvuM5XRG4',
  //     },
  //   });

  //   console.log('weappSafetyApi.msgSecCheck: ...', result);
  //   assert.equal(result.status, 'ok');
  //   assert.equal(result.code, '');
  //   assert.equal(result.message, '');
  //   assert.equal(result.data?.result.suggest, 'risky');
  //   assert.equal(result.data?.result.label, 20006);
  // });

  test('ok: pass', async () => {
    const result = await weappSafetyApi.msgSecCheck({
      params: {
        access_token: testConfig.weapp.access_token,
      },
      data: {
        content: '测试内容：正常内容',
        scene: 1,
        openid: 'o1D3m5SLKQrIZzlmq_5EvuM5XRG4',
      },
    });

    console.log('weappSafetyApi.msgSecCheck: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.equal(result.data?.result.suggest, 'pass');
    assert.equal(result.data?.result.label, 100);
  });
});

// describe('weappSafetyApi.mediaCheckAsync', () => {
//   test('ok', async () => {
//     const result = await weappSafetyApi.mediaCheckAsync({});
//   });
// });

describe('weappSafetyApi.getUserRiskRank', () => {
  test('ok', async () => {
    const result = await weappSafetyApi.getUserRiskRank({
      params: {
        access_token: testConfig.weapp.access_token,
      },
      data: {
        openid: 'o1D3m5SLKQrIZzlmq_5EvuM5XRG4',
        appid: testConfig.weapp.appid,
        scene: 1,
        client_ip: '127.0.0.1',
      },
    });

    console.log('weappSafetyApi.getUserRiskRank: ...', result);
    assert.equal(result.status, 'ok');
    assert.equal(result.code, '');
    assert.equal(result.message, '');
    assert.equal(result.data?.risk_rank, 0);
    assert.equal(typeof result.data?.unoin_id, 'number');
  });
});
