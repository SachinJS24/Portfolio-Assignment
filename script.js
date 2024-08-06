// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if(name && email && message) {
      alert('Thank you for your message, ' + name + '!');
      document.getElementById('contact-form').reset();
  } else {
      alert('Please fill out all fields.');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});