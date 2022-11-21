import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Button, FlatList, SafeAreaView, TextInput, View } from 'react-native'

import { moonRepository } from '../../services/moon.repository'
import MoonItem from './MoonItem'
import styles from './styles'

export default function MoonsPage() {

    const route = useRoute()
    const { planet } = route.params as any

    const [moons, setMoons] = React.useState<string[]>([])
    const [newMoon, setNewMoon] = React.useState('')

    React.useEffect(() => {
        getMoons()
    }, [])

    async function getMoons() {
        setMoons(await moonRepository.get(planet.key))
    }

    async function addNewMoon() {
        await moonRepository.add(planet.key, newMoon)
        getMoons()
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
                    keyExtractor={item => item}
                    renderItem={({item}) => <MoonItem moonName={item} removeAction={(text) => alert(text)} />}
                />
            </View>
        </SafeAreaView>
    )

}