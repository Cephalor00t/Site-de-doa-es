// Configurações da meta e valor atual
let goalAmount2 = 3000;  // Meta em doações
let currentAmount = 0;  // Valor inicial da arrecadação

// Função para atualizar a barra de progresso
function updateProgress() {
  // Calcula a percentagem de progresso
  const percentage = Math.min((currentAmount / goalAmount2) * 100, 100);

  // Atualiza a largura da barra de progresso
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = percentage + "%";

  // Atualiza o texto com a percentagem de progresso
  const progressText = document.getElementById("progress-text");
  progressText.textContent = Math.floor(percentage) + "%";

  // Atualiza o valor total arrecadado
  const currentAmountText = document.getElementById("current-amount");
  currentAmountText.textContent = "Total de pensos: " + currentAmount
}

// Adicione aqui o valor das doações que você deseja registrar
function addDonation(value) {
  currentAmount += value;
  updateProgress();
}

// Função para iniciar o áudio
function iniciarAudio() {
  const audio = document.getElementById('background-audio');
  
  // Tenta iniciar o áudio
  audio.play().then(() => {
    console.log("Áudio iniciado após interação do usuário.");
  }).catch(error => {
    console.error("Erro ao iniciar o áudio:", error);
  });

  // Remove os eventos após o áudio iniciar para evitar execuções repetidas
  document.removeEventListener('mousemove', iniciarAudio);
  document.removeEventListener('click', iniciarAudio);
  document.removeEventListener('touchstart', iniciarAudio); // Para dispositivos móveis
}


// Exemplo de doações inseridas manualmente pelo dono do site
addDonation(0); // Adicione a primeira doação de doações
addDonation(0); // Adicione uma segunda doação de doações
addDonation(2358); // Adicione uma segunda doação de doações
