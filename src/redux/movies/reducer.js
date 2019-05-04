import * as types from './types';

const initialState = {
    list: [],
    page: 1,
    totalPages: 0,
    isFetching: false,
    selectedMovie: null
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        
        case types.MOVIES_UPDATE_LIST:
            return {
                ...state,
                list: action.list,
                totalPages: action.total
            }

        case types.MOVIES_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        case types.MOVIES_UPDATE_SELECTED:
            return {
                ...state,
                selectedMovie: action.value
            }
        
        case types.MOVIES_UPDATE_PAGINATION:
            return {
                ...state,
                page: action.value
            }

        default:
            return state
    }
}