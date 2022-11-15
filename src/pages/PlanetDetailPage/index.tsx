import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { Planet } from '../../dto/planet'
import { ScreenNavigationProp } from '../Routes'

import styles from './styles'

export default function DetailPage() {

    const navigation = useNavigation<ScreenNavigationProp['navigation']>()

    const route = useRoute()
    const { planet } = route.params as { planet: Planet }

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title="Moons" onPress={() => navigation.navigate('Moons', { planet })} />
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    source={{ uri: planet.imgSrc[0].img, height: styles.image.width }}
                />

                <View style={styles.item}>
                    <Text style={styles.text}>{planet.description}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}>Mass: {planet.basicDetails[0].mass}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>Volume: {planet.basicDetails[0].volume}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
