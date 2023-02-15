function getPin() {
  let pin = generatePin();
  let pinStr = pin.toString();
  if (pinStr.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  let random = Math.round(Math.random() * 10000);
  return random;
}
document.getElementById("generate-pin").addEventListener("click", function () {
  let pin = getPin();
  let displayPin = document.getElementById("displayPin");
  displayPin.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (e) {
  let number = e.target.innerText;
  let typeNumbers = document.getElementById("typeNumbers");
  let prevNumber = typeNumbers.value;
  if (isNaN(number)) {
    if (number === "C") {
      typeNumbers.value = "";
    } else if (number === "<") {
      let digits = prevNumber.split("");
      digits.pop();
      let remainingDigits = digits.join("");
      typeNumbers.value = remainingDigits;
    }
  } else {
    let newNumber = prevNumber + number;
    typeNumbers.value = newNumber;
  }
});

document.getElementById("verifyPin").addEventListener("click", function () {
  let displayPinValue = document.getElementById("displayPin").value;
  let typeNumbersValue = document.getElementById("typeNumbers").value;

  let pinCorrectMessage = document.getElementById("pinCorrectText");
  let pinWrongMessage = document.getElementById("pinWrongText");

  if (displayPinValue === typeNumbersValue) {
    pinCorrectMessage.style.display = "block";
    pinWrongMessage.style.display = "none";
  } else {
    pinWrongMessage.style.display = "block";
    pinCorrectMessage.style.display = "none";
  }
});
