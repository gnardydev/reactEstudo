import React, {useState} from 'react'
import {Text, View, TextInput} from 'react-native'
import estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('teste') //alteracao na rola de interface para estado
    return ( //login eficiente
        <View> 
            <Text>{nome}</Text> 
            <TextInput
                placeholder='digite seu nome'
                value={nome} //se o valor fica null fica nao controlado
                onChangeText={nome => setNome(nome)}
            />
        </View>
        
    )
}