import axios from 'axios';
axios.defaults.baseURL = `https://pixabay.com/api/`;
const API_KEY = '32256476-11f87d3a9f8518386821fa1a7';
export class FetchApiPictures {
  constructor() {
    this.request = '';
    this.page = 1;
    this.per_page = 40;
  }

  async fetchPictures() {
    try {
      const response = await axios.get(
        `?key=${API_KEY}&q=${this.request}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.per_page}`
      );
      this.increaseCounter();
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  increaseCounter() {
    this.page += 1;
  }

  resetCounter() {
    this.page = 1;
  }
  get requests() {
    return this.request;
  }
  set requests(newRequests) {
    this.request = newRequests;
  }
}
