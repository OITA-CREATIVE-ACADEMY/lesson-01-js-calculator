/**
 * 足し算処理
 */
function plus() {
  var num1 = document.getElementById("input-1-plus");
  num1 = parseInt(num1.value);
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };
  var num2 = document.getElementById("input-2-plus");
  num2 = parseInt(num2.value);
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };
  var result = document.getElementById("result-plus")
  result.value = num1 + num2;
  return false
}

/**
 * 引き算処理
 */
function minus() {
  var num1 = document.getElementById("input-1-minus");
  num1 = parseInt(num1.value);
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };
  var num2 = document.getElementById("input-2-minus");
  num2 = parseInt(num2.value);
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };
  var result = document.getElementById("result-minus")
  result.value = num1 - num2;
  return false
}

/**
 * かけ算処理
 */
function multipliedBy() {
  var num1 = document.getElementById("input-1-multipliedBy");
  num1 = parseInt(num1.value);
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };
  var num2 = document.getElementById("input-2-multipliedBy");
  num2 = parseInt(num2.value);
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };
  var result = document.getElementById("result-multipliedBy")
  result.value = num1 * num2;
  return false
}

/**
 * 割り算処理
 */
function dividedBy() {
  var num1 = document.getElementById("input-1-dividedBy");
  num1 = parseInt(num1.value);
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };
  var num2 = document.getElementById("input-2-dividedBy");
  num2 = parseInt(num2.value);
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };
  var result = document.getElementById("result-dividedBy")
  result.value = num1 / num2;
  return false
}