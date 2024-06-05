const imageUrls = ['img/imagem-home/cinza-escuro.jpg', 'img/imagem-home/download(1).jpg', 'img/imagem-home/donwload.jpg'];
let currentIndex = 0;

const currentImage = document.querySelector('.img1');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageUrls.length - 1;
  }
  currentImage.src = imageUrls[currentIndex];
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= imageUrls.length) {
    currentIndex = 0;
  }
  currentImage.src = imageUrls[currentIndex];
});