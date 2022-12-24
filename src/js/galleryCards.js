export function createGalleryCards(hits) {
  return hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card" style="display: flex; max-width: 23%; height:auto; background-color: grey;
        border: solid 1px; border-radius: 16px; overflow: hidden; color: black;">
    <a href="${largeImageURL}" style="
    width: auto;
"><img src="${webformatURL}L" alt="${tags}" style='max-width: 100%; height:auto' loading="lazy" />
    <div class="info"style="
    display: flex;
        font-size: 12px;
        text-align: center;
        font-weight: normal;
">
      <p class="info-item" style="
      width: auto;
  ">
        <b>Likes: ${likes}</b>
      </p>
      <p class="info-item" style="
      width: auto;
  ">
        <b>Views: ${views}</b>
      </p>
      <p class="info-item" style="
      width: auto;
  ">
        <b>Comments: ${comments}</bComments>
      </p>
      <p class="info-item" style="
      width: auto; 
      font-weight: normal;
  ">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
  </div>`;
      }
    )
    .join('');
}
