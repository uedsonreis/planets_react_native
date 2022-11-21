import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BorderlessButton, GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'

type Props = { moonName: string, removeAction: (text: string) => void }

export default function MoonItem({ moonName, removeAction }: Props) {

    function DeleteButton() {
        return (
            <View style={styles.deleteContainer}>
                <BorderlessButton onPress={() => removeAction(moonName)} style={styles.deleteButton}>
                    <Text>Delete</Text>
                </BorderlessButton>
            </View>
        )
    }

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={() => <DeleteButton />}>
                <View style={styles.container}>
                    <Text style={styles.text}>{moonName}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 18,
    },
    deleteContainer: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
    },
    deleteButton: {
        padding: 10,
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: "center",
    },
})