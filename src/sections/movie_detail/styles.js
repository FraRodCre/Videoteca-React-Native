import { StyleSheet } from 'react-native'
import * as colors from '../../commons/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    label: {
        fontSize: 16,
        color: colors.label,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 10
    },
    content: {
        fontSize: 16,
        color: colors.content,
        marginHorizontal: 16,
    },
    image: {
        width: '100%',
        height: 600,
        resizeMode: 'cover',
        backgroundColor: colors.white
    },
    scroll: {
        bottom: 10
    }
})