// Task 1
const task1Header = document.querySelector(".task1-header");
const handleTask1Btn = function () {
  task1Header.setAttribute("style", "color: green;");
};

// Task 2
const task2Header = document.querySelector(".task2-header");
const handleTask2Btn = function () {
  task2Header.innerHTML = `Task 2 Completed`;
  task2Header.style = `color: green;`;
};

// Task 3
const colorShow = document.querySelector(".color-show");

const handleYellowBg = function () {
  colorShow.setAttribute("style", "background-color: yellow;");
};

const handleGreenBg = function () {
  colorShow.setAttribute("style", "background-color: green;");
};

const handlePinkBg = function () {
  colorShow.setAttribute("style", "background-color: pink;");
};

const handlePurpleBg = function () {
  colorShow.setAttribute("style", "background-color: purple;");
};

const handleReloadPage = function () {
  location.reload();
};

// Task 4
