const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const LoginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

LoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
