const imageCreationForm = document.querySelector('.image-creation__form');
const image = document.querySelector('.image__background');
const imageText = document.querySelector('.image__text');

const saveImageStyle = () => {
  const link = document.querySelector('.form__input_link').value;
  const text = document.querySelector('.form__input_text').value;
  const color = document.querySelector('.form__input-color').value;

  const imageStyle = {
    'link': link,
    'text': text,
    'color': color
  }

  sessionStorage.setItem('image-style-object', JSON.stringify(imageStyle));
}

const makeImage = () => {
  const imageObject = JSON.parse(sessionStorage.getItem('image-style-object'));

  if(imageObject) {
    if(imageObject.link) {
      image.src = imageObject.link;
      image.alt = 'Итоговое изображение';
    }

    if(imageObject.text) {
      imageText.textContent = imageObject.text;
    }

    if(imageObject.color) {
      imageText.style.color = imageObject.color;
    }
  }
}

const changeImage = (evt) => {
  evt.preventDefault();
  saveImageStyle();
  makeImage();
}

makeImage();

imageCreationForm.addEventListener('submit', changeImage);
