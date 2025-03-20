document.addEventListener("DOMContentLoaded", () => {
    console.log("Vegas Music carregado!");

    // Verifica se o usuário já está cadastrado
    if (!localStorage.getItem("user")) {
        let userName = prompt("Digite seu nome:");
        let userPassword = prompt("Digite sua senha:");
        localStorage.setItem("user", JSON.stringify({ name: userName, password: userPassword, avatar: "" }));
    }

    // Atualiza o perfil do usuário
    const user = JSON.parse(localStorage.getItem("user"));
    const profileButton = document.querySelector(".profile");

    // Exibe a primeira letra do nome do usuário no perfil
    const firstLetter = user.name.charAt(0).toUpperCase();
    profileButton.textContent = firstLetter;
    profileButton.style.background = "#282828";  // Cor de fundo do círculo
    profileButton.style.color = "white";

    // Elementos da gaveta lateral
    const sideDrawer = document.getElementById("sideDrawer");
    const changeNameButton = document.getElementById("changeNameButton");
    const changeProfilePicButton = document.getElementById("changeProfilePicButton");
    const closeDrawerButton = document.getElementById("closeDrawer");

    // Função para abrir a gaveta lateral
    profileButton.addEventListener("click", () => {
        sideDrawer.classList.add("open");
    });

    // Função para fechar a gaveta lateral
    closeDrawerButton.addEventListener("click", () => {
        sideDrawer.classList.remove("open");
    });

    // Função para mudar o nome
    changeNameButton.addEventListener("click", () => {
        const newName = prompt("Digite o novo nome:");
        if (newName) {
            user.name = newName;
            localStorage.setItem("user", JSON.stringify(user));
            profileButton.textContent = newName.charAt(0).toUpperCase();
        }
    });

    // Função para alterar a foto de perfil
    changeProfilePicButton.addEventListener("click", () => {
        let fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.addEventListener("change", (event) => {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onload = () => {
                user.avatar = reader.result;
                localStorage.setItem("user", JSON.stringify(user));
                profileButton.style.background = `url(${user.avatar}) center/cover`;
                profileButton.textContent = ""; // Remove a letra quando há foto
            };
            reader.readAsDataURL(file);
        });
        fileInput.click();
    });
});
