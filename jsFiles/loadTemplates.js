async function loadHeaderTemplate() {
    try {
        const response = await fetch('../htmlTemplates/header-template.html');
        const html = await response.text();
       
        const headerContainer = document.getElementById('header-container');
        headerContainer.innerHTML = html;
        
        // Initialize theme after header is loaded
        initializeTheme();
        
        // Dispatch custom event when header is loaded
        const event = new CustomEvent('headerLoaded');
        document.dispatchEvent(event);
    } catch (error) {
        console.error('Error loading header template:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadHeaderTemplate);