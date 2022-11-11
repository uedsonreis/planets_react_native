import React from 'react'
import { Text, View } from 'react-native'
import { Planet } from '../../dto/planet'

import styles from './styles'

type Props = { planet: Planet }

export function PlanetItem({ planet }: Props) {

    return (
        <View style={styles.container} onTouchEnd={() => alert('Oh my God!')}>
            <Text style={styles.title}>{planet.name}</Text>
            <Text style={styles.subTitle}>{planet.planetOrder}º planet</Text>
        </View>
    )

}