export function createGalleryCards(images) {
    return images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `<div class="photo-card">
    <a href="${largeImageURL}"><img src="${webformatURL}L" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>${likes}</b>
      </p>
      <p class="info-item">
        <b>${views}</b>
      </p>
      <p class="info-item">
        <b>${comments}</b>
      </p>
      <p class="info-item">
        <b>${downloads}</b>
      </p>
    </div>
  </div>`).join('');
  }