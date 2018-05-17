# lesson-01-js-calculator
Javascriptで簡単な計算ができる電卓アプリを作ります。

## イメージ

![cursor_ _lesson-01-js-calculator](https://user-images.githubusercontent.com/15668732/38241803-2436b920-376e-11e8-9a32-1bfd2d706470.png)

## 概要

入力された二つの値を計算します。

## jQueryを使う場合

`body`の閉じタグの直前に以下のコードを挿入します。

```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

JavascriptをjQueryで書き直すと以下のようになります。

```js
// Javascript
document.getElementById("id-name") // idを指定して要素を取得
document.getElementsByClassName("class-name") // classを指定して要素を取得
document.getElementById("id-name").value // 取得した要素の値を取得
```

```js
// jQuery
$("#id-name") // idを指定して要素を取得
$(".class-name") // classを指定して要素を取得
$("#id-name").val() // 取得した要素の値を取得
```

厳密には `document.getElement...`と `$("..")`で取得したものは違います。
興味がある方は `DOM要素 jQueryオブジェクト 違い`などと調べてみてください。
