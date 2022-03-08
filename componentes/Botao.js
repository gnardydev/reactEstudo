import React from "react";
import { Button } from "react-native";

export default props => {
    
    // function executar(){
    //     console.warn('executado 1')
    // }

    const executar = () => {
    console.warn('executado 1')
    }

    //caso queira botar o executar() ali embaixo precisa de retorno de funcao
    // function executar(){
    //     return function(){
    //         console.warn("Executar")
    //     }
    // }

    return (
        <>
            <Button
                title="Executar #1"
                onPress={executar}
                    //nao pode ser executar() pq essa funcao executar nao retorna uma funcao!!  
            />
             <Button
                title="Executar #2"
                onPress={function(){
                    console.warn("executado 2")
                }}
                    //nao pode ser executar() pq essa funcao executar nao retorna uma funcao!!              
            />

            <Button
                title="Executar #3"
                onPress={() => console.warn("executado 3")}
                //nao pode ser executar() pq essa funcao executar nao retorna uma funcao!!   
            />

             {/* <Button
                title="Executar #2"
                onPress={() => console.warn("executado 2")}
                    //nao pode ser executar() pq essa funcao executar nao retorna uma funcao!!
                
            /> */}

        </>
               
    )
}