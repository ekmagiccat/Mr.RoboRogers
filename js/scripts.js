// code that works for test 1:

function mrRogers(text) {
  let num1 = ["1"];
  const special = /\b\d*1\d*\b/g;
  let num1Total = text;
  num1.forEach(function (word) {
    num1Total = num1Total.replaceAll(special, "Beep!");
  });
  return num1Total;
}

/* code that doesn't work
function mrRogers(text) {
  let num1 = ["1"];
  let num2 = ["2"];
  let num3 = ["3"];
  const special = /\b\d*1\d*\b/g;
  let numTotal = [text];
  numTotal.forEach(function (word) {
    if (numTotal.includes(num1)) {
        result = numTotal.replaceAll(special, "Beep!"); 
    } else if (text.includes(num2)) {
        result = numTotal.replaceAll(special, "Boop!");
    } else {

    }
  });
  return numTotal;
}
*/
