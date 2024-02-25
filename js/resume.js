(function() {
    // Initialize EmailJS
    emailjs.init("bDF-ozT5qREcAMoCt"); // Replace with your actual EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the form
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Send the form using EmailJS
        emailjs.sendForm('service_6m3oamf', 'template_mphy63n', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully.');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again.');
            });
    });
});
