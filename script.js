const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('.modal');

openButton.addEventListener('click', () => {
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});
