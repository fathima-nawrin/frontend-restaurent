// Toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu after clicking a link
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// Order button functionality
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const dishName = this.closest('.menu-card').querySelector('h3').textContent;
        alert(`Added ${dishName} to cart!`);
    });
});