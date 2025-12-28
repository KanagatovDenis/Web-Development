const config = {
  gallery: '.gallery',
  galleryImage: 'gallery__image',
  activeImage: 'gallery__image_selected',
  formName: '.gallery-form',
  formInput: '.radio__box',
};

const imagesList = Array.from(
  document.querySelectorAll(`.${config.galleryImage}`)
);
const galleryForm = document.querySelector(`${config.formName}`);
const gallery = document.querySelector(`${config.gallery}`);
let prevValue = 'auto';
let prevList = [];

const getData = (formInput) =>
  galleryForm.querySelector(`${formInput}:checked`).value;
const getImagesList = (value) =>
  imagesList.filter((item) => item.dataset.type === value);
const renderGallery = (array, activeClass, prevArray = null) => {
  prevArray
    ? prevList.forEach((item) => item.classList.remove(activeClass))
    : null;
  array.forEach((item) => item.classList.add(activeClass));
  prevValue = getData(config.formInput);
  prevList = array;
};
const sendForm = (e, prevValue = null) => {
  e.preventDefault();
  const selectedArray = getImagesList(getData(config.formInput));
  prevValue
    ? renderGallery(selectedArray, config.activeImage, prevList)
    : renderGallery(selectedArray, config.activeImage);
};

document.querySelector(config.formName).addEventListener('change', (e) => {
  sendForm(e, prevValue);
});

document.addEventListener('DOMContentLoaded', (e) => {
  sendForm(e);
});
