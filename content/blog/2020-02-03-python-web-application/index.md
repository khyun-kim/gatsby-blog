---
title: PYTHON을 이용한 웹 어플리케이션
date: "2020-02-03"
image: ./cover.png
description: "Python을 이용한 웹 어플리케이션을 시도해보며 작성한 포스트입니다."
---

Back-end분야에서 사용되는 Python 프레임워크 로는 Django가 있다. 하지만 장고는 크기가 크고 구조가 복잡하기 때문에 처음 Back-end를 접하는 초보자에게 맞지 않다고 한다.

그래서 본 포스트에서는 Flask를 이용하며 웹 서버를 구성하며 연습을 할 것이다.

> ***REST***
>
> HTTP URI를 통해 자원을 명시하고 (동작을 명시하지 않음) HTTP Method를 통해 해당 자원에 대한 **CRUD Operation**을 적용하는 것을 의미한다.
## CRUD Operation
| CRUD | HTTP Method | 의미 |
|:---|:---|:---:|
| `Create` | POST | 생성 |
| `Read` | GET | 조회 |
| `Update` | PUT | 갱신 |
| `Delete` | DELETE | 삭제 |
| `HEAD` | HEAD | header정보 조회 |


<br><br><br>

## PYTHON 설정
---

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
>
> *가상환경이기 때문에 내부에서 설정을 아무리 바꿔도 외부에는 영향을 미치지 않는다.*

위 명령어를 실행하면 `Include`, `Lib`, `Script`라는 3개의 디렉터리와 `pyenv.cfg`라는 파일이 생성된다.
실제 가상환경 세팅을 위한 명령어는 Script폴더안에 구현된다.

```
> cd ./Script
> activate .bat
(가상환경) > pip install flask
```
위 명령어로 가상환경에 진입한 후에 flask를 설치한 후에, app.py를 최상위 폴더에 생성하자. 해당 파일을 이용하여 Flask를 활용할 하여 서버를 만들 것이다.

<br><br><br>

## Flask
---

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

POST 메소드를 활용하고자 한다면 다음과 같이 진행한다.
```python
@app.route('/add_article',method=['POST'])
def add_article():
    #<input type="text" name="test">인 경우
    value = request.form['test'] 
    return value
    
```
<br><br><br>

## MySQL
---

실제로 프로그램을 작성하는데 있어서 데이터베이스는 빈번하게 사용되며 해당 프로그램이 서버라면 말할 필요도 없다. 그렇다면 Flask에서 데이터베이스는 어떻게 사용할까?

Flask에서 MySQL을 사용하기 위해서는 전용 라이브러리를 필요로한다. `flask_mysqldb`를 설치한 후에 다음 코드와 같이 `import`해주자.

```python
from flask_mysqldb import MySQL
```

이제 필요한 값들을 설정해주어야 한다.

```python
app.config['MYSQL_HOST'] = '127.0.0.1'          #ip주소
app.config['MYSQL_USER'] = 'root'               #사용할 database 사용자 id
app.config['MYSQL_PASSWORD'] = '1234'          #password
app.config['MYSQL_DB'] = 'myflaskapp'           #database name
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'  #cursor class
```

<br><br><br>

## Jinja2
---

> **jinja2 에 대해서**
>
> html을 동적으로 가공하기 위해서 사용하는 template이다.

### HTML코드 병합

1. 다른 HTML 파일의 내용에 현재의 코드를 끼워넣고 싶다면 다음과 같이 진행한다.

```html
<!-- home.html -->
{%- extends 'layout.html' %}
{%- block body -%}
    <div>
        <h1 class="jumbotron text-center">Flask Tutorials</h1>
        <p class="lead text-center">This Application is build using python and flask famework</p>
    </div>
{%- endblock -%}
```
여기서 중요한 것은 `extends` 부분과 `block body` 부분이다. 

`layout.html` 파일에 존재하는 `{%- block body -%} ... {%- endblock %}` 대신에 위 코드가 삽입되어 HTML 파일이 만들어진다. 

<br>

2. 반대로 다른 HTML 파일의 내용을 현재의 코드에 끼워넣고 싶다면 다음과 같이 진행한다.

```html
<!-- layout.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>

<body>
    <header>
        {% include 'includes/_navbar.html' %}
    </header>
    <div class="container">
        <pre>
            {%- block body -%}
            {%- endblock -%}
        </pre>
            
    </div>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>

</html>
```
이 코드에서 중요한 부분은 `{% include ... %}` 이다.

해당 코드가 위하는 곳에 `_navbar.html` 삽입된다.