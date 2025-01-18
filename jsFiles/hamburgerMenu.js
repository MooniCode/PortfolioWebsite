// Wait for both DOM and template to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure template is loaded
    setTimeout(() => {
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
            // Check if the click was outside the menu and menu button
            const isClickInsideMenu = nav.contains(event.target);
            const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
            
            // If menu is open and click is outside menu and button, close it
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
    }, 100); // Small delay to ensure template is loaded
});