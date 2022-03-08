import React from 'react'
import { Button } from 'react-native'

export default props => {

    function gerarNumero(min, max){ //so funcao de conta
        const fator = max - min + 1
        return parseInt(Math.random() * fator ) + min
    }

    return (
        <Button
            title='executar'
            onPress={function(){
                const n = gerarNumero(props.min, props.max) //pega nums e passa para uma funcao que chama um funcao
                props.funcao(n, 'o valor é') //pega funcao
            }}
        />
    )
}