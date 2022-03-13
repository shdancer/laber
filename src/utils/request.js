export async function request(url, data, method) {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      data,
      method,
      success(result) {
        resolve(result);
      },
      fail(result) {
        reject(result);
      }
    });
  });
}