function mrRogers(text) {
  let num1 = ["1"];
  let num1Total = text;
  num1.forEach(function (word) {
    num1Total = num1Total.replace(word, "Beep!");
  });
  return num1Total;
}
