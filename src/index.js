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
    console.log(event.target.searchQuery.value.trim());
    fetchApiPictures.request = event.currentTarget.searchQuery.value
      .trim()
      .toLowerCase();
    console.log(fetchApiPictures.request);
    fetchApiPictures.resetCounter();
    clearCardList();

    if (!fetchApiPictures.request) {
      refs.loadMoreBtn.style.display = 'none';
      return Notiflix.Notify.failure(
        '"Sorry, there are no images matching your search query. Please try again1."'
      );
    }
    const getPictures = await fetchApiPictures.fetchPictures();
    console.log(getPictures);
    await checkAndDisplay(getPictures);
  } catch (error) {
    Notiflix.Notify.failure(
      '"Sorry, there are no images matching your search query. Please try again2."'
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
    if (totalHits > 20) {
      console.dir(refs.loadMoreBtn);
      refs.loadMoreBtn.style.display = 'block';
    }
    loadMoreBtn.show();
    return;
  }
}

async function loadMoreOnClick() {
  try {
    console.log('clic1');
    const getPictures = await fetchApiPictures.fetchPictures();
    await checkAndDisplayLoadMore(getPictures);
  } catch (error) {
    console.log(error.message);
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

function checkAndDisplayLoadMore({ hits, totalHits }) {
  console.log('click2');
  const totalPage = Math.ceil(totalHits / fetchApiPictures.per_page);
  if (fetchApiPictures.page >= totalPage) {
    refs.loadMoreBtn.style.display = 'none';
    return Notiflix.Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  } else {
    const markup = createGalleryCards(hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    return;
  }
}

// const { height: cardHeight } = document
//   .querySelector('.gallery')
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: 'smooth',
// });
