import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default class Button extends Component {
    static defaultProps = {
        label: '',
        onPress: () => {},
        buttonStyle: {},
        labelStyle: {}
    }

    render() {
        const { label, onPress, buttonStyle, labelStyle } = this.props
        return (
            <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
                <Text style={[styles.label, labelStyle]}>{label}</Text>
            </TouchableOpacity>
        )
    }
}