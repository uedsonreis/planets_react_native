import React from 'react'
import { Text, View } from 'react-native'

import * as service from '../../services/planet.service'

import styles from './styles'

export default function HomePage() {

    const [planets, setPlanets] = React.useState<any[]>([]);

    React.useEffect(() => {
        service.getPlanets().then(data => {
            console.log(data[0].description)
            setPlanets(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            { planets.length < 1 && (<Text>Loading...</Text>) }
            <Text>Solar System Planets: {planets.length}</Text>
        </View>
    )
}
