document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Example: Print the values (you can send this data to your server or email)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    
    alert('Thank you for your message!');
    // Reset the form
    document.getElementById('contact-form').reset();
});
