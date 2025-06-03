// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
