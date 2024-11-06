document.addEventListener("DOMContentLoaded", function() {
    // Countdown Handling

    // Set the target date for the countdown 
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    // Function to update countdown every second
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown elements
        document.getElementById("days").textContent = days < 10 ? "0" + days : days;
        document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

        // If countdown is over, clear the interval and show a message
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<p>Event has started!</p>";
        }
    }, 1000);

    // Testimonials Handling
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');

    const showTestimonial = (index) => {
        testimonials.forEach((item, i) => {
            item.style.display = i === index ? 'flex' : 'none'; // Show current, hide others
        });
    };

    const nextTestimonial = () => {
        currentIndex = (currentIndex + 1) % testimonials.length; // Cycle through
        showTestimonial(currentIndex);
    };

    // Initialize first testimonial display
    showTestimonial(currentIndex);

    // Change testimonial every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Form Submission Handling
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from refreshing the page

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Check if all fields are filled
        if (name && email && message) {
            // Display success message and reset form
            feedback.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            feedback.classList.add('visible');

            // Clear form after 2 seconds and hide feedback
            setTimeout(() => {
                form.reset();
                feedback.classList.remove('visible');
                feedback.textContent = '' // Clear for next submission
            }, 2000);
        } else {
            // Display error message
            feedback.textContent = 'Please fill in all fields before submitting.';
            feedback.classList.add('visible');
        }
    });
});
