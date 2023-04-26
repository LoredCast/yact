import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

const table : React.FC= () => {
    const [counter, setCounter] = useState(0)

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>
                Current Count: { counter }
            </Text>

            <Button mode='contained' onPress={() => setCounter(counter + 1)} loading={true}>Increase</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    heading : {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default table