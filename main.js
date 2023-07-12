function power(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  

  var base = parseFloat(prompt("Введите число:"));
  var exponent = parseInt(prompt("Введите степень:"));
  
  if (isNaN(base) || isNaN(exponent)) {
    alert("Ошибка ввода. Пожалуйста, введите числа.");
  } else {
    var result = power(base, exponent);
    alert("Результат: " + result);
  }