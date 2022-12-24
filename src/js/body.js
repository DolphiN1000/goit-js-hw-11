export default function addBody() {
  const body = document.querySelector('body');
  // body.style.display = flex;
  // body.style.alignItems = center;
  const bodyText = `<form class="search-form" id="search-form" style="display: flex">
    <input
      type="text"
      name="searchQuery"
      autocomplete="off"
      placeholder="Search images..." style="margin-left:auto; margin-right: 30px;
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 16px;
      background-color: tomato;
      "
    />
    <button type="submit" style="margin-right:auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 16px;
    background-color: tomato;
    ">Search</button>
    </form>
    <div class="gallery" style="display: flex; gap: 30px; flex-wrap: wrap; margin: 15px">
    <!-- Картки зображень -->
    </div>
    <button type="button" class="load-more" style="display: none;margin-left:auto; margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 16px;
    background-color: tomato;
    ">Load more</button>`;
  body.insertAdjacentHTML('beforeend', bodyText);
  // body.style.display = flex;
  // body.style.alignItems = center;
}
