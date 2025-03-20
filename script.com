document.addEventListener("DOMContentLoaded", () => {
    console.log("Vegas Music carregado!");

    // Simulação de funcionalidade: Clique no perfil
    document.querySelector(".profile").addEventListener("click", () => {
        alert("Perfil em construção!");
    });

    // Simulação de carrossel deslizando automaticamente
    const carousel = document.querySelector(".carousel");
    let scrollAmount = 0;
    function scrollCarousel() {
        if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount += 200;
        } else {
            scrollAmount = 0;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
    setInterval(scrollCarousel, 3000);
});
