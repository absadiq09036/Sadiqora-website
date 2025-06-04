// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Contact Form Submission Handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
      const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      // For now, just show a success message
      alert("Thanks for reaching out! Your message has been received.");

      // Optionally reset the form
      form.reset();
    });
  }
});