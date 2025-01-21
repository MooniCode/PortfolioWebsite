// Check URL parameters for success/error messages
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    
    if (success === '1') {
        document.getElementById('successMessage').style.display = 'block';
    } else if (success === '0') {
        document.getElementById('errorMessage').style.display = 'block';
    }
};

document.getElementById('contactForm').addEventListener('submit', function(e) {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset errors
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });

    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (!email || !isValidEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (!subject) {
        document.getElementById('subjectError').style.display = 'block';
        isValid = false;
    }

    if (!message) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}