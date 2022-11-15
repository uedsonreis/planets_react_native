import React from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { PlanetItem } from '../../components/PlanetItem';

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
        <SafeAreaView style={styles.container}>
            { planets.length < 1 && (<Text>Loading...</Text>) }
            { planets.length > 0 && (
                <FlatList
                    data={planets}
                    renderItem={({item}) => <PlanetItem planet={item} />}
                    keyExtractor={item => item.id}
                />
            ) }
        </SafeAreaView>
    )
}
