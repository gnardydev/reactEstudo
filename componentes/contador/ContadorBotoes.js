import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <View style={style.Botoes}>
            <Button title='+' onPress={props.inc}/>
            <Button title='-' onPress={props.dec}/>
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})