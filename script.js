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
    profileButton.textContent = user.avatar ? "" : user.name.charAt(0).toUpperCase();
    profileButton.style.background = user.avatar ? `url(${user.avatar}) center/cover` : "blue";
    profileButton.style.color = "white";
    profileButton.style.borderRadius = "50%";
    profileButton.style.width = "40px";
    profileButton.style.height = "40px";
    
    // Upload de foto de perfil
    profileButton.addEventListener("click", () => {
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
                profileButton.textContent = "";
            };
            reader.readAsDataURL(file);
        });
        fileInput.click();
    });

    // Navegação
    document.querySelector("button:nth-child(1)").addEventListener("click", () => {
        window.location.href = "index.html";
    });
    document.querySelector("button:nth-child(2)").addEventListener("click", () => {
        alert("Explorar: Em breve histórias musicais!");
    });
    document.querySelector("button:nth-child(3)").addEventListener("click", () => {
        alert("Criar playlist e salvar músicas em breve!");
    });
    document.querySelector("button:nth-child(4)").addEventListener("click", () => {
        alert("Configurações de conta e qualidade de música em breve!");
    });

    // Histórico de músicas
    let history = JSON.parse(localStorage.getItem("history")) || [];
    function saveToHistory(song) {
        if (!history.includes(song)) {
            history.push(song);
            localStorage.setItem("history", JSON.stringify(history));
        }
    }

    // Simulação de recomendação de músicas
    document.querySelectorAll(".card img").forEach((img, index) => {
        img.addEventListener("click", () => {
            saveToHistory(img.alt);
            alert(`Tocando: ${img.alt}`);
        });
    });

    // Exibir músicas ouvidas recentemente
    const historyGrid = document.querySelector(".history-grid");
    history.forEach(song => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.textContent = song;
        historyGrid.appendChild(div);
    });
});
