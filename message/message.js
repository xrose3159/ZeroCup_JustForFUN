/*
 * @Author: bddk
 * @Date: 2024-10-28 23:24:37
 * @LastEditors: bddk
 * @LastEditTime: 2024-10-28 23:29:52
 */
// message.js

// 上传留言函数（只上传留言内容）
function uploadMessage(content) {
  const Message = AV.Object.extend('Message');
  const message = new Message();
  message.set('content', content);
  return message.save().then((savedMessage) => {
    console.log('留言已保存:', savedMessage);
    alert('留言成功！');
    getMessages(); // 上传后自动刷新留言列表
  }).catch((error) => {
    console.error('留言保存失败:', error.message); // 显示错误消息
  });
}

// 获取所有留言并返回字典形式
function getMessages() {
  const query = new AV.Query('Message');
  query.descending('createdAt'); // 按创建时间降序排列

  return query.find().then((results) => {
    const messagesDict = {};

    results.forEach((message) => {
      const id = message.id;
      const content = message.get('content');
      messagesDict[id] = content;
    });

    return messagesDict;
  }).catch((error) => {
    console.error('留言获取失败:', error);
    return {}; // 返回空对象表示获取失败
  });
}
