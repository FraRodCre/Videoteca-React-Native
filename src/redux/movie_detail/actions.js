import * as types from './types'
import * as api  from '../../webservices'

function updateMovie(movie) {
    return {
        type: types.MOVIE_UPDATE,
        movie
    }
}

function updateFetching(value) {
    return {
        type: types.MOVIE_UPDATE_FETCHING,
        value
    }
}

export function initMovieDetail(movie) {
    return function(dispatch, getState) {
        dispatch(updateMovie({}))
        dispatch(fetchMovieDetail(movie))
    }
}

function fetchMovieDetail(movie) {
    return function(dispatch, getState) {
        if (!movie) {
            return
        }

        dispatch(updateFetching(true))

        const movieID = movie.id
        api.fetchDetailMovie(movieID).then( res => {
                const movieDetail = res.data
                dispatch(updateMovie(movieDetail))
            })
            .catch( err => {
                this.setState({ err: err })
            })
            .finally( () => {
                dispatch(updateFetching(false))
            })
    }
}