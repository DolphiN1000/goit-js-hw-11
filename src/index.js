// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import addBody from './js/body';
import './js/pixabay-api'
addBody();

const refs = {
  inputForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
}

refs.inputForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  

}

// const { height: cardHeight } = document
//   .querySelector('.gallery')
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: 'smooth',
// });



console.log(URL)