import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return ( 
        <View style={style.Flexv3}>
            <Quadrado cor = '#F00' lado={20}/>
            <Quadrado cor = '#0F0' lado={30}/>
            <Quadrado cor = '#dd22c1' lado={40}/>
            <Quadrado cor = '#36c9a7' lado={50}/>
        </View>
    )
}

const style = StyleSheet.create({
    Flexv3:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "flex-start",
        height: 350,
        width: '100%',
        backgroundColor: '#000'

    }
})
