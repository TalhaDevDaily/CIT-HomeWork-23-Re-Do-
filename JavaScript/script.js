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
const task4Input = document.querySelector(".task4-input");
let i = 0;
task4Input.value = i;

let quantity = Number(task4Input.value);

const handleDeleteBtn = function () {
  if (i !== 0) {
    i--;
    quantity = i;
    task4Input.value = quantity;
  }
};

const handleAddBtn = function () {
  i++;
  quantity = i;
  task4Input.value = quantity;
};

// Task 5
const task5 = document.querySelector(".task5");
const task5NullMsg = document.querySelector(".task5-null-msg");
const task5Input = document.querySelector(".task5-input");

const handleTask5SubmitBtn = function () {
  if (!task5Input.value) {
    task5NullMsg.innerHTML = `You must not leave input field empty`;
    task5NullMsg.setAttribute("style", "color: red;");
  } else {
    task5NullMsg.innerHTML = ``;
    const task5Header = document.createElement("h2");
    task5.appendChild(task5Header);
    task5Header.innerHTML = `My name is ${task5Input.value}`;
    task5Input.value = "";
  }
};

// Task 6
const task6 = document.querySelector(".task6");
const nullTask6Input = document.querySelector(".null-task6-input");
const task6Input = document.querySelector(".task6-input");

const handleTask6Btn = function () {
  if (!task6Input.value) {
    nullTask6Input.innerHTML = `Input Field can't be empty`;
    nullTask6Input.style = "color: red;";
  } else {
    nullTask6Input.innerHTML = "";
    // Creating Header
    const task6Header = document.createElement("h1");
    task6.appendChild(task6Header);
    task6Header.innerHTML = task6Input.value;

    // Creating Color Box
    const colorBox = document.createElement("div");
    task6.appendChild(colorBox);
    colorBox.classList.add("color-box");

    // Creating the color buttons now
    // Red
    const redColor = document.createElement("div");
    colorBox.appendChild(redColor);
    redColor.classList.add("red-color", "header-color");
    redColor.style.cursor = "pointer";
    // redColor.setAttribute("onclick", "handleRed()");

    // const handleRed = function () {
    //   task6Header.style = "color: red;";
    // };
    redColor.addEventListener("click", function () {
      task6Header.style = "color: red;";
      // cursor: pointer; not working
    });

    // Blue
    const blueColor = document.createElement("div");
    colorBox.appendChild(blueColor);
    blueColor.classList.add("blue-color", "header-color");
    blueColor.style.cursor = "pointer";

    blueColor.addEventListener("click", function () {
      task6Header.setAttribute("style", "color: blue;");
      // cursor: ponter; not working
    });

    // Green
    const greenColor = document.createElement("div");
    colorBox.appendChild(greenColor);
    greenColor.classList.add("green-color", "header-color");
    greenColor.style.cursor = "pointer";

    greenColor.addEventListener("click", function () {
      task6Header.style = "color: green;";
      // cursor: pointer; not working
    });
  }
};
