const bodyOverlay = document.querySelector(".body-overlay");
const body = document.querySelector("body");
const modalPassword = document.querySelector(".password-modal");
const openModalBtn = document.querySelector(".password-btn");
const closeModalBtn = document.querySelector(".close-modal");
const savePasswordBtn = document.querySelector(".save-password");

function openModal() {
    modalPassword.classList.add('open');
    bodyOverlay.classList.add('active-modal');
    body.classList.add('with-overlay');
};

function closeModal() {
    modalPassword.classList.remove('open');
    bodyOverlay.classList.remove('active-modal');
    body.classList.remove('with-overlay');
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
bodyOverlay.addEventListener('click', closeModal);
savePasswordBtn.addEventListener('click', closeModal);