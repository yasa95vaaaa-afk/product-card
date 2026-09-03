const subscribeForm = document.getElementById('subscribeForm');
const subscribeEmail = document.getElementById('subscribeEmail');
const subscribeError = document.getElementById('subscribeError');

subscribeForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = subscribeEmail.value.trim();

  if (!isValidEmail(emailValue)) {
    subscribeError.textContent = 'Введите корректный email';
    subscribeEmail.setAttribute('aria-invalid', 'true');
    return;
  }

  subscribeError.textContent = '';
  subscribeEmail.removeAttribute('aria-invalid');

  console.log({ email: emailValue });

  subscribeForm.reset();
});

function isValidEmail(value) {
  if (!value) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

/* ===== MODAL: open / close ===== */

const overlay = document.getElementById('overlay');
const modal = document.getElementById('registerModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const registerForm = document.getElementById('registerForm');
const registerError = document.getElementById('registerError');

function openModal() {
  overlay.classList.add('overlay-showed');
  modal.classList.add('modal-showed');
}

function closeModal() {
  overlay.classList.remove('overlay-showed');
  modal.classList.remove('modal-showed');
  registerForm.reset();
  registerError.textContent = '';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/* ===== REGISTRATION FORM ===== */

let user;

registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const passwordRepeat = document.getElementById('passwordRepeat').value;

  if (!registerForm.checkValidity()) {
    registerError.textContent = 'Регистрация отклонена: заполните все поля корректно';
    return;
  }

  if (password !== passwordRepeat) {
    registerError.textContent = 'Регистрация отклонена: пароли не совпадают';
    return;
  }

  registerError.textContent = '';

  user = {
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    birthDate: document.getElementById('birthDate').value,
    login: document.getElementById('login').value.trim(),
    password: password,
    createdOn: new Date()
  };

  console.log(user);

  closeModal();
});