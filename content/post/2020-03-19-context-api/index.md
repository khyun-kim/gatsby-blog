---
title: React에서 ContextAPI
date: "2020-03-19"
image: ./cover.png
description: "이 포스트는 React Context API에 대해서 공부한 내용을 기록한 것 입니다."
---
## 시작하기 앞서 ...

리엑트에서는 서로 다른 컴포넌트 사이에서 상태를 처리하는 것이 굉장히 번거롭다.

예를들어, 상위 컴포넌트의 상태를 하위 컴포넌트에서 조정하기 위해서는 상위 컴포넌트에서 상태를 바꾸는 Action을 정의한 후 해당 함수를 bind로 묶어주고 이를 props로 넣어준 후에야 사용이 가능하다.

더욱 깊은 곳에 존재하는 컴포넌트에 해당 action을 주기 위해서는 각 컴포넌트 사이에 존재하는 모든 계층에 props로 주입 해주어야한다. 소규모 프로젝트에서는 문제없이 진행할 수 있을지도 모르지만, 규모가 커지면 관리가 어려워진다.

이러한 문제를 해결하기 위해서 Redux와 같은 라이브러리가 나왔고, 사람들은 Redux를 잘 활용해왔다. 최근에는(실제로 나온지는 꽤 되었지만 비교적) React에서 Context API를 제작하여 배포하였다.

Context API는 Store 대신 Context라는 개념을 사용한다. Redux에서 Store를 통해 여러 컨테이너들의 상태를 연결하며 사용했다면, Context API는 Context를 통해 여러 컨테이너들이 서로 하나의 상태를 공유하는 것이 가능하다.

## createContext

```javascript
// /src/store.js
import React from "react";
const Store = React.createContext(null);
export default Store;
```
위 코드를 import하면 모두 같은 상태를 공유할 준비가 된다.

## Provider

상태의 원본이 존재할 컨테이너에서 공유를 시작해주어야 데이터를 공유할 수 있다. 공유를 시작하는 방법이 Provider이다.
```javascript
// /src/Components/App.js
import React, { Fragment } from "react";
import Store from "store";
import SubComponent from "Components/SubComponent";
export default class App {
    constructor(props) {
        this.state = {
            message:"Hello Context API"
        }
        this.action = {
            changeMessage:()=>{this.setState(
                currentState => (
                    {
                        ...currentState,
                        message:"Good Bye Context API"
                    }
                )
            )}
        }
    }

    render() {
        const value = { this.store, this.action };
        return (
            <Fragment>
                <Store.Provider value={value}>
                    <SubComponent />
                </Store.Provider>
            </Fragment>
        );
    }
}
```

위 코드는 행위(action)과 상태를 분리해서 작성했지만, 상태에 행위를 정의해서 넣어서 한번에 Store.Provider의 value로 넣어도 된다. 여기서 중요한 부분은 Store.Provider이다. 이 컴포넌트의 자식으로 들어가는 컴포넌트들은 모두 value 값을 사용할 수 있게 된다.

## Consumer

하위 컴포넌트에서 공유된 상태에 접근하기 위해서는 Consumer가 필요하다.

```javascript
// /src/Components/SubComponent.js
import React, { Fragment } from "react";
import Store from "store";

export default function SubComponent() {
    return (
        <Fragment>
            <Store.Consumer>
                {store => {
                    return (
                        <p>{store.state.message}</p>
                        <button onClick={()=>store.action.changeMessage}>Change</button>
                    )
                }}
            </Store.Consumer>
        </Fragment>
    );
}
```
위 코드에서 중요한 부분은 Store.Consumer이다. store와 연결된 상태를 서로 공유하여 사용하기 위해서는 Consumer를 사용해야하는데 해당 컴포넌트는 반드시 하나의 함수를 자식으로 갖는다. 또한 인자로 Provider에서 주입하였던 value를 주입한다.

## 마치며 ...

Redux는 배우기 힘들었는데 Context API는 익히는데 어려움을 느끼지 못했다. 예시 코드는 모두 snippet을 사용하지 않은 손코딩이며, 실제로 작동시킨 적이 없다. 그렇기 때문에 예상하지 못한 에러가 발생할 수 있지만, 중요한건 createContext, Provider, Consumer이므로 크게 벗어나지 않을 것이라고 본다.

실제로 테스트까지 진행한 예제 코드 링크를 첨부해둔다.[깃허브 저장소](https://github.com/khyun-kim/anti-redux)
