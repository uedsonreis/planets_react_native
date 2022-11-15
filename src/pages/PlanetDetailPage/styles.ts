import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },

    image: {
        width: Dimensions.get('screen').width
    },

    item: {
        borderTopWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopColor: 'gray',
    },

    text: {
        fontSize: 16,
        textAlign: 'justify',
    },

})
