document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.competition-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardWidth = 266;

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
});