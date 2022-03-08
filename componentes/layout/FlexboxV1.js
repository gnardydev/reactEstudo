import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return ( 
        <View style={style.Flexv1}>
            <Quadrado cor = '#F00'/>
            <Quadrado cor = '#0F0'/>
            <Quadrado cor = '#dd22c1'/>
            <Quadrado cor = '#36c9a7'/>
        </View>
    )
}

const style = StyleSheet.create({
    Flexv1:{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#000'

    }
})
