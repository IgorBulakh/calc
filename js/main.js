// alert ('hi');
// function go(){
// 	alert('go');
// }

// function get(){
// 	alert (document.getElementById('go').value*document.getElementById('go').value);
// }

// <!-- калькулятор -->
function plus() {
  var num1, num2, result;

  num1 = document.getElementById("d1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("d2").value;
  num2 = parseInt(num2);

  result = num1 + num2;
  document.getElementById("out").innerHTML = result;
}
function minus() {
  var num1, num2, result;

  num1 = document.getElementById("d1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("d2").value;
  num2 = parseInt(num2);

  result = num1 - num2;
  document.getElementById("out").innerHTML = result;
}
function multiply() {
  var num1, num2, result;

  num1 = document.getElementById("d1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("d2").value;
  num2 = parseInt(num2);

  result = num1 * num2;
  document.getElementById("out").innerHTML = result;
}
function share() {
  var num1, num2, result;

  num1 = document.getElementById("d1").value;
  num1 = parseInt(num1);

  num2 = document.getElementById("d2").value;
  num2 = parseInt(num2);

  result = num1 / num2;
  document.getElementById("out").innerHTML = result;
}
// <!-- калькулятор -->
