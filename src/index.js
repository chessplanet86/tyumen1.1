let openModal = document.querySelector('.openModal');
let closeModal = document.querySelector('.modal__header__close')

openModal.addEventListener('click', () => {
    let modalWindow = document.querySelector('.modal');
    modalWindow.style.visibility = "visible";
});

closeModal.addEventListener('click', () => {
    let modalWindow = document.querySelector('.modal');
    modalWindow.style.visibility = "hidden";

});