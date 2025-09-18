/*function toggleCard() {
    const card = document.querySelector(".card");
    card.classList.toggle("open");

    if (card.classList.contains("open")) {
        startConfetti();
    }
}*/

const emojis = ["☺️", "🤗","⭐","🦝","🎊","🎉","🍰","🎂","🧁"]

function createHearts() {
    const container = document.body; // colocamos los corazones en body
    const book = document.querySelector(".book-scene");
    const rect = book.getBoundingClientRect();

    for (let i = 0; i < 120; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
        heart.classList.add("heart");

        let x, y;

        // Elegir zona aleatoria: 0=arriba,1=abajo,2=izquierda,3=derecha
        const zone = Math.floor(Math.random() * 4);
        switch(zone){
            case 0: // arriba
                x = Math.random() * window.innerWidth;
                y = Math.random() * rect.top; 
                break;
            case 1: // abajo
                x = Math.random() * window.innerWidth;
                y = rect.bottom + Math.random() * (window.innerHeight - rect.bottom);
                break;
            case 2: // izquierda
                x = Math.random() * rect.left;
                y = Math.random() * window.innerHeight;
                break;
            case 3: // derecha
                x = rect.right + Math.random() * (window.innerWidth - rect.right);
                y = Math.random() * window.innerHeight;
                break;
        }

        let size = Math.random() * 20 + 10;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.fontSize = `${size}px`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;

        container.appendChild(heart);
    }
}

createHearts();