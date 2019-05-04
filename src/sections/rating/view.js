import React, { Component } from 'react'
import { View, SafeAreaView, Text, Picker, StyleSheet } from 'react-native'
import { Actions } from "react-native-router-flux"
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import { Input, Button } from '../../widgets'

class Rating extends Component {
    state = { rating: '', comment: '', errorToRating: '' }

    componentDidMount() {
        this._getRating()
    }
    
    _getRating = async () => {
        try {
            const movieID = `${this.props.movie.id}`
            const ratingStore = (await AsyncStorage.getItem(movieID)) || { rating: '', comment: '' }
            const ratingStoreJson = JSON.parse(ratingStore)
            this.setState({
                rating: ratingStoreJson.rating,
                comment: ratingStoreJson.comment
            })
        } catch (error) {
            console.log(error)
        }
    }

    _storeRating = async () => {
        const ratingState = JSON.stringify(this.state)
        const movieID = `${this.props.movie.id}`
        try {
            await AsyncStorage.setItem(movieID, ratingState)
        } catch (error) {
            console.log(error)
        }
    }
    
    _onSubmit = () => {
        const { rating } = this.state
        if(!rating) return this.setState( {errorToRating: 'Seleccione una calificación'})
        this._storeRating()
        Actions.pop()
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View >
                    <Text style={styles.label}>Calificación:</Text>
                    <Picker
                        selectedValue={this.state.rating}
                        onValueChange={(itemValue) =>
                            this.setState({ rating: itemValue })
                        }
                        style={styles.picker}
                    >
                        <Picker.Item label="Seleccione calificación..." value="" />
                        <Picker.Item label="1 Esrtella" value="1" />
                        <Picker.Item label="2 Estrellas" value="2" />
                        <Picker.Item label="3 Estrellas" value="3" />
                        <Picker.Item label="4 Estrellas" value="4" />
                        <Picker.Item label="5 Estrellas" value="5" />
                        <Picker.Item label="6 Estrellas" value="6" />
                        <Picker.Item label="7 Estrellas" value="7" />
                        <Picker.Item label="8 Estrellas" value="8" />
                        <Picker.Item label="9 Estrellas" value="9" />
                        <Picker.Item label="10 Estrellas" value="10" />
                    </Picker>
                    <Input
                        label={'Comentario:'}
                        onChangeText={comment => this.setState({ comment })}
                        value={this.state.comment}
                        error={this.state.errorToRating}
                        keyboardType={'decimal-pad'}
                    />
                    <Button
                        label={'Enviar'}
                        onPress={this._onSubmit}
                        buttonStyle={{ margin: 16 }}
                        isFetching={this.props.isFetching}
                    />

                </View>


            </SafeAreaView>
        )
    }
}

export default Rating
