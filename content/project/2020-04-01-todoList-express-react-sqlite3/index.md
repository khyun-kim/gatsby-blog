---
title: TodoList Web Application
date: "2020-03-23"
image: ./cover.png
description: "React, express, sqlite3를 이용한 할일 목록 웹 페이지입니다."
---

[Github 저장소 링크](https://github.com/khyun-kim/react-express-todolist)

진행 기간 : 2020년 3월 23일 ~ 진행중

# 🚀 ReactJS, Express, Sqlite3를 이용한 Todolist 웹 페이지 

Front-end 쪽으로는 ReactJS를 배우면서 이를 보다 활용하기 위해서는 간단한 RestAPI를 이용하여 서버와 통신할 필요성을 느끼게 되었습니다. 마침 NodeJS에서 Express 라이브러리는 제가 필요한 기능을 모두 담고있기 때문에 Express 를 이용하여 RestAPI Server 만들기로 결정하였습니다. 데이터베이스는 처음에는 MySql, MongoDB 둘중 하나를 고민했는데 간단하게 진행하는 토이프로젝트에서 이렇게 큰 데이터베이스 프로그램을 쓸 필요가 있냐는 의문이 들었고 최종적으로 sqlite3을 사용하기로 결정하였습니다.

## 기능 요구 사항
### 공통
- [ ] 쿠키를 활용하여 새로고침해도 로그인 상태를 유지할 수 있을 것
- [ ] 로그인 상태일 때 정상적이지 않은 페이지에 접근시 다른 페이지로 강제할 것.
- [ ] 비로그인 상태일 때 정상적이지 않은 페이지에 접근시 다른 페이지로 강제할 것.
### 계정
- [x] 회원가입 기능을 갖출 것
- [x] 로그인 기능을 갖출 것
### 할일 목록
- [ ] 할일 목록을 만들 것.
- [ ] 할일 목록 추가 기능을 만들 것.
- [ ] 할일 목록을 추가하면 페이지 새로고침 없이 바로 반영될 것.
- [ ] 목록에 나열된 항목을 삭제할 수 있을 것.
- [ ] 목록에 나열된 항목을 수행했음을 표시할 수 있을 것.

# 진행 과정 중 기억에 남는 것.

1. 동시 실행
처음에 작업할 때는 Web따로 Express Server 따로 터미널을 이용해서 실행해주었다. 그러던중 [Concurrently](https://www.npmjs.com/package/concurrently)라는 라이브러리를 알게 되었고 이를 이용하여 한번에 web과 server를 둘다 실행할 수 있게 되었다.

2. React Proxy 기능
Proxy 기능이 있는 것을 처음에 모르고 Express-session을 이용했을 때, 왜 React 페이지에 쿠키가 생기지 않는지 고민했고 withCredentials 기능을 이용하여 쿠키 생성이 가능은 했지만, Proxy설정을 하니 귀찮은 설정이 모두 해결되었다.

