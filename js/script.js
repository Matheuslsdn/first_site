let imageUrls = ['img/imagem-home/download(2).jpg', 'img/imagem-home/download(1).jpg', 'img/imagem-home/download.jpg', 'img/imagem-home/download(3).jpg', 'img/imagem-home/download(4).jpg', 'img/imagem-home/images.jpg', 'img/imagem-home/images(1).jpg', 'img/imagem-home/images(2).jpg', 'img/imagem-home/images(3).jpg', 'img/imagem-home/images(4).jpg'];
let currentIndex = 0;

let currentImage = document.querySelector('.slider');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

prev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageUrls.length - 1;
  }
  currentImage.src = imageUrls[currentIndex];
});

next.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= imageUrls.length) {
    currentIndex = 0;
  }
  currentImage.src = imageUrls[currentIndex];
});