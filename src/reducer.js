import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAILURE
} from './actions';

export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const requestReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        records: action.records,
        status: REQUEST_STATUS.SUCCESS,
      };
    }
    case GET_MOVIES_FAILURE: {
      return {
        ...state,
        status: REQUEST_STATUS.ERROR,
        error: action.error,
      };
    }
    case GET_MOVIE_BY_ID_SUCCESS: {
      return {
        ...state,
        movie: action.movie,
        cast: action.cast,
        trailers: action.trailers,
        status: REQUEST_STATUS.SUCCESS,
      };
    }
    case GET_MOVIE_BY_ID_FAILURE: {
      return {
        ...state,
        status: REQUEST_STATUS.ERROR,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
export default requestReducer;
