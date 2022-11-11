import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        padding: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        width: Dimensions.get('window').width - 40,
    },

    title: {},

    subTitle: {
        fontSize: 12,
        textAlign: 'right',
    },

})