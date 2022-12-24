import addBody from './js/body';
addBody();

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import './js/fetchPictures';
import { FetchApiPictures } from './js/fetchPictures';

import { createGalleryCards } from './js/galleryCards';

import Notiflix from 'notiflix';

const fetchApiPictures = new FetchApiPictures();

const refs = {
  inputForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('.load-more'),
  gallery: document.querySelector('.gallery'),
};

refs.inputForm.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', loadMoreOnClick);
var lightbox = new SimpleLightbox('.gallery', {
  /* options */
  captions: true,
  captionsData: 'alt',
  captionAttribute: 'title',
  captionDelay: 250,
});

async function onSubmit(event) {
  try {
    event.preventDefault();
    refs.loadMoreBtn.style.display = 'none';
    fetchApiPictures.request = event.currentTarget.searchQuery.value
      .trim()
      .toLowerCase();
    fetchApiPictures.resetCounter();
    clearCardList();

    const getPictures = await fetchApiPictures.fetchPictures();
    await checkAndDisplay(getPictures);
  } catch (error) {
    Notiflix.Notify.failure(
      '"Sorry, there are no images matching your search query. Please try again."'
    );
  }
}

function clearCardList() {
  refs.gallery.innerHTML = '';
}

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionsData: 'alt',
  captionAttribute: 'title',
  captionDelay: 250,
});

function checkAndDisplay({ hits, totalHits }) {
  if (totalHits <= 0) {
    refs.loadMoreBtn.style.display = 'none';
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    const markup = createGalleryCards(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    if (totalHits > 40) {
      refs.loadMoreBtn.style.display = 'block';
    }
    return;
  }
}

async function loadMoreOnClick({ hits, totalHits }) {
  try {
    fetchApiPictures.increaseCounter();
    const getPictures = await fetchApiPictures.fetchPictures();
    ({ hits, totalHits } = getPictures);
    const totalPage = Math.ceil(totalHits / fetchApiPictures.per_page);
    const markup = createGalleryCards(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    if (fetchApiPictures.page <= totalPage) {
      refs.loadMoreBtn.style.display = 'none';
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
    
    }
  } catch (error) {
    console.log(error.message);
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
