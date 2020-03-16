---
title: Node.js에서 SQLite 사용하기
date: "2020-03-16"
image: ./cover.png
description: "이 포스트는 웹프로그래밍에 대해서 생각해본 내용을 적어둔 내용입니다. 필자는 현재 업무 경험이 없고, 순수하게 생각을 적어둔 내용이니 실제 현업에서 활용되는 방식, 이유와 큰 차이가 있을 수 있습니다. 잘못된 내용이 있다면 메일을 보내주세요."
---

## SQLite에 대해서

이름에서 알 수 있는 것 처럼 가벼운 SQL이라는 느낌이다. MySQL은 Database Server가 시스템에서 동작하며 해당 서버와의 통신을 통하여 질의를 수행하지만 SQLite는 메모리 위에서 혹은 로컬 파일의 형태로 데이터베이스를 형성하고 관리하며 사용한다. 개인적인 생각으로는 MySQL 과 같이 크기가 큰 데이터베이스를 사용할 여건이 안되거나 굳이 그럴 필요가 없을 때 선택하는 것이 좋아보인다.

## 사용법

> **주의** 해당 포스트는 리눅스를 기반으로 작성되었습니다.

1. 다음 명령어를 통하여 SQLite를 설치하자

```command
sudo apt-get install sqlite3
```

2. SQLite를 사용할 node.js 프로젝트에 `sqlite3`를 설치하자

```command
yarn add sqlite3
```

3. `./database/db.js` 파일 생성 (파일 위치나 이름은 임의로 사용자가 원하는 것으로 하도록 하자.)

```javascript
const sqlite3 = require(`sqlite3`).verbose();

let db = new sqlite3.Database('database file path',(err) => {
    // 원하는 데이터 베이스 초기화 동작.
})
db.close();
```
Database에 접근하여 충분히 사용했다면 db.close() 잘 닫아주도록 하자.

4. 원하는 질의 수행

질의를 수행하기 위해서 존재하는 함수는 run, get, all, each, exec 가 있다.

> `run(sql,[param,...],[callback])` : 해당 함수는 rows를 반환하지 않는다. callback 함수는 오류 처리를 위해서 쓰인다. 오류가 존재하지 않으면 null을 반환한다.
> ```javascript 
> // 예시
> db.run("UPDATE tbl SET name = ? WHERE id = ?", "bar", 2);
> ```

> `exec(sql,[callback])` : 해당 함수는 rows를 반환하지 않는다. 그저 질의를 수행하며 오류가 발생한 경우 콜백함수를 통하여 오류를 처리할 수 있다.

> `get(sql,[param,...],[callback(err,row)])` : run과의 차이점은 row를 받을 수 있다는 것이다. 만약 반환된 결과가 없다면 rows는 `undefined`로 반환될 것이다. 또한 첫번째로 조회된 내용만 Object 형식으로 반환한다.

> `all(sql,[param,...],[callback(err,rows)])` : get과의 차이점은 첫번째 결과 뿐만 아니라 모든 결과를 받을 수 있으며, Array형식으로 반환된다는 것이다.

> `each(sql,[param,...],[callback(err, row)],[complete])` : 조회는 결과가 있는 경우 callback이 수행된다. [1, 2, 3]의 결과가 나온다면 1에 대한 처리, 2에 대한 처리, 3에 대한 처리를 callback을 통하여 수행한다. 한번에 결과를 보고 싶다면 all을 사용하자.

5. 흐름 제어

SQLite에서는 2가지의 control flow 모드를 제공한다.

> **Serialize**
>
> 해당 모드는 한번에 최대 하나의 질의가 수행될 수 있음을 의미한다. 해당 함수에 callback함수를 선언하면 자동으로 해당 함수가 수행되며, callback 함수에 존재하는 질의 수행 함수들은 모두 Serialize 모드로 수행된다. 해당 함수를 선언하지 않고 바로 질의 함수를 수행하는 경우 parallel 모드로 수행된다.

> **Paralleize**
>
> 해당 모드는 한번에 여러개의 질의가 수행될 수 있음을 의미한다. SQLite에서 사용하는 기본모드로 Serialize 함수 내에서 질의를 수행하지 않는 경우 모드 Parallel 모드로 수행된다. 그럼에도 해당 함수가 존재하는 이유는 Serialize내에서 Parallel 모드로 함수를 질의해야 하는 경우 사용하기 위함이다.

참고한 [사이트](https://github.com/mapbox/node-sqlite3/wiki)