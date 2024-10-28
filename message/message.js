// message.js

// 上传留言（只上传留言内容）
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
  
  // 获取所有留言并以表格形式展示（只显示留言内容）
  function getMessages() {
    const query = new AV.Query('Message');
    query.descending('createdAt'); // 按创建时间降序排列
    query.find().then((results) => {
      const messagesContainer = document.getElementById('messages');
      messagesContainer.innerHTML = ''; // 清空已有内容
  
      // 创建表格
      const table = document.createElement('table');
      table.border = "1"; // 设置表格边框
      table.style.width = "100%";
      table.style.textAlign = "left";
  
      // 创建表头
      const headerRow = document.createElement('tr');
      const contentHeader = document.createElement('th');
      contentHeader.innerText = "留言内容";
      headerRow.appendChild(contentHeader);
      table.appendChild(headerRow);
  
      // 填充表格内容
      results.forEach((message) => {
        const content = message.get('content');
  
        const row = document.createElement('tr');
        const contentCell = document.createElement('td');
        contentCell.innerText = content;
  
        row.appendChild(contentCell);
        table.appendChild(row);
      });
  
      messagesContainer.appendChild(table); // 将表格添加到容器
    }).catch((error) => {
      console.error('留言获取失败:', error);
    });
  }
  
  // 提交留言的事件处理函数
  function handleSubmit() {
    const content = document.getElementById('content').value;
    if (content) {
      uploadMessage(content);
    } else {
      alert('请填写留言内容');
    }
  }
  