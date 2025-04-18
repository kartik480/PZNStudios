// Fade-in on scroll effect (optional)
window.addEventListener('scroll', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});
