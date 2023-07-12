function findMinNumber() {
  var number1 = parseFloat(prompt("Введите первое число:"));
  var number2 = parseFloat(prompt("Введите второе число:"));

  if (isNaN(number1) || isNaN(number2)) {
    return "Ошибка ввода. Пожалуйста, введите числа.";
  }

  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
}


var minNumber = findMinNumber();
alert("Наименьшее число: " + minNumber);
