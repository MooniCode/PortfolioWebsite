async function loadTemplates() {
    try {
        // Load header
        const headerResponse = await fetch('../htmlTemplates/header-template.html');
        const headerHtml = await headerResponse.text();
        const headerContainer = document.getElementById('header-container');
        headerContainer.innerHTML = headerHtml;

        // Dispatch headerLoaded event right after header is loaded
        const headerEvent = new CustomEvent('headerLoaded');
        document.dispatchEvent(headerEvent);

        // Load footer
        const footerResponse = await fetch('../htmlTemplates/footer-template.html');
        const footerHtml = await footerResponse.text();
        const footerContainer = document.getElementById('footer-container');
        footerContainer.innerHTML = footerHtml;

        // Initialize theme after templates are loaded
        initializeTheme();
        
        // Dispatch custom event when templates are loaded
        const event = new CustomEvent('templatesLoaded');
        document.dispatchEvent(event);
    } catch (error) {
        console.error('Error loading templates:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadTemplates);