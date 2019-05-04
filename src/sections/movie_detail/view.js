import React, { Component } from 'react'
import { View, Text, ScrollView, SafeAreaView, Image, Linking } from 'react-native'
import styles from './styles'
import * as colors from '../../commons/colors'
import _ from 'lodash'
import { URL_IMAGE } from '../../config/api'

class Movie extends Component {
    static defaultProps = {
        movie: {}
    }

    constructor(props) {
        super(props)
        props.getMovie()
    }

    render() {
        const { movie } = this.props
        const genres = movie.genres ? this._getGenres(movie.genres) : ''
        const producers = movie.production_companies ? this._getProducers(movie.production_companies) : ''
        const release_date = movie.release_date ? this._formatterDate(movie.release_date) : ''
        const url_image = movie.poster_path ? `${URL_IMAGE}` + movie.poster_path : ''
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <Image style={styles.image} source={{ uri: url_image }} />
                    <View>
                        <Text style={styles.label}>{'Fecha Estreno:'}</Text>
                        <Text style={styles.content}>{`${release_date}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'Valoración:'}</Text>
                        <Text style={styles.content}>{`${movie.vote_average} Estrellas`}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'Géneros:'}</Text>
                        <Text style={styles.content}>{`${genres}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'Duración:'}</Text>
                        <Text style={styles.content}>{`${movie.runtime} min`}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'Web:'}</Text>
                        <Text style={[styles.content, { color: colors.link }]} onPress={ this._goToURL } >{`${movie.homepage}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'Productores:'}</Text>
                        <Text style={styles.content}>{`${producers}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>{'Sinópsis:'}</Text>
                        <Text style={styles.content}>{movie.overview}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    _getGenres = genresArr => {
        var results = '';

        for (var i = 0; i < genresArr.length; i++) {
            if (i == 0)
                results = `${genresArr[i].name}`
            else
                results = `${results} | ${genresArr[i].name}`
        }

        return results;
    }
    _getProducers = producersArr => {
        var results = '';

        for (var i = 0; i < producersArr.length; i++) {
            if (i == 0)
                results = `${producersArr[i].name}`
            else
                results = `${results} | ${producersArr[i].name}`
        }

        return results;
    }

    _formatterDate = date => {
        try {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const release_date = new Date(date)
            release_date.toLocaleDateString(LANGUAGE, options)
            return release_date.toLocaleDateString("es", options)
        } catch (e) {
            return date
        }
    }

    _goToURL = () => {
        const { movie } = this.props
        if (movie.homepage) {
            Linking.canOpenURL(movie.homepage).then(supported => {
                if (supported) {
                    Linking.openURL(movie.homepage)
                } else {
                   
                }
            })
        }
    }
}

export default Movie