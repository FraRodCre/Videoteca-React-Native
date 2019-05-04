import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: colors.label,
        borderRadius: 4,
        justifyContent: 'center',
        marginVertical: 10
    },
    label: {
        width: '100%',
        textAlign: 'center',
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})