// Função para salvar dados no localStorage
function saveData(steps, water) {
    const data = {
        steps: steps,
        water: water
    };
    localStorage.setItem('healthData', JSON.stringify(data));
}

// Função para carregar dados do localStorage
function loadData() {
    const data = JSON.parse(localStorage.getItem('healthData'));
    if (data) {
        document.getElementById('steps-summary').textContent = data.steps;
        document.getElementById('water-summary').textContent = data.water;
    }
}

// Evento ao enviar o formulário
document.getElementById('health-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recarregar a página

    const steps = document.getElementById('steps').value;
    const water = document.getElementById('water').value;

    // Atualiza o resumo diário
    document.getElementById('steps-summary').textContent = steps;
    document.getElementById('water-summary').textContent = water;

    // Salva os dados
    saveData(steps, water);

    // Limpa o formulário
    document.getElementById('health-form').reset();
});

// Carregar dados ao iniciar a página
window.onload = loadData;
