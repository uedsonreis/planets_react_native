import * as React from 'react'
import type { StackScreenProps } from '@react-navigation/stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from '../Home'
import MoonsPage from '../Moons'
import { Planet } from '../../dto/planet'
import PlanetDetailPage from '../PlanetDetailPage'

export type ScreenNavigationProp = StackScreenProps<{
    Home: undefined,
    Planet: { planet: Planet },
    Moons: { planet: Planet },
}>

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{ headerTitle: 'Solar System Planets' }} />
            <Stack.Screen name="Planet" component={PlanetDetailPage} />
            <Stack.Screen name="Moons" component={MoonsPage} />
        </Stack.Navigator>
    )
}
