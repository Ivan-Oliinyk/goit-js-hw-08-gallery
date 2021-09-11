const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

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
