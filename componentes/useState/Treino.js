import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function(){
    const[name, setName] = useState('shaun'); //valor inicial do useState
    const[person, setPerson] = useState({name: 'mario', age: 40});

    const clickHandler = () => {
        setName('Chun-li') //funcao onde muda o estado
    }
    //amanha testar com input para ver se entendi
    return(
        <View> 
            <Text>
                my name is {name}
            </Text>
             <Text>
                my name is {person.name} and my age is {person.age}
            </Text>
            <Button title='update state' onPress={clickHandler}/> 
        </View>        
    );
}