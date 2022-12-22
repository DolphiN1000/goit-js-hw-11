export function addBody () {
    const body = document.querySelector("body");
    const bodyText =  `<form class="search-form" id="search-form">
    <input
      type="text"
      name="searchQuery"
      autocomplete="off"
      placeholder="Search images..."
    />
    <button type="submit">Search</button>
    </form>
    <div class="gallery">
    <!-- Картки зображень -->
    </div>
    <button type="button" class="load-more">Load more</button>`;
    body.insertAdjacentHTML('beforeend', bodyText);

}

export function createGalleryCards(images) {
  return images.map ()
}