// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Mega from './componentes/mega/Mega';
// import FlexboxV4 from './componentes/layout/FlexboxV4';
// import DigiteSeuNome from './componentes/DigiteSeuNome';
// import ListaProdutos from './componentes/produtos/ListaProdutos';
// import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2';
// import Contador from './componentes/Contador';
// import Pai from './componentes/direta/Pai';
// import Pai from './componentes/indireta/Pai';
// import ContadorV2 from './componentes/contador/ContadorV2';
// import Treino from './componentes/useState/Treino';
// import Botao from './componentes/Botao';
// import MinMax from './componentes/MinMax';
// import NumAleatorio from './componentes/NumAleatorio';
// import Titulo from './componentes/Titulo';
//import {Text} from 'react-native'
// import Parimpar from './componentes/Parimpar';
// import Familia from './componentes/relacao/Familia';
// import Membro from './componentes/relacao/Membro';
// import UsuarioLogado from './componentes/UsuarioLogado';



/*function App(){

}
export default App*/

/*const App = function(){
  return <text>primeiro componente</text>

}
export default App*/ //qual a diferenca?

/*export default function(){ 
  return <text>primeiro componente</text>
}*/

//export default () => <Text>Open up App.js to start working on your app!</Text> tipo funcional de funcao

// import Primeiro from './componentes/primeiro'
// import CompPadrao, { Comp1, Comp2} from './componentes/multi'


export default () => (
  <SafeAreaView style={styles.App}>
    <Mega qtdeNumeros={7}/>
    {/* <FlexboxV4/> */}
    {/* <DigiteSeuNome/> */}
    {/* <ListaProdutos/> */}
    {/* <ListaProdutosV2/> */}
    {/* <UsuarioLogado usuario={{nome: 'gui', email: 'gui@gmail.com'}}/> */}
    {/* <UsuarioLogado usuario={null}/>
    <UsuarioLogado usuario={{}}/> */}
    {/* <UsuarioLogado usuario={{nome: 'ana'}}/>
    <UsuarioLogado usuario={{email: 'roberto@gmail.com'}}/> nulo ou vazio da erro */}

    {/* <Familia>
      <Membro nome="Bia" sobrenome="Arruda"/>
      <Membro nome="Carlos" sobrenome="Arruda"/>
    </Familia>
    <Familia>
      <Membro nome="Ana" sobrenome="Viera"/>
      <Membro nome="Pedro" sobrenome="Viera"/>
    </Familia> */}
    {/* <Parimpar num={12}/> */}
    {/* <ContadorV2/> */}
    {/* <Treino/> */}
    {/* <Pai/> */}
    {/* <Contador inicial={100} passo={13}/>
    <Contador /> */}
    {/* <Botao/> */}
    {/* <Titulo principal = "Cadastro"
    secundario = "Tela de Cadastro"/> */}
    {/* <Text>{1+1}</Text> */}
    {/* <MinMax min = {3} max = {20}/> 
    <MinMax min = {1} max = {94}/>  */}
    {/* <NumAleatorio ini={1} fin={60}/> */}
    {/* <CompPadrao/>
    <Comp1/>
    <Comp2/>
    <Primeiro/> */}
  </SafeAreaView>
)

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
