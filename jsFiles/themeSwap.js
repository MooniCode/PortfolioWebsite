function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const profileImage = document.querySelector('.person img');
    
    function updateTheme(isDark) {
        // Update classes
        document.documentElement.classList.toggle('dark-mode', isDark);
        icon.classList.toggle('fa-sun', !isDark);
        icon.classList.toggle('fa-moon', isDark);
        
        // Update profile image source based on theme
        if (profileImage) {
            const imagePath = isDark 
                ? '/images/Content/ProfilePicLight.png'
                : '/images/Content/ProfilePicDark.png';
            profileImage.src = imagePath;
        }
        
        // Save preference
        localStorage.setItem('darkMode', isDark);
    }

    // Event listener for theme toggle button
    themeToggle.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark-mode');
        updateTheme(isDark);
    });

    // Handle initial theme on page load
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    // If user has a saved preference, use that
    // Otherwise, use system preference
    if (savedDarkMode !== null) {
        updateTheme(savedDarkMode === 'true');
    } else {
        updateTheme(prefersDarkMode.matches);
    }

    // Listen for system theme changes if no saved preference
    prefersDarkMode.addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            updateTheme(e.matches);
        }
    });
}