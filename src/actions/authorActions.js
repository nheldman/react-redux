import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const loadAuthorsSuccess = (authors) => ({
  type: types.LOAD_AUTHORS_SUCCESS,
  authors
});

export const createAuthorSuccess = (author) => ({
  type: types.CREATE_AUTHOR_SUCCESS,
  author
});

export const updateAuthorSuccess = (author) => ({
  type: types.UPDATE_AUTHOR_SUCCESS,
  author
});

export const loadAuthors = () => (dispatch) => {
  dispatch(beginAjaxCall());

  return authorApi.getAllAuthors().then(
    authors => {
      dispatch(loadAuthorsSuccess(authors));
    },
    error => {
      dispatch(ajaxCallError(error));
      throw(error);
    }
  );
};

export const saveAuthor = (author) => (dispatch, getState) => {
  dispatch(beginAjaxCall());

  return authorApi.saveAuthor(author).then(
    savedAuthor => {
      author.id
        ? dispatch(updateAuthorSuccess(savedAuthor))
        : dispatch(createAuthorSuccess(savedAuthor));
    },
    error => {
      dispatch(ajaxCallError(error));
      throw(error);
    }
  );
};

