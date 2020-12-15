var redInput = document.querySelector(".red>input");
var greenInput = document.querySelector(".green>input");
var blueInput = document.querySelector(".blue>input");

var redLabel = document.querySelector(".red>label");
var greenLabel = document.querySelector(".green>label");
var blueLabel = document.querySelector(".blue>label");

var result = document.querySelector(".result");
var resultButton = document.querySelector(".result>button");

function updateColor() {
  var red = toHex(redInput.value);
  var green = toHex(greenInput.value);
  var blue = toHex(blueInput.value);

  var luminosity =
    0.2126 * redInput.value +
    0.7152 * greenInput.value +
    0.0722 * blueInput.value;

  var color = `#${red}${green}${blue}`.toUpperCase();

  redLabel.innerHTML = "Red (" + redInput.value + ")";
  greenLabel.innerHTML = "Green (" + greenInput.value + ")";
  blueLabel.innerHTML = "Blue (" + blueInput.value + ")";

  resultButton.innerHTML = color;
  resultButton.style.color = luminosity < 100 ? "#ffffff" : "#000000";

  result.style.backgroundColor = color;
}

function toHex(value) {
  return Number(value).toString("16").padStart(2, 0);
}

function toast(message) {
  document.querySelector(".toast-body").innerHTML = message;
  const toast = new bootstrap.Toast(document.querySelector(".toast"));
  toast.show();
}

function copyColor() {
  const copyText = document.createElement("textarea");
  copyText.value = resultButton.innerHTML.trim();
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  toast("Copied!");
}

updateColor();
