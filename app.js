const quizData = [
  {
    question: "Hangisi ateş böceğinin diğer adıdır?",
    a: "Lamba böceği",
    b: "Yıldız böceği",
    c: "Fener böceği",
    d: "Aydınlık böceği",
    e: "Fosfor böceği",
    correct: "b",
  },
  {
    question: '"Gurk" hangi hayvanın erkeğine verilen isimdir?',
    a: "Sincap",
    b: "Tavuk",
    c: "Geyik",
    d: "Deve",
    e: "Hindi",
    correct: "e",
  },
  {
    question:
      ' 1960 larda özellikle Amerika da kullanılmaya başlanan "hippi"nin İngilizcedeki kök anlamı nedir?',
    a: "Renk",
    b: "Dans",
    c: "Özgürlük",
    d: "Moda",
    e: "Barış",
    correct: "d",
  },
  {
    question: '"Hafriyat" ne anlama gelir?',
    a: "Döküntü",
    b: "Çimento",
    c: "Kazı",
    d: "Çöp",
    e: "Yıkım",
    correct: "c",
  },
  {
    question:
      'Türkçeye Arapçadan geçen "muhteşem" kelimesinin kökeninin anlamı hangisidir?',
    a: "Askerler",
    b: "Elitler",
    c: "Köylüler",
    d: "Efendiler",
    e: "Hizmetçiler",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl = answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
  
      `;
    }
  }
});
