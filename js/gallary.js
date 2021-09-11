// import galleryItems from "../app.js";

const modalWrapper = document.querySelector(".js-lightbox");

const backdrop = modalWrapper.querySelector(".lightbox__overlay");
backdrop.addEventListener("click", closeModalClickOnBackdrop);

const modalImg = modalWrapper.querySelector(".lightbox__image");

const gallary = galleryItems.map(makeLiWidthImg).join("");

const gallaryContainer = document.querySelector(".js-gallery");
gallaryContainer.insertAdjacentHTML("beforeend", gallary);
gallaryContainer.addEventListener("click", openModal);

const btnClose = document.querySelector("[data-action=close-lightbox]");
btnClose.addEventListener("click", closeModal);

const links = document.querySelectorAll(".gallery__link");
links.forEach((link) => link.addEventListener("click", removeDefaultEventLink));

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
});

function makeLiWidthImg({ preview, original, description }) {
  return `<li class="gallery__item">
            <a href=${original} class="gallery__link">
              <img class="gallery__image" src=${preview} data-sourse=${original} alt=${description}>
            </a>
          </li>`;
}

function openModal(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  modalWrapper.classList.add("is-open");
  document.body.style.overflow = "hidden";

  insertSrcImg(e);
  insertAltImg(e);
  insertDataIndex(e);
}

function closeModal() {
  modalWrapper.classList.remove("is-open");
  document.body.style.overflow = "";

  removeSrcImg();
  removeAltImg();
}

function closeModalClickOnBackdrop(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function insertSrcImg(e) {
  modalImg.src = e.target.dataset.sourse;
}

function insertAltImg(e) {
  modalImg.alt = e.target.alt;
}

function insertDataIndex(e) {
  modalImg.dataset.index = e.target.dataset.index;
}

function removeSrcImg() {
  modalImg.src = "";
}

function removeAltImg() {
  modalImg.alt = "";
}

function removeDefaultEventLink(e) {
  e.preventDefault();
}
