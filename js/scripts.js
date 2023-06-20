//Business Logic

function mrRogers(text) {
  const special = /\b\d*1\d*\b/g;
  const special2 = /\b\d*2\d*\b/g;
  const special3 = /\b\d*3\d*\b/g;
  let outputArray = [];

  for (let i = 0; i <= 0; i++) {
    let output = text.toString();

    if (output.includes("1")) {
      output = output.replaceAll(special, "Beep!");
    } else if (output.includes("2")) {
      output = output.replaceAll(special2, "Boop!");
    } else if (output.includes("3")) {
      output = output.replaceAll(special3, "Won't you be my neighbor?");
    } else if (output.match(/[a-zA-Z]/)) {
      output = undefined;
    }

    outputArray.push(output);
  }

  return outputArray;
}

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

  const rogersMessage = mrRogers(newArray);

  rogersMessage.forEach(function (message) {
    const paragraph = document.createElement("p");
    paragraph.append(message[0].toUpperCase() + message.slice(1));
    document.body.append(paragraph);
  });
  const form = document.getElementById("num-message");
  form.setAttribute("class", "hidden");
  setTimeout(function () {
    window.location.reload();
  }, 4000);
}

window.addEventListener("load", function () {
  document
    .querySelector("form#num-message")
    .addEventListener("submit", handleForm);
  console.log(document.querySelector("form#num-message"));
});
