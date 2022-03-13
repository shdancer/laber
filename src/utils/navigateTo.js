export async function navigateTo(url, animationDuration = 300) {
  return new Promise((resolve, reject) => {
    uni.navigateTo({
      url,
      animationDuration,
      success(result) {
        resolve(result);
      },
      fail(result) {
        reject(result)
      }
    });
  });
}