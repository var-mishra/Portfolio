
    function toggleMenu() {
        const nav = document.querySelector('.nav-cont ul');
        nav.classList.toggle('active');
    }
    let currentIndex = 0;
const cards = document.querySelectorAll('.recommendation-card');
const dots = document.querySelectorAll('.dot');
const totalCards = cards.length;

// Helper to update the slide and handle the circular transition
function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const cardWidth = cards[0].clientWidth;
    const spacing = 20; // Space between cards

    // Circular movement: wrapping the index
    if (index >= totalCards) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalCards - 1;
    } else {
        currentIndex = index;
    }

    // Update the transform to shift the carousel
    carouselInner.style.transform = `translateX(${-currentIndex * (cardWidth + spacing)}px)`;

    // Update the dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Manually changing the slide by clicking a dot
function currentSlide(index) {
    showSlide(index - 1); // Adjust for zero-indexing
}

// Auto slide functionality
// Get the form, button, and message elements
const form = document.querySelector('.info-form');
const submitButton = document.querySelector('.info-form-sub');
const confirmationMessage = document.getElementById('confirmationMessage');

// Add event listener to the form on submission
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the values from the input fields
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Log the input values to the console
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Show the confirmation message next to the button
  confirmationMessage.style.display = 'inline'; // Display message inline

  // Optionally, clear the form fields after submission
  form.reset();

  // Remove the message after 5 seconds
  setTimeout(() => {
    confirmationMessage.style.display = 'none'; // Hide the message
  }, 5000); // Message disappears after 5 seconds
});
