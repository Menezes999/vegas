const grid = document.querySelector(".grid");

for (let i = 1; i <= 10; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="Música ${i}">
        <p>Música ${i}</p>
        <p>Artista ${i}</p>
    `;
    grid.appendChild(card);
}
