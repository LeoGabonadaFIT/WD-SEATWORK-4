document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.getElementById('hero-heading');
    const paragraph1 = document.getElementById('paragraph-1');
    heroHeading.addEventListener('mouseover', () => {
        heroHeading.textContent = 'Feature Display';
    });

    heroHeading.addEventListener('mouseout', () => {
        heroHeading.textContent = '機能表示';
    });

    paragraph1.addEventListener('mouseover', () => {
        paragraph1.textContent = 'Seatwork 4';
    });

    paragraph1.addEventListener('mouseout', () => {
        paragraph1.textContent = 'シートワーク 4 ';
    });
});