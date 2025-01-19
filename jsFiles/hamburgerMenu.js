function initializeMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (!mobileMenuBtn || !nav) {
        console.error('Menu elements not found');
        return;
    }

    // Add click event listener to toggle the menu
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
        
        if (nav.classList.contains('active') && !isClickInsideMenu && !isClickOnMenuBtn) {
            nav.classList.remove('active');
        }
    });

    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 400) {
            nav.classList.remove('active');
        }
    });
}

// Listen for both DOMContentLoaded and headerLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu when header template is loaded
    document.addEventListener('headerLoaded', initializeMenu);
});