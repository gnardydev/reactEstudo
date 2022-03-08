import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return ( 
        <View style={style.Flexv2}>
            <Quadrado cor = '#F00'/>
            <Quadrado cor = '#0F0'/>
            <Quadrado cor = '#dd22c1'/>
            <Quadrado cor = '#36c9a7'/>
        </View>
    )
}

const style = StyleSheet.create({
    Flexv2:{
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: '#000'

    }
})
