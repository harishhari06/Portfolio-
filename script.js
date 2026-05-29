// script.js

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Message
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();
});
