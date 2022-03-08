import React, {useState} from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'


export default props => { //pode botar _ em vez de props, esquisito mas vai
    const [num, setNum] = useState(0)

    const inc = () => setNum(num+1)
    const dec = () => setNum(num-1)

     
    return (
        <>
            <Text style={estilo.txtG}>
                ContadorV2
            </Text> 
            <ContadorDisplay num={num}/>
            <ContadorBotoes inc={inc} dec={dec}/>     
        </>

    )
}