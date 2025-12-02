// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

if (mobileMenuToggle && navList) {
    mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navList.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Search functionality
const searchInputs = document.querySelectorAll('.search-input, .search-field');
searchInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(input.value);
        }
    });
});

function performSearch(query) {
    if (query.trim()) {
        alert(`Searching for: ${query}`);
        // In a real application, you would redirect to search results page
        // or fetch search results via AJAX
    }
}

// Add loading animation to property cards
const propertyCards = document.querySelectorAll('.property-card');
propertyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Form submission handling
const searchForms = document.querySelectorAll('.search-container');
searchForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchField = form.querySelector('.search-field');
        if (searchField && searchField.value.trim()) {
            performSearch(searchField.value);
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Location cards hover animation enhancement
const locationCards = document.querySelectorAll('.location-card');
locationCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });

    // Add click event to redirect to properties page
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('location-link')) {
            const city = card.querySelector('.location-title').textContent;
            window.location.href = `properties.html?city=${encodeURIComponent(city)}`;
        }
    });
});