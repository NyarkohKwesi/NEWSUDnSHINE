document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate package cards on load
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Hover effect for package cards
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Form submission animation
    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.textContent = 'Submitting...';
        submitButton.style.backgroundColor = '#17a2b8';
        setTimeout(() => {
            alert('Booking submitted! We will contact you soon.');
            submitButton.textContent = 'Submit Booking';
            submitButton.style.backgroundColor = '#28a745';
            form.reset();
        }, 1000);
    });

    // Fade in sections when they come into view
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        observer.observe(section);
    });

    // Toggle navigation button active state
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});