import React, {useState} from 'react'
import Filho from './Filho'
import {Text} from 'react-native'

export default props => {
    const[num, setNum] = useState(0)
    const[texto, setTexto] = useState('') //funciona da seguinte forma
    //num e o valor e set a funcao que altera o valor 
    function exibirValor(numero, texto){ //funcao que seta o novo valor
        setNum(numero)   
        setTexto(texto) 
    }

    return (
        <>
        <Text>{texto}: {num}</Text>
        <Filho 
        min={1} //passa num
        max={60} //passa num 2 e dps passa funcao que tem 2 parametros
        funcao={exibirValor}/>
        </>
    )
}