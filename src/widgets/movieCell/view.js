import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { URL_IMAGE } from '../../config/api'

class MovieCell extends Component {
    static defaultProps = {
        movie: {},
        onPress: () => { }
    }

    _onCellTapped = () => {
        const { movie } = this.props;
        this.props.onPress(movie);
    }

    render() {
        const { movie } = this.props
        const source = movie && movie.poster_path ? { uri: `${URL_IMAGE}${movie.poster_path}` } : null;
        return (
            <TouchableOpacity onPress={_ => this._onCellTapped()} style={styles.cell} >
                <Image source={source} style={styles.image}  />
            </TouchableOpacity>
        )
    }
}
export default MovieCell