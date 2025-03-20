document.addEventListener('DOMContentLoaded', () => {
    const profileButton = document.getElementById('profileButton');
    const sideDrawer = document.getElementById('sideDrawer');
    const settingsPopup = document.getElementById('settingsPopup');
    const closeSettingsPopup = document.getElementById('closeSettingsPopup');
    const changeProfilePicButton = document.getElementById('changeProfilePicButton');
    const changeNameButton = document.getElementById('changeNameButton');
    const settingsButton = document.getElementById('settingsButton');

    let user = JSON.parse(localStorage.getItem('user')) || { name: 'Usuário', avatar: '' };

    // Atualizar foto de perfil ou inicial
    if (user.avatar) {
        profileButton.style.background = `url(${user.avatar}) center/cover`;
        profileButton.textContent = '';
    } else {
        profileButton.textContent = user.name.charAt(0).toUpperCase();
    }

    // Abrir gaveta lateral
    profileButton.addEventListener('click', () => {
        sideDrawer.classList.toggle('open');
    });

    // Alterar foto de perfil
    changeProfilePicButton.addEventListener('click', () => {
        let fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', (event) => {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onload = () => {
                user.avatar = reader.result;
                localStorage.setItem('user', JSON.stringify(user));
                profileButton.style.background = `url(${user.avatar}) center/cover`;
                profileButton.textContent = ''; 
            };
            reader.readAsDataURL(file);
        });
        fileInput.click();
    });

    // Fechar gaveta lateral
    const closeDrawer = document.getElementById('closeDrawer');
    closeDrawer.addEventListener('click', () => {
        sideDrawer.classList.remove('open');
    });

    // Abrir popup de configurações
    settingsButton.addEventListener('click', () => {
        settingsPopup.classList.add('active');
    });

    // Fechar popup de configurações
    closeSettingsPopup.addEventListener('click', () => {
        settingsPopup.classList.remove('active');
    });

    // Função de navegação dos botões laterais
    document.getElementById('homeButton').addEventListener('click', () => {
        alert('Início');
    });

    document.getElementById('exploreButton').addEventListener('click', () => {
        alert('Explorar');
    });

    document.getElementById('libraryButton').addEventListener('click', () => {
        alert('Biblioteca');
    });

    document.getElementById('historyButton').addEventListener('click', () => {
        alert('Histórico');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.getElementById("profileBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const playPauseBtn = document.getElementById("playPauseBtn");

    profileBtn.addEventListener("click", () => {
        sideDrawer.classList.add("open");
    });

    closeDrawerBtn.addEventListener("click", () => {
        sideDrawer.classList.remove("open");
    });

    document.addEventListener("click", (event) => {
        if (!sideDrawer.contains(event.target) && !profileBtn.contains(event.target)) {
            sideDrawer.classList.remove("open");
        }
    });

    playPauseBtn.addEventListener("click", () => {
        playPauseBtn.innerHTML = playPauseBtn.innerHTML.includes("play") ? "<i class='fas fa-pause'></i>" : "<i class='fas fa-play'></i>";
    });
});
