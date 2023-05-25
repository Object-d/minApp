import Taro from '@tarojs/taro';


const baseUrl = 'https://fk.zenergy.cn:8095/';
/**
 * 封封微信的的request
 */
function request(url, data = {}, method = "GET") {
  const token = Taro.getStorageSync('token')
  return new Promise(function(resolve, reject) {
    Taro.request({
      url: baseUrl + url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        'Authorization': token ? `${token.token_type} ${token.access_token}` : undefined
      },
      success: function(res) {
        const access_token = res?.data?.data?.access_token
        if (access_token) {
          Taro.setStorageSync('token', res?.data?.data);
        }
        resolve(res.data);
      },
      fail: function(err) {
        reject(err)
      }
    })
  });
}

request.get = (url, data) => {
  return request(url, data, 'GET');
}

request.post = (url, data) => {
  return request(url, data, 'POST');
}

export default request;
