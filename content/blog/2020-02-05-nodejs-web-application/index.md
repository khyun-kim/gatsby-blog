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

[React](https://ko.reactjs.org/) 프레임워크 를 사용합니다.

React에서 1. 서버 에 접근하기 위해서는 `fetch()` 함수를 사용합니다. method를 지정하지 않은 경우에는 GET이 기본으로 설정되며, method를 지정하여 POST등 다른 HTTP 메소드를 활용할 수 있습니다.
사용해야하는 통신이 반드시 HTTP 일 필요는 없습니다. 다만 다른 프로토콜을 사용하기 위해서는 react에서 사용가능한 라이브러리를 새로 찾아보아야 할 것입니다.
```jsx
import React from 'react'
export default function App() {
    return (
      <div></div>
    );
}
```