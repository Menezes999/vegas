// Função para verificar se o usuário já foi cadastrado
window.onload = function() {
    if (!localStorage.getItem('userName')) {
        window.location.href = "cadastro.html"; // Redireciona para o cadastro
    } else {
        openProfile();
    }
};

// Função para abrir pop-ups de configurações
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
    localStorage.setItem('userName', newName);
    alert("Nome alterado com sucesso!");
    closeAccountSettings();
    openProfile();
}

// Função para o perfil
function openProfile() {
    let userName = localStorage.getItem('userName') || 'M';
    document.querySelector('.profile').textContent = userName.charAt(0);

    // Verifica se a foto de perfil está no localStorage
    if (localStorage.getItem('profilePicture')) {
        document.querySelector('.profile').style.backgroundImage = `url(${localStorage.getItem('profilePicture')})`;
        document.querySelector('.profile').style.backgroundSize = 'cover';
    }
}

// Função para carregar foto de perfil
document.querySelector('.profile').addEventListener('click', function() {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', function(event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let imgUrl = e.target.result;
                localStorage.setItem('profilePicture', imgUrl);
                openProfile(); // Atualiza o perfil
            };
            reader.readAsDataURL(file);
        }
    });
    fileInput.click();
});

// Função para navegação (explorar, biblioteca)
function openStories() {
    alert('Explorando músicas...');
}

function openLibrary() {
    alert('Abrindo Biblioteca...');
    let createPlaylistButton = document.createElement('button');
    createPlaylistButton.textContent = 'Criar Playlist';
    document.body.appendChild(createPlaylistButton);
}

