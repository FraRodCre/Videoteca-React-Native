import { connect } from 'react-redux'
import View from './view'

import * as MovieActions from '../../redux/movie_detail/actions'

const mapStateToProps = (state) => {
    return {
        movie: state.movie.movie,
        isFetching: state.movie.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getMovie: () => {
            const movie = props.movie
            dispatch(MovieActions.initMovieDetail(movie))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)