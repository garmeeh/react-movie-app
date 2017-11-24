export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const DETAIL_REQUEST = 'DETAIL_REQUEST';
export const DETAIL_SUCCESS = 'DETAIL_SUCCESS';

export const searchRequest = (searchTerm = '') => ({
  type: SEARCH_REQUEST,
  searchTerm
});

export const searchSuccess = response => ({
  type: SEARCH_SUCCESS,
  response
});

export const detailRequest = (id = '') => ({
  type: DETAIL_REQUEST,
  id
});

export const detailSuccess = response => ({
  type: DETAIL_SUCCESS,
  response
});
