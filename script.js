document.addEventListener("DOMContentLoaded", () => {
    console.log("Vegas Music carregado!");

    // Verifica se o usuário já está cadastrado, se não, forçar cadastro
    if (!localStorage.getItem("user")) {
        let userName = prompt("Digite seu nome:");
        let userPassword = prompt("Digite sua senha:");
        localStorage.setItem("user", JSON.stringify({ name: userName, password: userPassword, avatar: "" }));
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const profileButton = document.querySelector(".profile");
    profileButton.textContent = user.avatar ? "" : user.name.charAt(0).toUpperCase();
    profileButton.style.background = user.avatar ? `url(${user.avatar}) center/cover` : "blue";

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
    document.getElementById("home-btn").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    document.getElementById("explore-btn").addEventListener("click", () => {
        alert("Explorar: Em breve stories musicais!");
    });

    document.getElementById("library-btn").addEventListener("click", () => {
        alert("Criar playlist e salvar músicas em breve!");
    });

    document.getElementById("settings-btn").addEventListener("click", () => {
        document.getElementById("settings-popup").style.display = "block";
    });

    document.getElementById("close-popup").addEventListener("click", () => {
        document.getElementById("settings-popup").style.display = "none";
    });

    // Histórico de músicas
    let history = JSON.parse(localStorage.getItem("history")) || [];
    function saveToHistory(song) {
        if (!history.includes(song)) {
            history.push(song);
            localStorage.setItem("history", JSON.stringify(history));
        }
    }

    // Preencher histórico
    const historyContainer = document.getElementById("history");
    history.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.textContent = song;
        historyContainer.appendChild(songDiv);
    });

    // Recomendações
    document.querySelectorAll(".card img").forEach((img, index) => {
        img.addEventListener("click", () => {
            saveToHistory(img.alt);
            alert(`Tocando: ${img.alt}`);
        });
    });
});
