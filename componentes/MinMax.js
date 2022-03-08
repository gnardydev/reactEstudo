import React from "react";

import estilo from "./estilo";

export default (props) => {
    console.warn(props)
    return (
        <Text style={estilo.txtG}>
            O valor {props.max} e maior que o valor {props.min}
        </Text>
    )    
}

