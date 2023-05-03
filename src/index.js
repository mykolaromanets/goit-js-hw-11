import { PixabayApi } from './pixaby-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './createCardMarkup';

const pixabayApi = new PixabayApi();

const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('.search-form-input');
const searchBtnEl = document.querySelector('button');
const galleryEl = document.querySelector('.gallery');
const photoCardEl = document.querySelector('.photo-card');
const infoCardEl = document.querySelector('.info-item');
const btnLoadMore = document.querySelector('.load-more');

const onSearchFormSubmit = event => {
  event.preventDefault();
  pixabayApi.searchQuery = event.currentTarget.searchQuery.value;
  pixabayApi
    .fetchPhotosByQuery()
    .then(data => {
      photoCardEl.innerHTML = createMarkup(data.hits);
    })
    .catch(err => {
      console.log(err);
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
