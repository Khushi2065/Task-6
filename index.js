document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Invalid email format.';
    valid = false;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    valid = false;
  }

  if (valid) {
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('contactForm').reset();
  }
});

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
window.closePopup = closePopup;
