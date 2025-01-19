function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    function updateTheme(isDark) {
        // Update classes
        document.documentElement.classList.toggle('dark-mode', isDark);
        icon.classList.toggle('fa-moon', !isDark);
        icon.classList.toggle('fa-sun', isDark);
        
        // Save preference
        localStorage.setItem('darkMode', isDark);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark-mode');
        updateTheme(isDark);
    });

    // On initialization, check for saved preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    updateTheme(savedDarkMode);
}