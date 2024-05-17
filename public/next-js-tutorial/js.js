let onAnswerClicked = (event) => {
  const button = event.target;
  const questionNumber = button.getAttribute("data-question");
  const options = document.querySelectorAll(
    `[data-question-number='${questionNumber}']`
  );

  Array.prototype.forEach.call(options, (element) => {
    element.classList.add("option-mark");
  });
};

let onOptionClick = (event) => {
  const target = event.target;
  const questionNumber = target.getAttribute("data-question-number");

  const options = document.querySelectorAll(
    `[data-question-number='${questionNumber}']`
  );

  Array.prototype.forEach.call(options, (element) => {
    element.classList.remove("option-selected");
  });
  target.classList.add("option-selected");
};

let checkAnswerElem = document.querySelectorAll("[data-js-check-answer]");
let optionElem = document.querySelectorAll("[data-question-number]");

Array.prototype.forEach.call(checkAnswerElem, (element) => {
  element.onclick = onAnswerClicked;
});

Array.prototype.forEach.call(optionElem, (element) => {
  element.onclick = onOptionClick;
});
