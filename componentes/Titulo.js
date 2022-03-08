import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";

export default props => {
    // return(
    //     <View>
    //         <Text style={estilo.txtG}>{props.principal}</Text>
    //         <Text>{props.secundario}</Text>
    //     </View>
    // )
       return( //Ou botar la em cima {Fragment} from 'react' retorna diretamente elementos 
            // <React.Fragment> 
            <>
                <Text style={estilo.txtG}>{props.principal}</Text>
                <Text>{props.secundario}</Text>                
            </>

            // </React.Fragment> 

    )
}
        
    
