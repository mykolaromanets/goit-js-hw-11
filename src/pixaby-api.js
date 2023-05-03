'use strict';
// export class PixabayApi {
//   #BASE_URL = 'https://pixabay.com/api/';
//   #API_KEY = '35988928-ef839336b426408be122bb6a8';
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//   }
//   fetchPhotosByQuery() {
//     const searchParams = new URLSearchParams({
//       q: this.searchQuery,
//       page: this.searchQuery,
//       per_page: 40,
//       orientation: 'horizontal',
//       safesearch: true,
//       key: this.#API_KEY,
//     });
//     return fetch(`${this.#BASE_URL}?${searchParams}`).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
//   }
// }
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = 'Client-ID 28194821-49041d995ecd04735d9e20d11';
const API_KEY = '35988928-ef839336b426408be122bb6a8';

export class PixabayAPI {
  #page = 1;
  #per_page = 40;
  #query = '';
  #totalPages = 0;

  async getPhotos() {
    const searchParams = {
      page: this.#page,
      q: this.#query,
      per_page: this.#per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: this.#API_KEY,
    };

    const urlAXIOS = `?key=${API_KEY}`;
    // const urlAXIOS = `?key=${API_KEY}&q=${this.#query}&page=${this.#page}&per_page=${this.#per_page}`;

    const { data } = await axios.get(urlAXIOS, { searchParams });
    return data;
  }

  get query() {
    this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  setTotal(total) {
    this.#totalPages = total;
  }

  hasMorePhotos() {
    return this.#page < Math.ceil(this.#totalPages / this.#per_page);
  }
}
