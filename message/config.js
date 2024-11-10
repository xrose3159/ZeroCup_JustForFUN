// config.js

// 请确保在后端环境变量中配置 appId 和 appKey
// 使用后端代理或者云函数的方式配置 LeanCloud
AV.init({
  appId: '2BUHHvYUOXECHAZIqfOt8ZzN-gzGzoHsz', // 你的 LeanCloud App ID
  appKey: '7DIrdSciqV3pyorLjCCJoDFL', // 你的 LeanCloud App Key
  serverURL: 'https://avoscloud.com' // LeanCloud 大陆服务器 URL
});
