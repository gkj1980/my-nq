document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Here you could add your logic to send the form data to a server
        contactForm.reset();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
