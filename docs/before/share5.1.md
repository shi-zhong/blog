---
title: 前端分享
tag: 前端
date: 2021.3.16
---

### 前端请求

  小程序完成静态之后需要与后端联调, 所以需要掌握与后端联系的方法, 请求(request)就是与后端联系的通道.
  通俗地讲, 请求就是一个网址, 电脑解析网址之后向去找到网址对应的IP地址, 并携带信息去访问目的地址. 直接在浏览器地址里面输入API的URL, 浏览器也会尝试用默认的方法和首部构建请求访问并获取信息.

#### XMLHttpRequest

  [XHR](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)是一个经典的浏览器对象, 用于构建与服务器的连接.

  与大多数其他的浏览器对象相似, 我们想要使用XHR, 首先就是要创建XHR实例.
  ``` js
  const XHR = new XMLHttpRequest();
  ```

  打开控制台, 在里面输入上述语句, 并查看XHR中包含的属性, 通过控制台输出的信息, 我们可以了解到关于XHR的很多信息.

  常见属性:

  * xhr.[readyState](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState)：XMLHttpRequest对象的状态，等于4表示数据已经接收完毕。
  * xhr.status：服务器返回的状态码。
  * xhr.response[...]：服务器响应数据
  * xhr.timeout：限制响应时长。
  * xhr.upload：上传进度。

  常见方法:

  * xhr.open：加载请求。
  * xhr.send：发送请求。

  ...

  更多属性参见MDN

  大概了解 XHR 里面有什么东西之后,请求的问题便迎刃而解.

  ``` js

    // 简单的请求功能

    function XHR(URL, method) {
      const XHR = new XMLHttpRequest();
      // xhrReq.open(method, url, async, user, password);
      XHR.open(method, URL, true);
    }

  ```

  打开F12 在NETWORK中查看请求是否发送成功;
  如果看到了你填写的网址出现,并且是200, 那么说明这个请求成功发送了;
  现在我们需要做的就是拿到数据并且加工后展示在我们的页面里面.

  在send成功并且返回数据之后, xhr 对象会调用 `onreadystatechange` 函数, 告知状态发生变化, 获取到的信息会存放在response 相关的几个属性.

  举例来说

  ``` js
    xhr.onreadystatechange = () => {
      if (xhr.status === 200) {
          renderMoreChild({
              intro: 'response',
              value: xhr.responseText
          })
      }
    }
  ```

  这样就可以从xhr 中取出存在responseText里面的数据了, 不只是Text, 也会有其他数据, 一般来说我们都只会用到json 的数据,其他类型的可以自行谷歌.

  简单的封装样例

  ``` js

    function XHR(url = '/', method = "GET", options = {}) {
        const preHttp = "http://localhost:9090/default";

        try {
          const xhr = new XMLHttpRequest();
          if (xhr) {
              xhr.open(method.toUpperCase(), preHttp + url, false);
              xhr.setRequestHeader('token', options.token || "");
              xhr.onload = options.onload || null;
              xhr.onloadend = options.onloadend || null;
              xhr.onerror = options.onerror || null;
              xhr.ontimeout = options.ontimeout || null;
              xhr.onreadystatechange = options.onreadystatechange.bind(this, xhr) || null;
              // ...
              xhr.send();
              return xhr;
          }
        } catch (err) {
          throw err;
          // ...
        }
    }

  ```


#### fetch

  fetch 是 XHR 的进阶版,基于XHR进行了改进和封装, 相较于 XHR更新并且更加灵活.
  fetch 提供了 Response 和 Request 对象, 接收一个地址, 无论成功与否, 返回一个Response对象;

  最简单的fetch操作

  ``` js
    fetch(url)
    .then( response => response.json())
    .then( json => render(json))
    .catch(err => throw err)
  ``` 
  - response.text()：得到文本字符串。
  - response.json()：得到 JSON 对象。
  - response.blob()：得到二进制 Blob 对象。
  - response.formData()：得到 FormData 表单对象。
  - response.arrayBuffer()：得到二进制 ArrayBuffer 对象。

  一切都是按照默认的程序进行, 第二个参数用来决定请求的细节

  举个例子, 具体细节参考 MDN Request接口

  ``` ts
    
    interface optionObj {
      method: 'POST'|'GET'|'DELETE'|'PUT';
      header: object;
      body: FormData | object;
      cache: "default"|"no-store"|"reload"|"no-cache"|"force-cache"|"only-if-cached",
      mode: "cors"|"same-origin"|"no-cors", 
      credentials: "same-origin"|"include"|"omit",
      redirect: "follow"|"error"|"manual",
      integrity: hash,
      referrer: "about:client",
      referrerPolicy: "no-referrer-when-downgrade",
      keepalive: false,
      signal: undefined
    }

    const fetch = (url: string, optionObj: optionObj): Response<T> => {...}

  ```

  封装举例

  现阶段用到的部分不多, fetch的大部分参数用不到, 最频繁的就是 URL method body 三个属性, 封装主要考虑这三者;

  成熟的封装网上有很多, 大家可以参考谷歌

  ``` js

    interface optionObj {
      header: object;
      token: boolean;
      body: Formdata | object | blob;
    }

    const Fetch = (url: string, method: 'POST'|'GET'|'DELETE'|'PUT', optionObj: optionObj): Response => {
      
      const preHttp = "https://baseurl.com/api/v1"

      return fetch(preHttp + url, {
        method: method.toUpperCase(),
        header: {
          'content-type': 'application/json',
          ...(optionObj.header || {}),
          token: optionObj.token && token.getToken()
        },
        body: optionObj.body
      }).then( res => {
        switch (res.ok) {
          case 200: 
            return res.json();
          case 400:
          case 401:
          case 404:
          case 500:
          case 502:
            // 错误处理
        }
      })
    }


  ```

  小程序用的请求示例


  ``` js
    const preHttp = 'https://baseUrl.com/api/v1';
    const Fetch = (url, data = {}, method = 'GET') => {
      const header = {
        'content-type': 'application/json',
        token: Taro.getStorageSync('token')
      };
      return Taro.request({
        url: preHttp + url,
        data,
        method,
        header
      }).then(res => {
        switch (res.statusCode) {
          case 200: 
            if (res.data) {
              return res.data;
            } else {
              return res.code;
            }
          case 400:
            throw new Error('没有权限访问');
          case 401:
            const id = Taro.getStorageSync('sid')
            const password = Taro.getStorageSync('pwd')
            if ( id&&password ) {
              Taro.request({
                url: 'https://planet.muxixyz.com/lonely_planet/v1/login/',
                data: {
                  sid:id,
                  pwd:password
                },
                method:'POST',
                header:{'content-type': 'application/json'}
              }).then( back => {
                Taro.setStorage({
                  key: 'token',
                  data: back.data.token,
                })
              })
            }
            if (res.data) {
              return res.data;
            } else {
              return res.code;
            }
          case 404:
            throw new Error('not found');
          case 500:
          case 502:
            return {
              msg: 'server_wrong'
            }
            // throw new Error('服务器错误');
        }
      });
    };
  ```


  