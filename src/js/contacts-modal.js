(() => {
  const contactsModalRefs = {
    openModalBtn: document.querySelector("[data-contacts-modal-open]"),
    closeModalBtn: document.querySelector("[data-contacts-modal-close]"),
    modal: document.querySelector("[data-contacts-modal]"),
    form: document.querySelector('.franchise-modal-form'),
  };

  contactsModalRefs.openModalBtn.addEventListener("click", toggleModal);
  contactsModalRefs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("contacts-modal-open");
    contactsModalRefs.modal.classList.toggle("is-hidden");
  }


    })();