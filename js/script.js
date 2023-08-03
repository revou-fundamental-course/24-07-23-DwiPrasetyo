const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
    let currentSlide = 0;
    const slideImages = document.querySelectorAll(".slide");

    function changeSlide() {
        currentSlide = (currentSlide + 1) % slides.length;

        // Set the image src attribute based on the file name in the slides array
        slideImages.forEach((slideImage, index) => {
            const slidePath = "images/" + slides[(currentSlide + index) % slides.length];
            slideImage.src = slidePath;
        });
    }

    setInterval(changeSlide, 5000);

    function validateForm() {
        var nameInput = document.getElementById('name').value.trim();
        var emailInput = document.getElementById('email').value.trim();
        var locationInput = document.getElementById('location').value;

        // Check if name is empty
        if (nameInput === '') {
            alert('Please enter your name.');
            return false;
        }

        // Check if email is empty and valid
        if (emailInput === '') {
            alert('Please enter your email address.');
            return false;
        } else if (!validateEmail(emailInput)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Check if location is selected
        if (locationInput === '') {
            alert('Please select a location.');
            return false;
        }

        return true;
    }

    // Email validation helper function
    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

      // Function to handle smooth scrolling on navigation link clicks
  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Add click event listeners to each navigation link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior (jumping)
      const targetSection = e.target.getAttribute('href'); // Get the href attribute value
      smoothScroll(targetSection); // Call the smoothScroll function with the target section
    });
  });