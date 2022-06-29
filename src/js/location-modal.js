(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-location-modal-open]"),
    closeModalBtn: document.querySelector("[data-location-modal-close]"),
    modal: document.querySelector("[data-location-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("location-modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();