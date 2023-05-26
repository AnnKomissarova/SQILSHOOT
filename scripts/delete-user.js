const bodyOverlay = document.querySelector(".body-overlay");
const body = document.querySelector("body");
const modalDeleteUser = document.querySelector(".modal-delete-user");
const openModalBtn = document.querySelector(".delete-btn-nav");
const openModalIcon = document.querySelector(".delete-icon-nav")
const closeModalBtn = document.querySelector(".btn-close");
const saveBtn = document.querySelector(".btn-save");


function openModal() {
    modalDeleteUser.classList.add('open');
    bodyOverlay.classList.add('active-modal');
    body.classList.add('with-overlay');
};

function closeModal() {
    modalDeleteUser.classList.remove('open');
    bodyOverlay.classList.remove('active-modal');
    body.classList.remove('with-overlay');
};


openModalIcon.addEventListener('click', openModal);
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
bodyOverlay.addEventListener('click', closeModal);
saveBtn.addEventListener('click', closeModal);