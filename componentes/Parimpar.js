import React from 'react'
import { Text, View } from 'react-native'
import estilo from './estilo'

export default ({num = 14}) => {
    return(
        <View>
            <Text style={estilo.txtG}>O resultado é</Text>
            {num % 2 == 0
                ? <Text style={estilo.txtG}>Par</Text>
                : <Text style={estilo.txtG}>impar</Text>
            }
        </View>
    )
}
    // if(num % 2 == 0){
    //     return(
    //         <View>
    //             <Text>o resultado é:</Text>
    //             <Text style={estilo.txtG}>par</Text>
    //         </View>
    //     )
    // } else {
    //     return(
    //         <View>
    //             <Text>o resultado é:</Text>
    //             <Text style={estilo.txtG}>impar</Text>
    //         </View>
    //     )   
    // }
