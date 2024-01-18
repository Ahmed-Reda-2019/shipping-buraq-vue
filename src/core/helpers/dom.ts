import { Modal } from "bootstrap";

const $ = require("jquery");
$.noConflict();
const hideModal = (modelId): void => {
  const myModal = Modal.getInstance(document.getElementById(modelId));
  myModal.hide();
};
const showModal = (modelId): void => {
  const data =
    Modal.getInstance(document.getElementById(modelId)) ||
    new Modal(document.getElementById(modelId));
  data.show();
};

const removeModalBackdrop = (): void => {
  if (document.querySelectorAll(".modal-backdrop.fade.show").length) {
    // document.querySelectorAll(".modal-backdrop.fade.show").forEach((item) => {
    //   $(item).hide();
    // $(item).remove();
    // });
  }
};
const scrollToBottom = (divId, length: null | number = null): void => {
  var objDiv = document.getElementById(divId);
  if (
    objDiv &&
    (length == null ||
      objDiv.scrollHeight - objDiv.offsetHeight - objDiv.scrollTop < length)
  ) {
    objDiv.scrollTo({ top: objDiv.scrollHeight, behavior: "smooth" });
    // objDiv.scrollTop = objDiv.scrollHeight;
  }
};

export { removeModalBackdrop, hideModal, showModal, scrollToBottom };
