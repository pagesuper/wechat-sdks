import testAccessToken from './test.access-token';

const testConfig = {
  weapp: {
    appid: 'xxx',
    secret: 'xxx',
    access_token: 'xxx',
  },
};

testConfig.weapp.access_token = testAccessToken[testConfig.weapp.appid];

export default testConfig;
