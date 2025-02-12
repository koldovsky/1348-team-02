// Footer form validation
const form = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const modal = document.getElementById('subscribeModal');
const closeModal = document.getElementById('closeModal');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

function showError(message) {
  emailError.textContent = message;
  emailError.style.display = 'block';
  emailInput.classList.add('footer__contacts-form__input--error');
}

function clearError() {
  emailError.textContent = '';
  emailError.style.display = 'none';
  emailInput.classList.remove('footer__contacts-form__input--error');
}

function showModal() {
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 10);
}

function hideModal() {
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Clear error on input
emailInput.addEventListener('input', clearError);

// Close modal handlers
closeModal.addEventListener('click', hideModal);
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

// Form submission handler
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    showError('Please enter your email address');
    return;
  }

  if (!validateEmail(email)) {
    showError('Please enter a valid email address');
    return;
  }

  // If validation passes
  console.log('Email submitted:', email);
  showModal();
  form.reset();
});