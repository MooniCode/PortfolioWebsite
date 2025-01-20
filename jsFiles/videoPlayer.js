document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-preview');
    
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        
        container.addEventListener('mouseenter', () => {
            video.play();
        });
        
        container.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});