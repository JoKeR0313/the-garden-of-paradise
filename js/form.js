const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    if (!contactForm.checkValidity()) {
      e.preventDefault();
      contactForm.reportValidity();
      return;
    }
  });
}
