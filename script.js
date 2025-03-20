document.addEventListener('DOMContentLoaded', () => {
    // Verifica se o usuário já está cadastrado
    if (!localStorage.getItem('user')) {
        let userName = prompt('Digite seu nome:');
        let userPassword = prompt('Digite sua senha:');
        localStorage.setItem('user', JSON.stringify({ name: userName, password: userPassword, avatar: '' }));
    }

    const user = JSON.parse(localStorage.getItem('user'));
    const profileButton = document.getElementById('profileButton');
    const sideDrawer = document.getElementById('sideDrawer');
    const settingsPopup = document.getElementById('settingsPopup');
    
    // Atualiza a letra inicial no perfil
    profileButton.textContent = user.name.charAt(0).toUpperCase();
    
    profileButton.addEventListener('click', () => {
        sideDrawer.classList.toggle('open');
    });

    // Configurações
    const changeNameButton = document.getElementById('changeNameButton');
    changeNameButton.addEventListener('click', () => {
        const newName = prompt('Digite o novo nome:');
        if (newName) {
            user.name = newName;
            localStorage.setItem('user', JSON.stringify(user));
            profileButton.textContent = newName.charAt(0).toUpperCase();
        }
    });

    // Mostrar pop-up de configurações
    const settingsButton = document.getElementById('settingsButton');
    settingsButton.addEventListener('click', () => {
        settingsPopup.classList.add('active');
    });

    // Fechar pop-up de configurações
    const closeSettingsPopup = document.getElementById('closeSettingsPopup');
    closeSettingsPopup.addEventListener('click', () => {
        settingsPopup.classList.remove('active');
    });

    // Alterar foto de perfil
    const changeProfilePicButton = document.getElementById('changeProfilePicButton');
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
                profileButton.textContent = ''; // Remove a letra quando há foto
            };
            reader.readAsDataURL(file);
        });
        fileInput.click();
    });
});
