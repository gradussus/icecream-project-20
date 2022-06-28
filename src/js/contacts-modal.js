(() => {
  const refs = {
    openModalBtn: document.querySelector("[contacts-modal-open]"),
    closeModalBtn: document.querySelector("[contacts-modal-close]"),
    modal: document.querySelector("[contacts-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("contacts-modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();