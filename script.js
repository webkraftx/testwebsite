let currentIndex = 0;
const bewertungen = document.querySelectorAll('.bewertung');

function showBewertung(index) {
    bewertungen.forEach((bewertung, i) => {
        bewertung.classList.toggle('active', i === index);
    });
}

function nextBewertung() {
    currentIndex = (currentIndex + 1) % bewertungen.length;
    showBewertung(currentIndex);
}

function prevBewertung() {
    currentIndex = (currentIndex - 1 + bewertungen.length) % bewertungen.length;
    showBewertung(currentIndex);
}