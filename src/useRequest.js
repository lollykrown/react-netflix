import React, { useReducer, useEffect } from 'react';
import requestReducer, { REQUEST_STATUS } from './reducer';
import axios from 'axios';
import { GET_MOVIES_FAILURE, GET_MOVIES_SUCCESS,
  GET_MOVIE_BY_ID_SUCCESS, GET_MOVIE_BY_ID_FAILURE } from './actions';
// import { store } from 'react-notifications-component';

const useRequest = (title, fav) => {
  const [{ records, status, error }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    records: [],
    error: null,
  });

  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.themoviedb.org/3/movie/";
        const apiKey = "0180207eb6ef9e35482bc3aa2a2b9672";
        const lang = "en-US";

        const response = await axios.get(`${url}${title}?api_key=${apiKey}&language=${lang}`, {
          cancelToken: signal.current.token,
        });
        dispatch({
          type: GET_MOVIES_SUCCESS,
          records: response.data.results,
        });
      } catch (e) {
        console.log('Loading data error', e);
        if (axios.isCancel(e)) {
          console.log('Get request canceled');
        } else {
          dispatch({
            type: GET_MOVIES_FAILURE,
            error: e,
          });
        }
      }
    };
    if (fav) {
      let cachedFav = JSON.parse(localStorage.getItem("movies"));
      dispatch({
        type: GET_MOVIES_SUCCESS,
        records: cachedFav,
      });
    } else {
      fetchData();
    }
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel();
    };
  }, [title, fav]);

  const propsLocal = {
    records,
    status,
    error,
  };
  return propsLocal;
};

const useRequestMovie = (movieId) => {
  const [{ movie, cast, trailers, status, error }, dispatch] = useReducer(requestReducer, {
    status: REQUEST_STATUS.LOADING,
    movie: {},
    cast: [],
    trailers: [],
    error: null,
  });

  const signal = React.useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.themoviedb.org/3/movie/";
        const apiKey = "0180207eb6ef9e35482bc3aa2a2b9672";
        const lang = "en-US";

        const m = await axios.get(`${url}${movieId}?api_key=${apiKey}&language=${lang}`, {
          cancelToken: signal.current.token,
        });
        const c = await axios.get(`${url}${movieId}/credits?api_key=${apiKey}&language=${lang}`, {
          cancelToken: signal.current.token,
        });        
        const t = await axios.get(`${url}${movieId}$/videos?api_key=${apiKey}&language=${lang}`, {
          cancelToken: signal.current.token,
        });

        dispatch({
          type: GET_MOVIE_BY_ID_SUCCESS,
          movie: m.data,
          cast: c.data.cast,
          trailers: t.data.results
        });
      } catch (e) {
        console.log('Loading data error', e);
        if (axios.isCancel(e)) {
          console.log('Get request canceled');
        } else {
          dispatch({
            type: GET_MOVIE_BY_ID_FAILURE,
            error: e,
          });
        }
      }
    };

    fetchData();
    
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel();
    };
  }, [movieId]);

  const propsLocal = {
    movie,
    status,
    error,
    cast,
    trailers
  };
  return propsLocal;
};
export { useRequest, useRequestMovie };
