// Array para armazenar as viagens
let viagens = [];

// Elementos do DOM
const destinoInput = document.getElementById('destino');
const distanciaInput = document.getElementById('distancia');
const gravidadeInput = document.getElementById('gravidade');
const adicionarBtn = document.getElementById('adicionar');
const calcularBtn = document.getElementById('calcular');
const limparBtn = document.getElementById('limpar');
const viagensList = document.getElementById('viagens-list');
const resultadoDiv = document.getElementById('resultado');
const calculoDetalhadoDiv = document.getElementById('calculo-detalhado');

// Função para adicionar uma nova viagem
function adicionarViagem() {
  const destino = destinoInput.value.trim();
  const distancia = parseFloat(distanciaInput.value);
  const gravidade = parseFloat(gravidadeInput.value);

  // Validação dos inputs
  if (!destino || isNaN(distancia) || isNaN(gravidade)) {
    alert('Por favor, preencha todos os campos corretamente!');
    return;
  }

  // Criar objeto de viagem
  const viagem = {
    destino,
    distancia,
    gravidade
  };

  // Adicionar ao array
  viagens.push(viagem);

  // Atualizar a lista de viagens na tela
  atualizarListaViagens();

  // Limpar os inputs
  destinoInput.value = '';
  distanciaInput.value = '';
  gravidadeInput.value = '';
  destinoInput.focus();
}

// Função para atualizar a lista de viagens na tela
function atualizarListaViagens() {
  viagensList.innerHTML = '';

  if (viagens.length === 0) {
    viagensList.innerHTML = '<p>Nenhuma viagem adicionada ainda.</p>';
    return;
  }

  viagens.forEach((viagem, index) => {
    const viagemElement = document.createElement('div');
    viagemElement.className = 'viagem-item';
    viagemElement.innerHTML = `
            <strong>${viagem.destino}</strong>: 
            Distância: ${viagem.distancia} anos-luz, 
            Gravidade: ${viagem.gravidade}
        `;
    viagensList.appendChild(viagemElement);
  });
}

// Função para calcular o combustível total
function calcularCombustivel() {
  if (viagens.length === 0) {
    resultadoDiv.textContent = 'Adicione pelo menos uma viagem para calcular.';
    calculoDetalhadoDiv.textContent = '';
    return;
  }

  let totalCombustivel = 0;
  let calculoDetalhado = '';

  viagens.forEach(viagem => {
    const combustivelViagem = viagem.distancia * (viagem.gravidade + 1);
    totalCombustivel += combustivelViagem;

    calculoDetalhado += `
            ${viagem.destino}: ${viagem.distancia} * (${viagem.gravidade} + 1) = ${combustivelViagem.toFixed(1)}<br>
        `;
  });

  resultadoDiv.innerHTML = `Combustível Total Necessário: <strong>${totalCombustivel.toFixed(1)}</strong>`;
  calculoDetalhadoDiv.innerHTML = `
        <p>Detalhes do cálculo:</p>
        ${calculoDetalhado}
        <p>Soma total: ${totalCombustivel.toFixed(1)}</p>
    `;
}

// Função para limpar tudo
function limparTudo() {
  viagens = [];
  atualizarListaViagens();
  resultadoDiv.textContent = '';
  calculoDetalhadoDiv.textContent = '';
}

// Event Listeners
adicionarBtn.addEventListener('click', adicionarViagem);
calcularBtn.addEventListener('click', calcularCombustivel);
limparBtn.addEventListener('click', limparTudo);

// Inicialização
atualizarListaViagens();
