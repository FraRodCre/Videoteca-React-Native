import { connect } from 'react-redux'
import View from './view'

import * as MoviesActions from '../../redux/movies/actions'

const mapStateToProps = (state) => {
    return {
        list: state.movies.list,
        isFetching: state.movies.isFetching,
        page: state.movies.page,
        total: state.movies.totalPages
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getMoviesList: () => {
            dispatch(MoviesActions.initMoviesList())
        },
        updateMovieSelected: movie => {
            dispatch(MoviesActions.updateMovieSelected(movie));
        },
        updateMoviesListOffset: () => {
            dispatch(MoviesActions.updateMoviesListOffset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)