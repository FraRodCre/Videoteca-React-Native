import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'

export default class Input extends Component {
    static defaultProps = {
        label: '',
        value: '',
        error: '',
        keyboardType: 'default',
        placeholder: '',
        placeholderTextColor: 'rgba(0, 0, 0, 0.3)',
        selectionColor: '#666',
        containerStyle: {},
        labelStyle: {},
        inputStyle: {},
        errorStyle: {},
        multiline: false,
        autoCorrect: false,
        onChangeText: () => { }
    }

    render() {
        const {
            label,
            value,
            error,
            keyboardType,
            placeholder,
            placeholderTextColor,
            selectionColor,
            containerStyle,
            labelStyle,
            inputStyle,
            errorStyle,
            multiline,
            autoCorrect,
            onChangeText
        } = this.props
        return (
            <View style={[styles.container, containerStyle]}>
                {
                    label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null
                }
                <TextInput
                    style={[styles.input, inputStyle]}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType}
                    autoCorrect={autoCorrect}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    selectionColor={selectionColor}
                    underlineColorAndroid={'transparent'}
                    multiline={multiline}
                />
                {
                    error ? <Text style={[styles.error, errorStyle]}>{error}</Text> : null
                }
            </View>
        )
    }
}