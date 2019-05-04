import * as types from './types'
import * as api from '../../webservices'

function updateOffset(value) {
    return {
        type: types.MOVIES_UPDATE_PAGINATION,
        value
    }
}

function updateMoviesList(list, total) {
    return {
        type: types.MOVIES_UPDATE_LIST,
        list: list,
        total
    }
}

export function updateMovieSelected(value) {
    return {
        type: types.MOVIES_UPDATE_SELECTED,
        value
    }
}

function updateFetching(value) {
    return {
        type: types.MOVIES_UPDATE_FETCHING,
        value
    }
}

export function initMoviesList() {
    return function(dispatch, getState) {
      dispatch(updateMoviesList([], 1))
      dispatch(updateOffset(1))
      dispatch(fetchMoviesList())
    }
}

// Pagination
export function updateMoviesListOffset() {
    return function(dispatch, getState) {
        const countPage = getState().movies.page + 1
        dispatch(updateOffset(countPage))
        dispatch(fetchMoviesList(countPage))
    }
}

export function loadMovie(movie) {
    return function(dispatch, getState) {
        const list = [movie, ...getState().movies.list];
        const totalPages = getState().movies.totalPages;
        dispatch(updateMoviesList(list, totalPages))
    }
}


function fetchMoviesList() {
    // REDUX THUNK
    return (dispatch, getState) => {
        const page = getState().movies.page
        dispatch(updateFetching(true))
        api.fetchMovies(page).then( res => {
                const list = [ ...getState().movies.list, ...res.data.results]
                const totalPages = res.data.total_pages
                dispatch(updateMoviesList(list, totalPages))
            })
            .catch( err => {
                this.setState({ err: err });
            })
            .finally( () => dispatch(updateFetching(false)))
    }
}