---
title: Scikit learn 과 함께하는 머신 러닝
date: "2020-01-28"
image: ./salty_egg.jpg
description: "Hello World"
---

### 사이킷런이란?

> [사이킷런](https://scikit-learn.org/)이란 파이썬을 이용한 머신러닝 과정에서 가장 널리 알려진 무료 소프트웨어 라이브러리이다.
> Numpy,Scipy와 함께 사용 가능하며 Python, Cython, C, C++ 등으로 제작되었다.


>SVC(Supported Vector Classifier)이란?
>데이터 분류를 위한 SVM 알고리즘은 Classifier 나 regression, outliers detection에 사용되는데 이중 Classifier에 사용되는 경우를 SVC라고한다. 함께 사용하는 Kernel에 따라서 어떠한 방식으로 커널을 분류할지 결정하게 된다.

![SVC](salty_egg.jpg)

```python
>>> from sklearn import svm
>>> X = [[0, 0], [1, 1]]
>>> y = [0, 1]
>>> clf = svm.SVC()
>>> clf.fit(X, y)
SVC()
```
위 코드는 SVC의 예제이다. 해당 코드만을 이용하여 plot으로 데이터를 시각화 해주지는 않는다.

시각화를 위해서는 matplotlib와 같은 다른 라이브러리를 이용하도록 하자.