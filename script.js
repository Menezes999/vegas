document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.getElementById("profileBtn");
    const sideDrawer = document.getElementById("sideDrawer");
    const closeDrawerBtn = document.getElementById("closeDrawerBtn");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const profileImage = document.getElementById("profileImage");
    const uploadPhoto = document.getElementById("uploadPhoto");

    // Foto de perfil salva no Local Storage
    if (localStorage.getItem("profilePic")) {
        profileImage.src = localStorage.getItem("profilePic");
    }

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

    // Alterar foto de perfil
    uploadPhoto.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
                localStorage.setItem("profilePic", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});
