import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'
import { MovieCell } from '../../widgets'
import * as colors from '../../commons/colors'

class Movies extends Component {

    constructor(props) {
        super(props)
        props.getMoviesList()
    }

    _onMovieTapped = movie => {
        this.props.updateMovieSelected(movie)
        Actions.Movie({ movie, title: movie.title })
    }

    _keyExtractor = (item, index) => `${item.id}`

    _renderItem = ({ item, index }) => (
        <MovieCell movie={item} onPress={movie => this._onMovieTapped(movie)}/>
    )

    _renderNoMoviesText  = isFetching => {
        return isFetching ? null : <Text style={styles.NoMovies}>{'No se han obtenido peículas'}</Text> 
    }

    _onEndReached = ({ distanceFromEnd }) => {
        const {list, isFetching, page, total} = this.props
        if (distanceFromEnd > 100 && list.length && !isFetching && page < total) {
            this.props.updateMoviesListOffset()
        }
    }

    _renderFooter = () => {
        const {isFetching, page} = this.props;

        if (!isFetching || page == 1) {
            return null
        }

        return <ActivityIndicator
                    color={colors.accentColor}
                    size='large'
                    style={{margin: 20}}
                />
    }

    render() {
        const { list, isFetching } = this.props
        return (
            <View style={styles.container}>
                <FlatList 
                    style= {styles.list}
                    data={list}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={2}
                    ListFooterComponent={ this._renderFooter }
                    ListEmptyComponent={ _ => this._renderNoMoviesText(isFetching) }
                    
                    refreshControl={
                        <RefreshControl
                            onRefresh={this.props.getMoviesList}
                            refreshing={isFetching}
                            tintColor={colors.white}
                            colors={[colors.main]}
                        />
                    }
                    onEndReachedThreshold={0.9}
                    onEndReached={this._onEndReached}
                />
            </View>
        )
    }
}

export default Movies