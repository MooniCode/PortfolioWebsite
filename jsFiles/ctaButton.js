const button = document.querySelector('.cta-button');

button.addEventListener('click', () => {
  button.style.transform = 'scale(0.95)';
  
  // Reset the transform after the click
  setTimeout(() => {
    button.style.transform = '';
  }, 200);
});