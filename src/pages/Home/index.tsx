import React from 'react'
import { Text, View } from 'react-native'

import * as service from '../../services/planet.service'

import styles from './styles'

export default function HomePage() {

    const [planets, setPlanets] = React.useState([]);

    React.useEffect(() => {
        service.getPlanets().then(data => setPlanets(data))
    }, [])

    return (
        <View style={styles.container}>
            <Text>Solar System Planets: {planets.length}</Text>
        </View>
    )
}
