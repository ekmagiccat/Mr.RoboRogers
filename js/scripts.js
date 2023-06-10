// UI Logic

function handleForm(event) {
  event.preventDefault();
  const userInput = document.querySelectorAll("input[name=number]");
  const userInputArray = Array.from(userInput);

  const resultHeading = document.createElement("h3");
  resultHeading.append("Your message:");
  document.body.append(resultHeading);

  let newArray = [];
  userInputArray.forEach(function (element) {
    newArray.push(element.value);
  });
  newArray.sort();
  console.log(newArray);
  newArray.forEach(function (message) {
    const paragraph = document.createElement("p");
    paragraph.append(message[0].toUpperCase() + message.slice(1));
    document.body.append(paragraph);
  });
  const form = document.getElementById("num-message");
  form.setAttribute("class", "hidden");
}

window.addEventListener("load", function () {
  document
    .querySelector("form#num-message")
    .addEventListener("submit", handleForm);
  console.log(document.querySelector("form#num-message"));
});

//Business Logic

//testing new code

function mrRogers(userInput) {
  const special = /\b\d*1\d*\b/g;
  userInput = [];
  userInputArray.forEach(function (word) {
    result = userInput.replaceAll(special, "Beep!");
  });
  return result;
}

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

// code the works for test 2:
function mrRogers(text) {
  let num2 = ["2"];
  const special2 = /\b\d*2\d*\b/g;
  let num1Total = text;
  num2.forEach(function (word) {
    num1Total = num1Total.replaceAll(special2, "Boop!");
  });
  return num1Total;
}

//code for test 3:
function mrRogers(text) {
  let num3 = ["3"];
  const special3 = /\b\d*3\d*\b/g;
  let num1Total = text;
  num3.forEach(function (word) {
    num1Total = num1Total.replaceAll(special3, "Won't you be my neighbor?");
  });
  return num1Total;
}

/*/not working

function mrRogers2(text) {
  let num2 = ["2"];
  const special = /\b\d*1\d*\b/g;
  let num1Total = text;
  num2.forEach(function (word) {
    num1Total = num1Total.replaceAll(special, "Boop!");
  });
  return num1Total;
}

/* code that doesn't work

function mrRogers(text) {
  let num1 = ["1"];
  let num2 = ["2"];
  let num3 = ["3"];
  const special = /\b\d*1\d*\b/g;
  let numTotal = text;
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

/* UI Logic example

function handleClick() {
  console.log("The button has been clicked!");
}

window.addEventListener("load", function () {
  const btn = querySelector("button");
  btn.addEventListener("click", handleClick);
});
*/
