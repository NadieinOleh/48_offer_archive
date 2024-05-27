document.addEventListener("DOMContentLoaded", () => {
  const cleanAllRubish = (string) => {
      return string.replace(/\s+/g, " ").trim();
  };

  const chatMessageElements = document.querySelectorAll(".q-uestion");
  const questionsArray = [];

  chatMessageElements.forEach((element) => {
      const text = cleanAllRubish(element.innerText);
      questionsArray.push({ question: text, answers: [] });
  });

  for (let i = 0; i < 50; i++) {
      if (localStorage.getItem(i)) {
          localStorage.removeItem(i);
      }
  }

  let currentQuestionIndex = 0;

  const handleAnswer = (answers) => {
      if (currentQuestionIndex < questionsArray.length) {
          questionsArray[currentQuestionIndex].answers = answers;
          SaveAnswersToLocalStorage();
          currentQuestionIndex++;
      }
  };

  document.querySelectorAll(".q-later-button").forEach((element) => {
      element.addEventListener("click", (event) => {
          const parentElement = event.target.closest('.q-common-parent');
          const inputAnswerElement = parentElement.querySelector("input[type='text']");
          const activeCheckboxElements = parentElement.querySelectorAll("input[type='checkbox']:checked");
          const activeRadioElements = parentElement.querySelectorAll("input[type='radio']:checked");
          const activeAnswerElements = parentElement.querySelectorAll(".q-answer.active");

          let answers = [];

          if (inputAnswerElement && inputAnswerElement.value) {
              answers.push(cleanAllRubish(inputAnswerElement.value));
          } 

          activeAnswerElements.forEach((el) => {
              answers.push(cleanAllRubish(el.innerText));
          });

          activeCheckboxElements.forEach((el) => {
              const label = parentElement.querySelector(`label[for='${el.id}']`);
              if (label) {
                  answers.push(cleanAllRubish(label.innerText));
              }
          });

          activeRadioElements.forEach((el) => {
              const label = parentElement.querySelector(`label[for='${el.id}']`);
              if (label) {
                  answers.push(cleanAllRubish(label.innerText));
              }
          });

          if (answers.length > 0) {
              handleAnswer(answers);
          }
      });
  });

  document.querySelectorAll(".additionalBlock__buttons--black").forEach((element) => {
      element.addEventListener("click", () => {
          handleAnswer([]);
      });
  });

  const SaveAnswersToLocalStorage = () => {
      for (let i = 0; i < questionsArray.length; i++) {
          localStorage.setItem(i, JSON.stringify(questionsArray[i]));
      }
  };
});
