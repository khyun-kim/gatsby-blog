---
title: Node.js를 활용한 웹 어플리케이션
date: "2020-02-05"
image: ./cover.png
description: "이 포스트는 Javascript를 이용하여 웹 페이지와 웹 서버를 만드는 과정을 담았습니다. 나중에 보다 쉽게 기억할 수 있도록 적어 놓은 포스트입니다."
---
## 1. 서버

서버는 [Express](https://www.npmjs.com/package/express) 라이브러리를 사용합니다. Express 라이브러리는 서버를 보다 쉽게 작성할 수 있도록 지원하는 라이브러리입니다. 미들웨어라는 개념을 통하여 라우팅을 쉽게 구현하고 관리할 수 있으며, HTTP를 잘 지원하기 때문에 관련 프로토콜로 서버를 작성하는 것이 쉽다.

```javascript
// App.js
const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req,res)=>{                //GET 메소드를 이용하여 접근시 기능
    res.send('<h1>Hello World</h1>');   // 무엇을 담느냐에 서버의 역할이 결정된다.
});

app.listen(port,()=>{
    console.log(`Server is Starting ... http://localhost:${port}`);
});
```

위 코드로 간단한 웹서버를 구현할 수 있다. 라우터를 추가하고 싶다면 다음과 같이 라우터를 작성한 뒤 `App.js` 파일에 추가해주도록 하자.
```javascript
//route.js
const router = require(`express`).Router();

router.get('/',(req,res) => {
    res.json({
        status:"test",
        Message:"Test is Completed!       
    })
});

/// or

router.route('/')
  .get((req,res)=>{
    res.json({
      status:"test",
      Message:"Test is Completed!       
    })
  });
```
```javascript
//App.js
const Router = require(`./route.js`);
const express = require('express');
.
.
.

app.get('/',(req,res)=>{                //GET 메소드를 이용하여 접근시 기능
    res.send('<h1>Hello World</h1>');   // 무엇을 담느냐에 서버의 역할이 결정된다.
});
app.use('/api',Router);
.
.
.
```


## 2. 웹 클라이언트

클리아이언트는 [React](https://ko.reactjs.org/) 프레임워크 를 사용합니다
```
rrc