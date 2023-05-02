import { PixabayApi } from './pixaby-api';

const pixabayApi = new PixabayApi();

const searchFormEl = document.querySelector('#search-form');
const inputSearchEl = document.querySelector('input');
const searchBtnEl = document.querySelector('button');
const photoCardEl = document.querySelector('.photo-card');
const infoCardEl = document.querySelector('.info-item');

const onSearchFormSubmit = event => {
  event.preventDefault();
  pixabayApi.searchQuery = event.currentTarget.searchQuery.value;
  pixabayApi
    .fetchPhotosByQuery()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
