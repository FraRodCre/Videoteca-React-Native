import * as types from './types'

const initialState = {
    movie: {},
    isFetching: false
}

export default function (state = initialState, action = {}) {
    switch(action.type) {
        case types.MOVIE_UPDATE:
            return {
                ...state,
                movie: action.movie
            }

        case types.MOVIE_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        default:
            return state
    }
}