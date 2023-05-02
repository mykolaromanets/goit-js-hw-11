'use strict';
export class PixabayApi {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '35988928-ef839336b426408be122bb6a8';
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }
  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      page: this.searchQuery,
      per_page: 40,
      orientation: 'horizontal',
      safesearch: true,
      key: this.#API_KEY,
    });
    return fetch(`${this.#BASE_URL}?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
