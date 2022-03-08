import React from 'react'
import {Text, FlatList} from 'react-native'
import estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text>{p.id} ) {p.nome} - R$ {p.preco}</Text>       
    }
    return (
        <>  
            <Text style={estilo.txtG}>
                Lista de produtos v2
            </Text>
            <FlatList
                data={Produtos}
                keyExtractor={i=>`${i.id}`}   
                renderItem={produtoRender}   
            />
        </>
    )
}