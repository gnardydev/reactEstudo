import React from "react";
import {Text} from "react-native"
import estilo from "./estilo";

export default props => {
    //export default ({min, max}) => {}
    const {ini, fin} = props 
    const delta = fin - ini +1 //destructiring ler algo dentro de uma estrutura // const delta = props.fin - props.ini +1 
    const aleatorio = parseInt(Math.random() * delta) + ini
    return ( //cuidado no return
        <Text style = {estilo.txtG}>
            O valor aleatorio gerado {aleatorio}
        </Text>
    )
}