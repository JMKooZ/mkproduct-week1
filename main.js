document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.step-card');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    // Theme Toggle Functionality
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('theme', theme);
    });

    // Scroll Reveal Effect
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        
        // Add "Click to mark as done" functionality
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.video-link') && !e.target.closest('#theme-btn')) {
                card.classList.toggle('completed');
                if (card.classList.contains('completed')) {
                    card.style.borderLeft = '8px solid var(--primary-color)';
                } else {
                    card.style.borderLeft = 'none';
                }
            }
        });
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
});
