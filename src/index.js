// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import addBody from './body';
addBody();
const { height: cardHeight } = document
  .querySelector('.gallery')
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: 'smooth',
});


var API_KEY = '32256476-11f87d3a9f8518386821fa1a7';
var URL =
  'https://pixabay.com/api/?key=' +
  API_KEY +
  '&q=' +
  encodeURIComponent('red roses');
$.getJSON(URL, function (data) {
  if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function (i, hit) {
      console.log(hit.pageURL);
    });
  else console.log('No hits');
});
