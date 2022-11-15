import React from 'react'
import { Button, FlatList, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'

import MoonItem from './MoonItem'
import styles from './styles'

export default function MoonsPage() {

    const [moons, setMoons] = React.useState(['Phobos', 'Deimos'])
    const [newMoon, setNewMoon] = React.useState('')

    function addNewMoon() {
        setMoons([...moons, newMoon])
        setNewMoon('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formView}>
                <TextInput
                    style={styles.inputText} placeholder="Type the moon's name"
                    onChangeText={setNewMoon} value={newMoon}
                />
                <Button title='Add a new Moon' onPress={addNewMoon} />
            </View>

            <View>
                <FlatList
                    data={moons}
                    renderItem={({item}) => <MoonItem text={item} />}
                    keyExtractor={item => item}
                />
            </View>
        </SafeAreaView>
    )

}