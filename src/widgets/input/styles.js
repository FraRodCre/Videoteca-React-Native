import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    container: {
        marginVertical: 10
    },
    label: {
        fontSize: 16,
        color: colors.label,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 10
    },
    input: {
        color: colors.content,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.label,
        backgroundColor: colors.white,
        padding: 4,
        textAlignVertical: 'center',
        marginHorizontal: 16,
        marginTop: 10
    },
    error: {
        color: colors.error,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5
    }
})