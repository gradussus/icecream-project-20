(() => {
  const modalBuyRefs = {
    openModalBtn: document.querySelectorAll("[data-form-open]"),
    closeModalBtn: document.querySelector("[data-form-close]"),
    modal: document.querySelector("[data-form]"),
    backDrop: document.querySelector("[data-modal]")
  };

  modalBuyRefs.openModalBtn.forEach(e => {
    e.addEventListener("click", toggleModal)
    modalBuyRefs.closeModalBtn.addEventListener("click", () => {
      document.body.classList.remove("form-open");
      document.body.classList.remove("modal-open");
      modalBuyRefs.backDrop.classList.add("is-hidden");
      modalBuyRefs.modal.classList.add("is-hidden")
    });
  })

  function toggleModal() {
    // document.body.classList.toggle("form-open");
    modalBuyRefs.modal.classList.toggle("is-hidden");
    // modalBuyRefs.backDrop.classList.toggle("is-hidden");
    if (modalBuyRefs.modal.classList.contains("is-hidden") === false) {
      document.body.classList.add("form-open")
    modalBuyRefs.backDrop.classList.remove("is-hidden");

    }
  }

  modalBuyRefs.modal.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelectorAll('.input');
    input.forEach(e => {
      e.value = '';
    })
  })
})();