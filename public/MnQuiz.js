let current = 0;
let score = 0;

const questions = [
  { text: "Usar senhas diferentes para cada conta online.", answer: "safe" },
  { text: "Compartilhar sua localização em tempo real com desconhecidos.", answer: "risky" },
  { text: "Clicar em links de e-mails suspeitos.", answer: "risky" },
  { text: "Atualizar regularmente seu antivírus.", answer: "safe" },
  { text: "Postar fotos com dados pessoais visíveis.", answer: "risky" },
  { text: "Aceitar cookies em sites suspeitos.", answer: "risky" },
  { text: "Acreditar 100% em pessoas onlines.", answer: "risky" },
  { text: "Aceitar termos de serviço sem ler.", answer: "risky" }
];


function showQuestion() {
  const questionEl = document.getElementById('question');
  const resultEl = document.getElementById('result');

  if (current < questions.length) {
    questionEl.textContent = questions[current].text;
    questionEl.classList.add("bounce");
    resultEl.textContent = '';
    setTimeout(() => questionEl.classList.remove("bounce"), 600);
  } else {
    questionEl.textContent = "Fim do jogo!";
    document.querySelector('.buttons').style.display = 'none';
    resultEl.textContent = `Sua pontuação final: ${score}/${questions.length} 🌟`;
  }
}

function answer(choice) {
  const resultEl = document.getElementById('result');
  const correct = choice === questions[current].answer;

  if (correct) {
    score++;
    resultEl.textContent = "✅ Boa!😀";
    resultEl.style.color = "#4caf50";
  } else {
    resultEl.textContent = "❌ BURRO!😡";
    resultEl.style.color = "#e53935";
  }

  current++;
  document.getElementById('score').textContent = `Pontuação: ${score} ⭐`;
  setTimeout(showQuestion, 1000);
}

showQuestion();