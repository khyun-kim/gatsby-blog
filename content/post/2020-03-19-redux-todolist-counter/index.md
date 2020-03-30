---
title: React와 Redux
date: "2020-03-19"
image: ./cover.png
description: "이 포스트는 Redux에 대해서 공부한 내용을 기록한 것 입니다."
---
## 시작하기 앞서 ...

React에서는 서로 다른 컴포넌트 사이에서 상태를 처리하는 것이 굉장히 번거롭다.

예를들어, 상위 컴포넌트의 상태를 하위 컴포넌트에서 조정하기 위해서는 상위 컴포넌트에서 상태를 바꾸는 Action을 정의한 후 해당 함수를 bind로 묶어주고 이를 props로 넣어준 후에야 사용이 가능하다.

더욱 깊은 곳에 존재하는 컴포넌트에 해당 action을 주기 위해서는 각 컴포넌트 사이에 존재하는 모든 계층에 props로 주입 해주어야한다. 소규모 프로젝트에서는 문제없이 진행할 수 있을지도 모르지만, 규모가 커지면 관리가 어려워진다.

이러한 문제를 해결하기 위하여 다양한 Flux 패턴의 라이브러리들이 나타났고 널리 사용되는 라이브러리가 Redux이다. Redux는 React에 의존적이지 않다. 다른 상태를 관리해야하는 프레임워크가 있다면(Vue.js같은) 그곳에서도 사용가능하다. React에서 Redux를 사용하기 위해 설치하는 라이브러리 중 Redux에 의존적인 것은 react-redux 이다. 이 라이브러리는 react 프레임워크에서 Redux를 보다 편하게 사용하기 위해 제작된 라이브러리이다.

## Action

Redux에서는 상태를 Store에 보관한다. 사용자는 스토어에 직접 접근할 수 없고, Action을 이용하여 접근가능하다.(정확히는 Action이 Dispatcher를 실행시키고 Dispatcher는 Store에 접근하여 상태를 변화시킨다. 이후 변화된 상태가 Props의 형태로 View에 반영된다.)

Action의 생김새는 다음과 같다.
```
{
    type,
    data
}
```
`type`은 필수 요소이지만 data는 필수 요소가 아니다. 변경되는 상태에 특정한 값을 사용하여 처리하기 위해서 사용되는게 data이므로 특정 값을 사용하지 않는 경우 data는 포함시키지 않는다.

Action은 dispatcher와 연동되어 사용되는 reducer에서 type으로 구분되기 때문에 type의 중복이 존재하면 올바른 동작이 이루어지기 힘들다. 그래서 Action.type을 다음과 같은 방식으로 정의하고 Action 함수를 제작한다.

```javascript
// src/store/modules/counter.js
// counter에서 사용되는 예시
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const SETUP = "counter/SET";

export const increase = () => {
    return {
        type: INCREASE,
    }
};
export const decrease = () => {
    return {
        type: DECREASE,
    }
};
export const setUp = (value) => {
    return {
        type: SETUP,
        data: value
    }
};

```
Action을 정의하였으니 초기 상태를 정의해야한다.
```javascript
// src/store/modules/counter.js
const initialState = {
    number: 0
}
```

## Reducer

Action을 만들었으니 이제 reducer를 만들어야 한다. Action의 type으로 구분된다는 것을 기억하고 다음과 같은 형태로 만들자.
```javascript
// src/store/modules/counter.js
export default function counter(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                number:state.number + 1
            };
        case DECREASE:
            return {
                number:state.number - 1
            };
        case SETUP:
            return {
                number:action.data
            };
        default :
            return state;
    }
}
```
이것으로 Redux를 위한 동작들은 모두 완성되었다. 이제 Store를 만들어보자.

## Store, Provider
```javascript
// src/store/index.js
import { combineReducers } from 'redux';
import counter from './modules/counter';

export default combineReducers({
    counter,
    // 추가할 다른 상태 세트가 있다면 여기에 추가해주세요.
});
```
index.js 파일을 만들어준다. 이 파일을 Store를 보관할 곳에 넣어주면 된다.

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store';

const store = createStore(rootReducer);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);
```

컨테이너와 데이터주입을 넣자...