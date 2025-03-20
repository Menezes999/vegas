// Funções para abrir e fechar pop-ups
function openSettings() {
    document.getElementById('overlay').style.display = 'block';
}

function closeSettings() {
    document.getElementById('overlay').style.display = 'none';
}

function openQualitySettings() {
    document.getElementById('qualityOverlay').style.display = 'block';
}

function closeQualitySettings() {
    document.getElementById('qualityOverlay').style.display = 'none';
}

function openAccountSettings() {
    document.getElementById('accountOverlay').style.display = 'block';
}

function closeAccountSettings() {
    document.getElementById('accountOverlay').style.display = 'none';
}

// Função para salvar o novo nome de conta
function saveNewName() {
    let oldName = document.getElementById('oldName').value;
    let newName = document.getElementById('newName').value;
    // Simulação de salvar no localStorage
    localStorage.setItem('userName', newName);
    alert("Nome alterado com sucesso!");
    closeAccountSettings();
}

// Função para o perfil
function openProfile() {
    let userName = localStorage.getItem('userName') || 'M';
    document.querySelector('.profile').textContent = userName.charAt(0);
    // Aqui você pode adicionar mais lógica para alterar a foto de perfil
}

// Funções de Navegação (explorar, biblioteca)
function openStories() {
    alert('Explorando músicas...');
}

function openLibrary() {
    alert('Abrindo Biblioteca...');
}
