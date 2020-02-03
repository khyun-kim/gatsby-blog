---
title: PYTHON을 이용한 웹 어플리케이션
date: "2020-02-03"
image: ./cover.png
description: "Python을 이용한 웹 어플리케이션을 시도해보며 작성한 포스트입니다."
---

Python은 웹에서 주로 Back-end를 구성하는데 사용된다. 자주 사용되는 프레임워크로는 Django가 있으나 크기가 크고 구조가 복잡하기 때문에 초보자가 접근하지 용이하지 않다. 그래서 본 포스트에서는 Flask를 이용하며 웹 서버를 구성할 것이다.

## PYTHON 설정
우선 개발 환경을 구성하기 위해서 가상환경을 생성해야한다. 명령어는 다음과 같다.
```
> python -m venv 가상환경이름
```
> ***가상환경을 왜 사용하는 걸까?***
>
> `virtualenv`는 `gradle`이나 `maven`처럼 프로젝트의 라이브러리 버전 관리를 위해 사용한다.
>
> venv와 npm의 차이점은 global이라고 생각하면 될것같다. 
>
> 비슷하게 버전관리를 진행하지만 venv는 js로 치면 --save 로 설치된 라이브러리만 사용가능하다.

위 명령어를 실행하면 `Include`, `Lib`, `Script`라는 3개의 디렉터리와 `pyenv.cfg`라는 파일이 생성된다.
실제 가상환경 세팅을 위한 명령어는 Script폴더안에 구현된다.

```
> cd ./Script
> activate .bat
(가상환경) > pip install flask
```
위 명령어로 가상환경에 진입한 후에 flask를 설치한 후에, app.py를 최상위 폴더에 생성하자. 해당 파일을 이용하여 Flask를 활용할 하여 서버를 만들 것이다.

## Flask
> **flask에 대해서**
>
> flask는 웹 프로그래밍에서 주로 Back-end 분야로 사용되는 프레임워크이다.
>
> 기본적으로 jinja2 템플릿을 지원하기 때문에 flask에서 사용되는 html 파일에 jinja2 방식의 코드를 삽입하여 사용가능하다.

flask는 `.py`파일 안에 `html`코드를 삽입하는 것이 가능하다.

```python
from flask import Flask

app = Flask(__name__)

#route를 지정하고 특정 함수를 실행하게 해준다.
@app.route('/')
def hello():
    return '<h1>안녕하세요</h1>'

# 직접 app.py를 실행한 경우__name__ 은 값으로 '__main__' 을 가진다.
# 즉 import를 이용하여 실행한 경우 실행되지 않게 조건을 설정해 준 것이다.
if __name__ == "__main__":
    app.run(debug=True) # debug의 default 값은 false
```

html코드를 직접 python 파일에 입력하지 않고 외부에서 불러오고 싶은 경우에는 다음과 같은 방식으로 한다.
```python
from flask import Flask, render_template

@app.route('/user/<name>')
def user(name):
    return render_template('user.html',data=name)
```
## Jinja2
> **jinja2 에 대해서**
>
> html을 동적으로 가공하기 위해서 사용하는 template이다.