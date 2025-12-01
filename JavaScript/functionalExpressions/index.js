const dogs = [
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-1.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-2.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-3.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-4.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-5.jpg',
  'https://pictures.s3.yandex.net/frontend-developer/functions/dog-6.jpg',
];

const dogElement = document.querySelector('#dog');
const buttonElement = document.querySelector('button');

const getRandomArrId = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
}

const procrastinate = function () {
  dogElement.style.backgroundImage = `url(${dogs[getRandomArrId(dogs.length)]})`;
}

buttonElement.addEventListener('click', procrastinate);
