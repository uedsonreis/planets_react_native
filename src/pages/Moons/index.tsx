import React from 'react'
import { Button, TextInput, SafeAreaView, ScrollView } from 'react-native'

import styles from './styles'

export default function MoonsPage() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TextInput />
                <Button title='Add a new Moon'></Button>
            </ScrollView>
        </SafeAreaView>
    )

}