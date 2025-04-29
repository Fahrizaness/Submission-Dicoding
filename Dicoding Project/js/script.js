//darkmode script
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
    toggleButton.title = "Switch to Light Mode";
  } else {
    toggleButton.textContent = "🌙";
    toggleButton.title = "Switch to Dark Mode";
  }
});

// Alert on Form Submit
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah reload halaman
  alert("Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya.");
  contactForm.reset(); // Reset form jika diperlukan
});
