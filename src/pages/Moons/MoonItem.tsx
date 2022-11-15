import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BorderlessButton, Swipeable } from 'react-native-gesture-handler'

type Props = { text: string }

export default function MoonItem({ text }: Props) {

    function DeleteButton({ text }: Props) {
        return (
            <View style={styles.deleteContainer}>
                <BorderlessButton onPress={() => alert('Delete it now!')} style={styles.deleteButton}>
                    <Text>Remove</Text>
                </BorderlessButton>
            </View>
        )
    }

    return (
        <Swipeable renderRightActions={() => <DeleteButton text={text} />}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
    },
    text: {
        fontSize: 18,
    },
    deleteContainer: {
        marginLeft: -5,
        marginVertical: 5,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
    },
    deleteButton: {
        padding: 10,
        height: '100%',
        marginRight: 5,
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: "center",
    },
})