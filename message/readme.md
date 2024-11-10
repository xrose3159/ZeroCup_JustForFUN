<!--
 * @Author: bddk
 * @Date: 2024-10-28 23:27:16
 * @LastEditors: bddk
 * @LastEditTime: 2024-10-28 23:33:03
-->

# EchoBoard - 留言功能模块

**EchoBoard** 是一个留言板功能模块，提供了留言的上传和获取功能。通过 `message.js` 文件中的函数，开发者可以轻松集成留言功能到自己的项目中。

## 目录

- [EchoBoard - 留言功能模块](#echoboard---留言功能模块)
  - [目录](#目录)
  - [功能概述](#功能概述)
  - [文件说明](#文件说明)
  - [方法调用说明](#方法调用说明)
    - [上传留言](#上传留言)
    - [获取所有留言](#获取所有留言)
  - [示例](#示例)

## 功能概述

该模块包含以下功能：

- **上传留言**：用户可以提交一条留言，留言内容将上传至数据库并保存。
- **获取留言**：以字典形式返回所有留言，方便在页面上进行处理和展示。

## 文件说明

- **index.html**：一个演示文件，包含了留言的提交和展示功能。可以用作留言功能的使用示例。
- **config.js**：用于初始化 LeanCloud 配置。请在 `config.js` 中设置 LeanCloud 的 `appId` 和 `appKey`。
- **message.js**：包含留言的上传和获取方法，开发者可直接在项目中调用这些方法。

## 方法调用说明

### 上传留言

`uploadMessage(content)`

- **功能**：将留言内容上传并保存到数据库。
- **参数**：
  - `content` (string)：用户输入的留言内容。
- **返回值**：一个 Promise 对象，在成功时返回保存的留言数据对象。
- **示例**：

  ```javascript
  uploadMessage("这是我的留言内容").then(() => {
    console.log("留言上传成功！");
  }).catch((error) => {
    console.error("留言上传失败：", error);
  });
  ```

### 获取所有留言

`getMessages()`

- **功能**：从数据库中获取所有留言，以字典形式返回。
- **参数**：无
- **返回值**：一个 Promise 对象，成功时返回一个字典（对象），格式为 `{ id1: content1, id2: content2, ... }`。
- **示例**：

  ```javascript
  getMessages().then((messagesDict) => {
    console.log("获取的留言数据：", messagesDict);
    // 在页面上处理和展示留言数据
    for (const id in messagesDict) {
      const content = messagesDict[id];
      console.log(`留言 ID: ${id}, 内容: ${content}`);
    }
  }).catch((error) => {
    console.error("留言获取失败：", error);
  });
  ```

## 示例

`index.html` 是一个示例页面，演示了如何使用 `uploadMessage` 和 `getMessages` 方法来实现留言的提交和展示。可以直接在浏览器中打开 `index.html` 查看留言功能的效果。

