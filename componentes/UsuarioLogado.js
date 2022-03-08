import React from 'react'
import {Text} from 'react-native'
import estilo from './estilo'
import If from './If'

export default props => { //passa usuario como props
    const usuario = props.usuario || {}
    return (
    //Object.keys(usuario).length !== 0
        <>
            <If teste={usuario && usuario.nome && usuario.email}> 
                <Text style={estilo.txtG}>Usuario Logado:</Text>
                <Text style={estilo.txtG}>{usuario.nome} - {usuario.email}</Text>      
            </If>
        </>
    )
}