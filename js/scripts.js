function mrRogers(text) {
  let num1 = ["1"];
  let num2 = ["2"];
  const special = /\b\d*1\d*\b/g;
  let numTotal = text;
  num1.forEach(function (word) {
    numTotal = numTotal.replaceAll(special, "Beep!");
  });
    num2.forEach(function (word2) {
      numTotal = numTotal.replaceAll(special, "Boop!");
    });
  });
  return numTotal;
}

/*
function mrRogers(text) {
  let num = ["1"];
  const special = /\b\d*1\d*\b/g;
  let num1Total = text;
  num1.forEach(function (word) {
    num1Total = num1Total.replaceAll(special, "Beep!");
  });
  return num1Total;
}
