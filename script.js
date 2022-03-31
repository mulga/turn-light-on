const onButton = document.getElementById("switch_on");
const offButton = document.getElementById("switch_off");
const darkBulb = document.getElementById("dark_bulb");
const brightBulb = document.getElementById("bright_bulb");
const title = document.getElementById("text");
const resetButton = document.getElementById("reset");

function switch_on() {
  brightBulb.style.opacity = 0;
  darkBulb.style.opacity = 1;
  document.body.style.backgroundColor = "black";
  title.style.color = "white";
  onButton.disabled = true;
  offButton.disabled = false;
  onButton.style.backgroundColor = "gray";
  offButton.style.backgroundColor = "red";
}

function switch_off() {
  darkBulb.style.opacity = 0;
  brightBulb.style.opacity = 1;
  document.body.style.backgroundColor = "white";
  title.style.color = "black";
  onButton.disabled = false;
  offButton.disabled = true;
  offButton.style.backgroundColor = "gray";
  onButton.style.backgroundColor = "green";
}

function resetPage() {
  window.location.reload();
}

switch_off();

document.getElementById("switch_on").click = function () {
  switch_on();
};

document.getElementById("switch_off").addEventListener("click", switch_off);
