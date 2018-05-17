/**
 * 足し算処理
 */
function plus() {
  var $element1 = $("#input-1-plus");
  var num1 = parseInt($element1.val());
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };

  var $element2 = $("#input-2-plus");
  var num2 = parseInt($element2.val());
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };

  $("#result-plus").val(num1 + num2);
  return false
}

/**
 * 引き算処理
 */
function minus() {
  var $element1 = $("#input-1-minus");
  var num1 = parseInt($element1.val());
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };

  var $element2 = $("#input-2-minus");
  var num2 = parseInt($element2.val());
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };

  $("#result-minus").val(num1 - num2);
  return false
}

/**
 * かけ算処理
 */
function multipliedBy() {
  var $element1 = $("#input-1-multipliedBy");
  var num1 = parseInt($element1.val());
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };

  var $element2 = $("#input-2-multipliedBy");
  var num2 = parseInt($element2.val());
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };

  $("#result-multipliedBy").val(num1 * num2);
  return false
}

/**
 * 割り算処理
 */
function dividedBy() {
  var $element1 = $("#input-1-dividedBy");
  var num1 = parseInt($element1.val());
  if (!num1) {
    alert("左側の入力が空白もしくは数値以外です");
    return false;
  };

  var $element2 = $("#input-2-dividedBy");
  var num2 = parseInt($element2.val());
  if (!num2) {
    alert("右側の入力が空白もしくは数値以外です");
    return false;
  };

  $("#result-dividedBy").val(num1 / num2);
  return false
}
