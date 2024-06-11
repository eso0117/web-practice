let onAnswerClicked = (event) => {
    const button = event.currentTarget;
    const questionNumber = button.getAttribute("data-question");
    const options = document.querySelectorAll(
      `[data-question-number='${questionNumber}']`
    );
  
    Array.prototype.forEach.call(options, (element) => {
      element.classList.add("option-mark");
    });
  };
  
  let onOptionClick = (event) => {
    const target = event.currentTarget;
    const questionNumber = target.getAttribute("data-question-number");
  
    const options = document.querySelectorAll(
      `[data-question-number='${questionNumber}']`
    );
  
    Array.prototype.forEach.call(options, (element) => {
      element.classList.remove("option-selected");
    });
    target.classList.add("option-selected");
  };
  
  let onShowAndHideClicked = (event) => {
    const button = event.currentTarget;
    const buttonContent = $("[data-btn-content]", $(button));
  
    const dataTarget = button.getAttribute("data-target");
    const targetElems = document.querySelectorAll(
      `[data-hide-target='${dataTarget}']`
    );

    const hideText = buttonContent.getAttribute("data-hide-text");
    const showText = buttonContent.getAttribute("data-show-text")
    const isHidden = buttonContent.html() === hideText;
    
  
    if (isHidden) {
      buttonContent.html(showText);
    } else {
      buttonContent.html(hideText);
    }
  
    Array.prototype.forEach.call(targetElems, (element) => {
      if (isHidden) {
        element.classList.remove("is-inactive");
      } else {
        element.classList.add("is-inactive");
      }
    });
  };
  
  let checkAnswerElem = document.querySelectorAll("[data-js-check-answer]");
  let optionElem = document.querySelectorAll("[data-question-number]");
  let showAndHideBtn = document.getElementsByClassName("show-and-hide-btn");
  
  Array.prototype.forEach.call(checkAnswerElem, (element) => {
    element.onclick = onAnswerClicked;
  });
  
  Array.prototype.forEach.call(optionElem, (element) => {
    element.onclick = onOptionClick;
  });
  
  Array.prototype.forEach.call(showAndHideBtn, (element) => {
    element.onclick = onShowAndHideClicked;
  });
  
  