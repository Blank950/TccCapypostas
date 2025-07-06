let score = 0;
let clickValue = 1;
let passiveIncome = 0;
let passiveIntervalStarted = false;

const messages = [
  "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
  "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
  "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
    "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
  "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
  "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
    "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
    "Arthur fede",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
  "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet",
  "Não compartilhe fake news!",
  "Use senhas fortes e únicas.",
  "Pense antes de postar.",
  "Respeite a privacidade alheia.",
  "Desconfie de links suspeitos.",
  "Educação digital começa com você!",
  "Não confie em estranhos na internet"

 
];

function updateScore() {
  document.getElementById("score").innerText = "Consciência: " + score;
}

function increaseScore() {
  score += clickValue;
  updateScore();
  showMessage();
  animateBounce();
}

function buyUpgrade() {
  if (score >= 50) {
    score -= 50;
    clickValue += 1;
    updateScore();
    document.getElementById("message").innerText = "Campanha comprada! Agora cada clique vale mais.";
    animateBounce();
  } else {
    document.getElementById("message").innerText = "Você precisa de mais consciência para comprar!";
  }
}

function buySecondUpgrade() {
  if (score >= 150) {
    score -= 150;
    clickValue += 2;
    updateScore();
    document.getElementById("message").innerText = "Treinamento implementado! Clique agora vale ainda mais.";
    animateBounce();
  } else {
    document.getElementById("message").innerText = "Consciência insuficiente para o treinamento.";
  }
}

function showMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").innerText = msg;
}

function animateBounce() {
  const msgEl = document.getElementById("message");
  msgEl.classList.remove("bounce");
  void msgEl.offsetWidth; 
  msgEl.classList.add("bounce");
}

function buyPassiveUpgrade() {
  if (score >= 200) {
    score -= 200;
    passiveIncome += 1;
    updateScore();
    document.getElementById("message").innerText = "Ações governamentais lançadas! Você ganha Consciência automaticamente.";
    animateBounce();

    if (!passiveIntervalStarted) {
      passiveIntervalStarted = true;
      setInterval(() => {
        score += passiveIncome;
        updateScore();
      }, 1000);
    }
  } else {
    document.getElementById("message").innerText = "Consciência insuficiente para ações governamentais.";
  }
}
