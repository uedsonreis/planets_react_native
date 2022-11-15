import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Planet } from '../../dto/planet'
import { ScreenNavigationProp } from '../../pages/Routes'

import styles from './styles'

type Props = { planet: Planet }

export function PlanetItem({ planet }: Props) {

    const navigation = useNavigation<ScreenNavigationProp['navigation']>()

    return (
        <View style={styles.container} onTouchEnd={() => navigation.navigate('Planet', { planet })}>
            <Text style={styles.title}>{planet.name}</Text>
            <Text style={styles.subTitle}>{planet.planetOrder}º planet</Text>
        </View>
    )

}