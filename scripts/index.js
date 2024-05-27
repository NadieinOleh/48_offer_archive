function clearRadioSelection() {
  document.getElementById('rb5').checked = false;
}
function clearRadioSelection1() {
  document.getElementById('rb6').checked = false;
}

const main = document.querySelector('.main');
const main__mob = document.querySelector('.main__mob');
const quiz1 = document.querySelector('.quiz-1');
const quiz2 = document.querySelector('.quiz-2');
const quiz3 = document.querySelector('.quiz-3');
const quiz4 = document.querySelector('.quiz-4');
const quiz5 = document.querySelector('.quiz-5');
const quizForm = document.querySelector('.quizForm');

const quiz2__button = document.querySelector('.quiz2__button');
const buttonHide = document.getElementById('buttonHide');

const whiteButton = document.querySelector('.additionalBlock__buttons--white');
const additionalBlock = document.querySelector('.additionalBlock');

const quiz4Ratio = document.querySelector('.quiz4Ratio');
const quiz4Input = document.querySelector('.quiz__button-quiz-4');
const quiz4Error = document.querySelector('.quiz4__error');

const quiz1Error = document.querySelector('.quiz1__error');
const quiz1Input = document.querySelector('.quiz1__input');

const quiz3Error = document.querySelector('.quiz3__error');
const quiz3Input1 = document.getElementById('rb1');
const quiz3Input2 = document.getElementById('rb2');
const quiz3Input3 = document.getElementById('rb3');
const quiz3Input4 = document.getElementById('rb4');

const quiz5Error = document.querySelector('.quiz5__error')
const quiz5Input1 = document.getElementById('rb11')
const quiz5Input2 = document.getElementById('rb12')
const quiz5Input3 = document.getElementById('rb13')
const quiz5Input4 = document.getElementById('rb14')
const quiz5Input5 = document.getElementById('rb15')
const quiz5Input6 = document.getElementById('rb16')

const hideBlockButtons = () => {
  additionalBlock.style.display = 'none';
  buttonHide.style.display = 'block';
};

quiz5Input1.addEventListener('input', () => {
  quiz5Error.style.display = 'none';
});
quiz5Input2.addEventListener('input', () => {
  quiz5Error.style.display = 'none';
});
quiz5Input3.addEventListener('input', () => {
  quiz5Error.style.display = 'none';
});
quiz5Input4.addEventListener('input', () => {
  quiz5Error.style.display = 'none';
});
quiz5Input5.addEventListener('input', () => {
  quiz5Error.style.display = 'none';
});
quiz5Input6.addEventListener('input', () => {
  quiz5Error.style.display = 'none';
});

quiz2__button.addEventListener('input', () => {
  quiz4Error.style.display = 'none';
});

quiz4Input.addEventListener('input', () => {
  quiz4Error.style.display = 'none';
});

quiz1Input.addEventListener('input', () => {
  quiz1Error.style.display = 'none';
});

quiz3Input1.addEventListener('input', () => {
  if (quiz3Input1.checked) {
    quiz3Error.style.display = 'none';
  }
});
quiz3Input2.addEventListener('input', () => {
  if (quiz3Input2.checked) {
    quiz3Error.style.display = 'none';
  }
});
quiz3Input3.addEventListener('input', () => {
  if (quiz3Input3.checked) {
    quiz3Error.style.display = 'none';
  }
});
quiz3Input4.addEventListener('input', () => {
  if (quiz3Input4.checked) {
    quiz3Error.style.display = 'none';
  }
});

const showQuiz1 = () => {

  main.style.display = 'none'
  main__mob.style.display = 'none'
  quiz1.style.display = 'block'
};

const showQuiz2 = () => {
  if (!quiz1Input.value) {
    quiz1Error.style.display = 'block'

    return
  }

  quiz1.style.display = 'none'

  quiz2.style.display = 'block'
};

const showQuiz3 = () => {
  console.log(quiz2__button.value, 'value');

  if (quiz2__button.value.trim() === '') {
    buttonHide.style.display = 'none';
    additionalBlock.style.display = 'flex';

    return;
  }  else {
    quiz2.style.display = 'none';
    quiz3.style.display = 'block';
  }
};

const showQuiz3Add = () => {
  quiz2.style.display = 'none';
  quiz3.style.display = 'block';
}

const showQuiz4 = () => {
  if (
    !quiz3Input1.checked &&
    !quiz3Input2.checked &&
    !quiz3Input3.checked &&
    !quiz3Input4.checked
  ) {
    quiz3Error.style.display = 'block';
    return;
  }

  quiz3.style.display = 'none';

  quiz4.style.display = 'block';
};

const showQuiz5 = () => {
  if (quiz4Ratio.checked === false && !quiz4Input.value.trim() ) {
      quiz4Error.style.display = 'block'
      return
  }
  quiz4Error.style.display = 'none'
  quiz4.style.display = 'none'

  quiz5.style.display = 'block'
};


const showQuizForm = () => {
  if (!quiz5Input1.checked && !quiz5Input2.checked && !quiz5Input3.checked && !quiz5Input4.checked && !quiz5Input5.checked && !quiz5Input6.checked) {
    quiz5Error.style.display = 'block'
    return
  }


  quiz5.style.display = 'none'

  quizForm.style.display = 'block'
}