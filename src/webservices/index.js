import axios from 'axios'
import { BASE_URL, URL_DISCOVER_MOVIES, URL_MOVIE } from '../config/api'

export function configureAxios() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }

  // Get movies from API
  export function fetchMovies(page){
      const url = `${URL_DISCOVER_MOVIES}&page=${page}`
      return axios.get(url)
  }

  export function fetchDetailMovie(idMovie){
      const url = `${URL_MOVIE}`.replace('ID_MOVIE', idMovie)
      return axios.get(url)
  }