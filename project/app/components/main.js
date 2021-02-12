import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, TouchableHighlight, Button, Image, ImageBackground, Platform, StatusBar, Dimensions, CheckBox} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {Drawer, Container, Header, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DoubleClick from 'rn-double-click';
import PinchZoomView from 'react-native-pinch-zoom-view';
import renderIf from 'render-if';
import { width, height, totalSize } from 'react-native-dimension';
import Swiper from 'react-native-swiper';
import { Font } from 'expo';







const Map = require('../../maps/MainMap.jpeg');
const Rios = require('../../maps/Rios.jpeg');
const Relevo  = require('../../maps/Relevo.jpeg');
const Vegetacao = require('../../maps/Vegetacao.jpeg');
const Climas = require('../../maps/Climas.jpeg');
const Equatorial = require('../../imagens/equatorial.gif');
const Subtropical = require('../../imagens/subtropical.gif');
const Tropical = require('../../imagens/tropical.gif');
const TropicalAltitude = require('../../imagens/tropicalaltitude.gif');
const SemiArido = require('../../imagens/semiarido.gif');
const TropicalAtlantico = require('../../imagens/tropicalA.jpg');
const Map1500 = require('../../maps/1500.jpeg');
const Map1532 = require('../../maps/1532.jpeg');
const Map1599 = require('../../maps/1599.jpeg');
const Map1654 = require('../../maps/1654.jpeg');
const Map1698 = require('../../maps/1698.jpeg');
const Map1765 = require('../../maps/1765.jpeg');
const Map1808 = require('../../maps/1808.jpeg');
const Globo = require('../../imagens/globo.jpeg');
const Perg = require('../../imagens/perg.jpeg');
var imgSource = Map;
var questions = 0;





class V6 extends React.Component {

  render() {
    return (
        <ScrollView style={styles.divV1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaV6}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleVeg}>Pampa</Text>
          <Text style={styles.conteudoC1f}>•Formado basicamente por gramíneas e espécies vegetais de pequeno porte</Text>
          <Text style={styles.conteudoC1}>•A fauna e a flora do pampa são bastante diversificadas</Text>
          <Text style={styles.conteudoC1}>•Não depende de grande quantidade de chuvas</Text>
          <Text style={styles.conteudoC1}>•A região, principalmente no Rio Grande do Sul, é muito utilizada para a pastagem de gado</Text>
          <Text style={styles.conteudoC1}><Text style={styles.cNegrito}>Devastação:</Text> De acordo com dados de 2009, 54,2% da área nativa dos Pampas já havia sido desmatada.</Text>



        </ScrollView>
    )
  }
}




class V5 extends React.Component {

  render() {
    return (
        <ScrollView style={styles.divV1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaV5}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleVeg}>Pantanal</Text>
          <Text style={styles.conteudoC1f}>•É a maior área inundável do planeta</Text>
          <Text style={styles.conteudoC1}>•É considerada a zona com maior concentração de animais por quilômetro quadrado das Américas</Text>
          <Text style={styles.conteudoC1}>•Apresenta uma vegetação muito variada</Text>
          <Text style={styles.conteudoC1}>•Nos terrenos mais altos e mais secos, o solo é arenoso e ácido</Text>
          <Text style={styles.conteudoC1}>•A região é sempre alagada nos meses de chuva</Text>
          <Text style={styles.conteudoC1}><Text style={styles.cNegrito}>Devastação:</Text> Cerca de 18% do Pantanal já foi desmatado.</Text>



        </ScrollView>
    )
  }
}




class VegObs extends React.Component {

  render() {
    return (
      <ScrollView style={styles.divRLObs}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaVegObs}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Observações</Text>
          <Text style={styles.conteudoRObs}>Perceba que apesar de terem solos pobres, muitos dos biomas brasileiros apresentam grande biodiversidade.</Text>
          <Text style={styles.conteudoRObs}>Perceba que nas regiões que são mais habitadas hoje em dia o desmatamento das vegetações nativas é maior.</Text>
          <Text style={styles.conteudoRObs}>Perceba que em regiões mais secas, a vegetação é de menor porte se comparada a regiões úmidas.</Text>
          <Text style={styles.conteudoRVObs}>É sempre importante lembrar que as vegetações dependem diretamente dos climas.</Text>

      </ScrollView>
    )
  }
}




class V4 extends React.Component {

  render() {
    return (
        <ScrollView style={styles.divV1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaV4}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleVeg}>Mata Atlântica</Text>
          <Text style={styles.conteudoC1f}>•Presença de árvores de médio e grande porte, formando uma floresta fechada e densa</Text>
          <Text style={styles.conteudoC1}>•Comparada com a Floresta Amazônica, a Mata Atlântica apresenta, proporcionalmente, maior diversidade biológica</Text>
          <Text style={styles.conteudoC1}>•Os solos da Mata Atlântica são pobres, uma vez que são pouco iluminados</Text>
          <Text style={styles.conteudoC1}><Text style={styles.cNegrito}>Devastação:</Text> É o bioma brasileiro mais devastado, cerca de 93% da Mata Atlântica original não existe mais.</Text>



        </ScrollView>
    )
  }
}



class V3 extends React.Component {

  render() {
    return (
        <ScrollView style={styles.divV1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaV3}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleVeg}>Caatinga</Text>
          <Text style={styles.conteudoC1f}>•Grande presença de arbustos com galhos retorcidos e raízes profundas, para captar a água do solo pobre</Text>
          <Text style={styles.conteudoC1}>•As folhas deste tipo de vegetação são de tamanho pequeno, muitas vezes espinhos</Text>
          <Text style={styles.conteudoC1}>•Presença de cactos e bromélias</Text>
          <Text style={styles.conteudoC1}>•Seu solo apresenta baixa fertilidade, além de ser pedregoso</Text>
          <Text style={styles.conteudoC1}><Text style={styles.cNegrito}>Devastação:</Text> De acordo com dados de 2009, a caatinga havia sofrido desmatamento de 46,6% de sua vegetação nativa.</Text>



        </ScrollView>
    )
  }
}



class V2 extends React.Component {

  render() {
    return (
        <ScrollView style={styles.divV1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaV2}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleVeg}>Cerrado</Text>
          <Text style={styles.conteudoC1f}>•Presença marcante de árvores de galhos tortuosos e de pequeno porte</Text>
          <Text style={styles.conteudoC1}>•O solo do cerrado apresenta cor avermelhada, é ácido, e pobre em nutrientes</Text>
          <Text style={styles.conteudoC1}>•As folhas são cobertas de pelos</Text>
          <Text style={styles.conteudoC1}>•O cerrado brasileiro tem na sua fauna cerca de 2500 espécies diferentes</Text>
          <Text style={styles.conteudoC1}><Text style={styles.cNegrito}>Devastação:</Text> De acordo com dados de 2010, 49,1% da vegetação nativa do cerrado já havia sido desmatada.</Text>



        </ScrollView>
    )
  }
}



class V1 extends React.Component {

  render() {
    return (
        <ScrollView style={styles.divV1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaV1}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleVeg}>Amazônica</Text>
          <Text style={styles.conteudoC1f}>•Sua vegetação é densa e formada por árvores de grande porte</Text>
          <Text style={styles.conteudoC1}>•É considerada a maior floresta tropical do mundo</Text>
          <Text style={styles.conteudoC1}>•É a maior reserva de biodiversidade do planeta</Text>
          <Text style={styles.conteudoC1}>•É o maior bioma brasileiro</Text>
          <Text style={styles.conteudoC1}>•Seu solo é, em geral, bastante arenoso</Text>
          <Text style={styles.conteudoC1}><Text style={styles.cNegrito}>Devastação:</Text> Mesmo sendo o nosso bioma mais preservado, cerca de 16% de sua área já foi devastada.</Text>



        </ScrollView>
    )
  }
}




class PopVeg extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        popV1: false,
        popV2: false,
        popV3: false,
        popV4: false,
        popV5: false,
        popV6: false,
        popVegObs: false,
    };
  }


  toggleV1 = () => {
    const { popV1 } = this.state;
    this.setState( { popV1: !popV1 })
  }

  toggleV2 = () => {
    const { popV2 } = this.state;
    this.setState( { popV2: !popV2 })
  }

  toggleV3 = () => {
    const { popV3 } = this.state;
    this.setState( { popV3: !popV3 })
  }

  toggleV4 = () => {
    const { popV4 } = this.state;
    this.setState( { popV4: !popV4 })
  }

  toggleVegObs = () => {
    const { popVegObs } = this.state;
    this.setState( { popVegObs: !popVegObs })
  }

  toggleV5 = () => {
    const { popV5 } = this.state;
    this.setState( { popV5: !popV5 })
  }

  toggleV6 = () => {
    const { popV6 } = this.state;
    this.setState( { popV6: !popV6 })
  }



  render() {
    return (
      <View>

      <View style={styles.divTitulov}>
        <Text style={styles.titulo}>Vegetação</Text>
      </View>


        <TouchableOpacity style={styles.popUpV1}
        onPress={this.toggleV1}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popV1 && <V1 sumaV1={this.toggleV1}/>}


        <TouchableOpacity style={styles.popUpV2}
        onPress={this.toggleV2}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popV2 && <V2 sumaV2={this.toggleV2}/>}


        <TouchableOpacity style={styles.popUpV3}
        onPress={this.toggleV3}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popV3 && <V3 sumaV3={this.toggleV3}/>}


        <TouchableOpacity style={styles.popUpV4}
        onPress={this.toggleV4}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popV4 && <V4 sumaV4={this.toggleV4}/>}


        <TouchableOpacity style={styles.popUpVegObs}
        onPress={this.toggleVegObs}
        ><Text style={styles.ObsRios}>Observações</Text></TouchableOpacity>
        {this.state.popVegObs && <VegObs sumaVegObs={this.toggleVegObs}/>}


        <TouchableOpacity style={styles.popUpV5}
        onPress={this.toggleV5}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popV5 && <V5 sumaV5={this.toggleV5}/>}


        <TouchableOpacity style={styles.popUpV6}
        onPress={this.toggleV6}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popV6 && <V6 sumaV6={this.toggleV6}/>}

      </View>
    )
  }
}













class Climo6 extends React.Component {
  render() {
    return (
        <View style={styles.divClimo}>


          <TouchableOpacity style={styles.sumirClimo}
          onPress={this.props.ativClimo6}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>


          <Image source={TropicalAtlantico} style={styles.imgClimograma1}/>

        </View>
    )
  }
}




class C6 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        climograma6: false,
    };
  }

  ativClimo6 = () => {
    const { climograma6 } = this.state;
    this.setState( { climograma6: !climograma6})
  }

  render() {
    return (
        <View style={styles.divC1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaC6}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleClima}>Tropical Atlântico</Text>
          <Text style={styles.conteudoC1f}>•Também é chamado de tropical úmido</Text>
          <Text style={styles.conteudoC1}>•Elevado teor de umidade</Text>
          <Text style={styles.conteudoC1}>•Alto índice pluviométrico</Text>
          <Text style={styles.conteudoC1}>•Temperaturas médias anuais em torno de 25°C</Text>
          <Text style={styles.conteudoC1}>•Baixa amplitude térmica anual </Text>
          <Text style={styles.conteudoC1}>Clique <Text style={styles.climograma} onPress={this.ativClimo6}>aqui</Text> para ver o climograma da cidade de João Pessoa, localizada na Paraíba, e que possui clima tropical atlântico.</Text>
          {this.state.climograma6 && <Climo6 ativClimo6={this.ativClimo6}/>}



        </View>
    )
  }
}






class Climo5 extends React.Component {
  render() {
    return (
        <View style={styles.divClimo}>


          <TouchableOpacity style={styles.sumirClimo}
          onPress={this.props.ativClimo5}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>


          <Image source={SemiArido} style={styles.imgClimograma}/>

        </View>
    )
  }
}




class C5 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        climograma5: false,
    };
  }

  ativClimo5 = () => {
    const { climograma5 } = this.state;
    this.setState( { climograma5: !climograma5})
  }

  render() {
    return (
        <View style={styles.divC1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaC5}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleClima}>Semiárido</Text>
          <Text style={styles.conteudoC1f}>•Temperaturas elevadas durante todo o ano</Text>
          <Text style={styles.conteudoC1}>•Baixo índice pluviométrico</Text>
          <Text style={styles.conteudoC1}>•Baixa amplitude térmica anual</Text>
          <Text style={styles.conteudoC1}>•Baixa umidade relativa do ar</Text>
          <Text style={styles.conteudoC1}>•Chuvas escassas e irregulares ao longo do ano</Text>
          <Text style={styles.conteudoC1}>Clique <Text style={styles.climograma} onPress={this.ativClimo5}>aqui</Text> para ver o climograma da cidade de Juazeiro, localizada na Bahia, e que possui clima semiárido.</Text>
          {this.state.climograma5 && <Climo5 ativClimo5={this.ativClimo5}/>}



        </View>
    )
  }
}






class Climo4 extends React.Component {
  render() {
    return (
        <View style={styles.divClimo}>


          <TouchableOpacity style={styles.sumirClimo}
          onPress={this.props.ativClimo4}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>


          <Image source={TropicalAltitude} style={styles.imgClimograma}/>

        </View>
    )
  }
}





class C4 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        climograma4: false,
    };
  }

  ativClimo4 = () => {
    const { climograma4 } = this.state;
    this.setState( { climograma4: !climograma4})
  }

  render() {
    return (
        <View style={styles.divC1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaC4}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleClima}>Tropical de altitude</Text>
          <Text style={styles.conteudoC1f}>•Temperaturas semelhantes às do clima subtropical</Text>
          <Text style={styles.conteudoC1}>•Entrada de frentes frias no inverno podem provocar geadas</Text>
          <Text style={styles.conteudoC1}>•Chuvas concentradas no verão</Text>
          <Text style={styles.conteudoC1}>•Amplitude térmica anual entre 7°C e 9°C</Text>
          <Text style={styles.conteudoC1}>Clique <Text style={styles.climograma} onPress={this.ativClimo4}>aqui</Text> para ver o climograma da cidade de Ouro Preto, localizada em Minas Gerais, e que possui clima tropical de altitude.</Text>
          {this.state.climograma4 && <Climo4 ativClimo4={this.ativClimo4}/>}



        </View>
    )
  }
}







class Climo3 extends React.Component {
  render() {
    return (
        <View style={styles.divClimo}>


          <TouchableOpacity style={styles.sumirClimo}
          onPress={this.props.ativClimo3}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>


          <Image source={Tropical} style={styles.imgClimograma}/>

        </View>
    )
  }
}



class C3 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        climograma3: false,
    };
  }

  ativClimo3 = () => {
    const { climograma3 } = this.state;
    this.setState( { climograma3: !climograma3})
  }

  render() {
    return (
        <View style={styles.divC1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaC3}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleClima}>Tropical</Text>
          <Text style={styles.conteudoC1f}>•Dividido entre duas estações: seca e úmida, que correspondem a inverno e verão, respectivamente</Text>
          <Text style={styles.conteudoC1}>•Temperaturas médias anuais elevadas</Text>
          <Text style={styles.conteudoC1}>•Baixa amplitude térmica anual</Text>
          <Text style={styles.conteudoC1}>Clique <Text style={styles.climograma} onPress={this.ativClimo3}>aqui</Text> para ver o climograma da cidade de Cuiabá, localizada no Mato Grosso, e que possui clima tropical.</Text>
          {this.state.climograma3 && <Climo3 ativClimo3={this.ativClimo3}/>}



        </View>
    )
  }
}














class Climo2 extends React.Component {
  render() {
    return (
        <View style={styles.divClimo}>


          <TouchableOpacity style={styles.sumirClimo}
          onPress={this.props.ativClimo2}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>


          <Image source={Subtropical} style={styles.imgClimograma}/>

        </View>
    )
  }
}





class C2 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        climograma2: false,
    };
  }

  ativClimo2 = () => {
    const { climograma2 } = this.state;
    this.setState( { climograma2: !climograma2})
  }

  render() {
    return (
        <View style={styles.divC1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaC2}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleClima}>Subtropical</Text>
          <Text style={styles.conteudoC1f}>•Índice pluviométrico moderado</Text>
          <Text style={styles.conteudoC1}>•Quatro estações bem definidas</Text>
          <Text style={styles.conteudoC1}>•Verão curto com temperaturas altas e inverno rigoroso</Text>
          <Text style={styles.conteudoC1}>•Chuvas bem distribuídas durante o ano</Text>
          <Text style={styles.conteudoC1}>Clique <Text style={styles.climograma} onPress={this.ativClimo2}>aqui</Text> para ver o climograma da cidade de Blumenau, localizada em Santa Catarina, e que possui clima subtropical.</Text>
          {this.state.climograma2 && <Climo2 ativClimo2={this.ativClimo2}/>}



        </View>
    )
  }
}










class Climo1 extends React.Component {
  render() {
    return (
        <View style={styles.divClimo}>


          <TouchableOpacity style={styles.sumirClimo}
          onPress={this.props.ativClimo1}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>


          <Image source={Equatorial} style={styles.imgClimograma}/>

        </View>
    )
  }
}




class C1 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        climograma1: false,
    };
  }

  ativClimo1 = () => {
    const { climograma1 } = this.state;
    this.setState( { climograma1: !climograma1})
  }

  render() {
    return (
        <View style={styles.divC1}>

          <TouchableOpacity style={styles.sumirR1}
          onPress={this.props.sumaC1}
          ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleCarac}>Características</Text>
          <Text style={styles.titleClima}>Equatorial</Text>
          <Text style={styles.conteudoC1f}>•Temperaturas altas durante todo o ano</Text>
          <Text style={styles.conteudoC1}>•Baixa amplitude térmica anual</Text>
          <Text style={styles.conteudoC1}>•Média pluviométrica anual alta</Text>
          <Text style={styles.conteudoC1}>•Umidade relativa do ar elevada</Text>
          <Text style={styles.conteudoC1}>Clique <Text style={styles.climograma} onPress={this.ativClimo1}>aqui</Text> para ver o climograma da cidade de Manaus, localizada no Amazonas, e que possui clima equatorial.</Text>
          {this.state.climograma1 && <Climo1 ativClimo1={this.ativClimo1}/>}



        </View>
    )
  }
}





class ClimasObs extends React.Component {

  render() {
    return (
      <View style={styles.divRLObs}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaCObs}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Observações</Text>
          <Text style={styles.conteudoRObs}>Ao analisarmos os climogramas de cada clima (que podem ser acessados através dos botões "i" no mapa), podemos perceber que, normalmente, em regiões litorâneas, a pluviosidade ao longo do ano é maior que em regiões do interior clima similar.</Text>
          <Text style={styles.conteudoRObs}>Perceba que na região onde está localizada a Floresta Amazônica há predominância do clima equatorial, cuja alta pluviosidade permitiu o desenvolvimento da mesma ao longo dos séculos.</Text>


      </View>
    )
  }
}





class PopClimas extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
        popCObs: false,
        popC1: false,
        popC2: false,
        popC3: false,
        popC4: false,
        popC5: false,
        popC6: false,
    };
  }


  toggleClimasObs = () => {
    const { popCObs } = this.state;
    this.setState( { popCObs: !popCObs })
  }

  toggleC1 = () => {
    const { popC1 } = this.state;
    this.setState( { popC1: !popC1 })
  }

  toggleC2 = () => {
    const { popC2 } = this.state;
    this.setState( { popC2: !popC2 })
  }

  toggleC3 = () => {
    const { popC3 } = this.state;
    this.setState( { popC3: !popC3 })
  }

  toggleC4 = () => {
    const { popC4 } = this.state;
    this.setState( { popC4: !popC4 })
  }

  toggleC5 = () => {
    const { popC5 } = this.state;
    this.setState( { popC5: !popC5 })
  }

  toggleC6 = () => {
    const { popC6 } = this.state;
    this.setState( { popC6: !popC6 })
  }

  render() {
    return (
      <View>

      <View style={styles.divTituloc}>
        <Text style={styles.titulo}>Climas</Text>
      </View>


        <TouchableOpacity style={styles.popUpRelevoObs}
        onPress={this.toggleClimasObs}
        ><Text style={styles.ObsRios}>Observações</Text></TouchableOpacity>
        {this.state.popCObs && <ClimasObs sumaCObs={this.toggleClimasObs}/>}


        <TouchableOpacity style={styles.popUpC1}
        onPress={this.toggleC1}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popC1 && <C1 sumaC1={this.toggleC1}/>}


        <TouchableOpacity style={styles.popUpC2}
        onPress={this.toggleC2}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popC2 && <C2 sumaC2={this.toggleC2}/>}


        <TouchableOpacity style={styles.popUpC3}
        onPress={this.toggleC3}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popC3 && <C3 sumaC3={this.toggleC3}/>}


        <TouchableOpacity style={styles.popUpC4}
        onPress={this.toggleC4}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popC4 && <C4 sumaC4={this.toggleC4}/>}


        <TouchableOpacity style={styles.popUpC5}
        onPress={this.toggleC5}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popC5 && <C5 sumaC5={this.toggleC5}/>}


        <TouchableOpacity style={styles.popUpC6}
        onPress={this.toggleC6}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popC6 && <C6 sumaC6={this.toggleC6}/>}



      </View>
    )
  }
}


















class RL5 extends React.Component {
  render() {
    return (
        <View style={styles.divRL5}>

        <TouchableOpacity style={styles.sumirRL}
        onPress={this.props.sumirRL5}
        ><Text style={styles.sumirxRL}>X</Text></TouchableOpacity>

        <Text style={styles.rlTexto}>
          Planalto das Guianas
        </Text>


        </View>
    )
  }
}



class RL4 extends React.Component {
  render() {
    return (
        <View style={styles.divRL4}>

        <TouchableOpacity style={styles.sumirRL2}
        onPress={this.props.sumirRL4}
        ><Text style={styles.sumirxRL}>X</Text></TouchableOpacity>

        <Text style={styles.rlTexto}>
          Planalto Central
        </Text>


        </View>
    )
  }
}





class RL3 extends React.Component {
  render() {
    return (
        <View style={styles.divRL3}>

        <TouchableOpacity style={styles.sumirRL}
        onPress={this.props.sumirRL3}
        ><Text style={styles.sumirxRL}>X</Text></TouchableOpacity>

        <Text style={styles.rlTexto}>
          Planalto Meridional
        </Text>


        </View>
    )
  }
}




class RL2 extends React.Component {
  render() {
    return (

        <View style={styles.divRL2}>

        <TouchableOpacity style={styles.sumirRL}
        onPress={this.props.sumirRL2}
        ><Text style={styles.sumirxRL}>X</Text></TouchableOpacity>

        <Text style={styles.rlTexto}>
          Planície Amazônica
        </Text>


        </View>

    )
  }
}




class RL1 extends React.Component {
  render() {
    return (

        <View style={styles.divRL1}>

        <TouchableOpacity style={styles.sumirRL}
        onPress={this.props.sumirRL1}
        ><Text style={styles.sumirxRL}>X</Text></TouchableOpacity>

        <Text style={styles.rlTexto}>
          Planície do Pantanal
        </Text>

        </View>

    )
  }
}




class RelevoObs extends React.Component {
  render() {
    return (
      <View style={styles.divRLObs}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaRLObs}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Observações</Text>
          <Text style={styles.conteudoRObs}>Perceba que em aréas litorâneas predomina, normalmente, o relevo de planícies, e em alguns casos as depressões.</Text>
          <Text style={styles.conteudoRObs}>Perceba também que a grande planície na região da Amazônia, coincide com o percurso do rio Amazonas.</Text>
          <Text style={styles.conteudoRObs}>Alguns dos relevos mais conhecidos do Brasil estão indicados com um "i", em cima da região onde se localizam, clique nele para ver o nome.</Text>


      </View>
    )
  }
}




class PopRelevo extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    popRL1: false,
    popRLObs: false,
    popRL2: false,
    popRL3: false,
    popRL4: false,
    popRL5: false,
    };
  }


  toggleRL5 = () => {
    const { popRL5 } = this.state;
    this.setState( { popRL5: !popRL5 })
  }

  toggleRL4 = () => {
    const { popRL4 } = this.state;
    this.setState( { popRL4: !popRL4 })
  }

  toggleRL3 = () => {
    const { popRL3 } = this.state;
    this.setState( { popRL3: !popRL3 })
  }

  toggleRL2 = () => {
    const { popRL2 } = this.state;
    this.setState( { popRL2: !popRL2 })
  }


  toggleRL1 = () => {
    const { popRL1 } = this.state;
    this.setState( { popRL1: !popRL1 })
  }

  toggleRelevoObs = () => {
    const { popRLObs } = this.state;
    this.setState( { popRLObs: !popRLObs })
  }


  render() {
    return (
      <View>

        <View style={styles.divTitulorl}>
          <Text style={styles.titulo}>Relevo</Text>
        </View>



        <TouchableOpacity style={styles.popUpRelevoObs}
        onPress={this.toggleRelevoObs}
        ><Text style={styles.ObsRios}>Observações</Text></TouchableOpacity>
        {this.state.popRLObs && <RelevoObs sumaRLObs={this.toggleRelevoObs}/>}



        <TouchableOpacity style={styles.popUpRL1}
        onPress={this.toggleRL1}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popRL1 && <RL1 sumirRL1={this.toggleRL1}/>}



        <TouchableOpacity style={styles.popUpRL2}
        onPress={this.toggleRL2}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popRL2 && <RL2 sumirRL2={this.toggleRL2}/>}


        <TouchableOpacity style={styles.popUpRL3}
        onPress={this.toggleRL3}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popRL3 && <RL3 sumirRL3={this.toggleRL3}/>}


        <TouchableOpacity style={styles.popUpRL4}
        onPress={this.toggleRL4}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popRL4 && <RL4 sumirRL4={this.toggleRL4}/>}


        <TouchableOpacity style={styles.popUpRL5}
        onPress={this.toggleRL5}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popRL5 && <RL5 sumirRL5={this.toggleRL5}/>}

      </View>
    )
  }
}













class R4 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divV1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaR4}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Rio <Text style={styles.titleRios}>Tietê</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Nascente: </Text><Text style={styles.conteudoR1}>Salesópolis, serra do Mar</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Foz: </Text><Text style={styles.conteudoR1}>Lago da barragem de Jupiá, rio Paraná</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Importância: </Text><Text style={styles.conteudoR1}>Suas margens banham 62 municípios ribeirinhos e cruzam a Região Metropolitana de São Paulo. Muitas barcaças fazem o transporte da produção da região através do rio, a um custo menor do que o do transporte rodoviário, e ao longo de sua extensão estão situadas mais de uma dezena de barragens.</Text></Text>
        </ScrollView>
    )
  }
}



class R3 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divV1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaR3}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Rio <Text style={styles.titleRios}>Paraná</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Nascente: </Text><Text style={styles.conteudoR1}>Rio Grande e Rio Paranaíba</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Foz: </Text><Text style={styles.conteudoR1}>Rio da Prata</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Importância: </Text><Text style={styles.conteudoR1}>Importante no transporte hidroviário, comércio e, principalmente, na geração de energia elétrica. Abriga a usina hidrelétrica de Itaipu, a maior do mundo, na divisa do Brasil com o Paraguai, que produz aproximadamente 15% de toda a energia gasta no Brasil além de 90% de toda a energia gasta no Paraguai.</Text></Text>

        </ScrollView>
    )
  }
}



class R2 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divV1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaR2}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Rio <Text style={styles.titleRios}>Amazonas</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Nascente: </Text><Text style={styles.conteudoR1}>Nevado Mismi, Peru</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Foz: </Text><Text style={styles.conteudoR1}>Entre Amapá e Pará, Oceano Atlântico</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Dimensão: </Text><Text style={styles.conteudoR1}>É o maior rio do mundo em volume de água e um dos rios mais extensos do mundo, conta com mais de mil afluentes.</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Importância: </Text><Text style={styles.conteudoR1}>Importante no transporte hidroviário, é fonte de alimento por meio da pesca para a população ribeirinha, além de ter grande potencial para geração de energia elétrica.</Text></Text>
      </ScrollView>
    )
  }
}



class RiosObs extends React.Component {
  render() {
    return (
      <View style={styles.divRObs}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaObs}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Observações</Text>
          <Text style={styles.conteudoRObs}>Perceba que em muitas casos os grandes rios brasileiros coincidem com as fronteiras de estado, ou até mesmo de região. Isso ocorre pois, na maioria das vezes, os própios rios são usados para delimitar essas áreas.</Text>
          <Text style={styles.conteudoRObs}>Para cada um dos rios mais importantes do país separamos algumas informações, que podem ser acessadas ao clicar no botão "i" localizado em cima do rio a ser consultado.</Text>


      </View>
    )
  }
}


class R1 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divV1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Rio <Text style={styles.titleRios}>São Francisco</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Nascente: </Text><Text style={styles.conteudoR1}>Serra da Canastra (MG)</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Foz: </Text><Text style={styles.conteudoR1}>Piaçabuçu (AL), Oceano Atlântico</Text></Text>
          <Text style={styles.nascente}><Text style={styles.subtituloR1}>Importância: </Text><Text style={styles.conteudoR1}>O rio São Francisco é o maior responsável pela prosperidade de suas áreas ribeirinhas, onde cidades experimentaram maior crescimento e progresso como Petrolina em Pernambuco e Juazeiro na Bahia devido a agricultura irrigada. Essa região apresenta-se atualmente como a maior produtora de frutas tropicais do país.</Text></Text>

      </ScrollView>
    )
  }
}


class PopRios extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    popR1: false,
    popRObs: false,
    popR2: false,
    popR3: false,
    popR4: false,
    };
  }

  toggleR1 = () => {
    const { popR1 } = this.state;
    this.setState( { popR1: !popR1 })
  }

  toggleRiosObs = () => {
    const {popRObs} = this.state;
    this.setState({ popRObs: !popRObs })
  }

  toggleR2 = () => {
    const { popR2 } = this.state;
    this.setState( { popR2: !popR2 })
  }

  toggleR3 = () => {
    const { popR3 } = this.state;
    this.setState( { popR3: !popR3 })
  }

  toggleR4 = () => {
    const { popR4 } = this.state;
    this.setState( { popR4: !popR4 })
  }


  render() {
    return (
      <View style={styles.absolute}>
        <View style={styles.divTitulor}>
          <Text style={styles.titulo}>Rios</Text>
        </View>


        <TouchableOpacity style={styles.popUpRiosObs}
        onPress={this.toggleRiosObs}
        ><Text style={styles.ObsRios}>Observações</Text></TouchableOpacity>
        {this.state.popRObs && <RiosObs sumaObs={this.toggleRiosObs}/>}


        <TouchableOpacity style={styles.popUpR1}
        onPress={this.toggleR1}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popR1 && <R1 suma={this.toggleR1}/>}


        <TouchableOpacity style={styles.popUpR2}
        onPress={this.toggleR2}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popR2 && <R2 sumaR2={this.toggleR2}/>}

        <TouchableOpacity style={styles.popUpR3}
        onPress={this.toggleR3}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popR3 && <R3 sumaR3={this.toggleR3}/>}

        <TouchableOpacity style={styles.popUpR4}
        onPress={this.toggleR4}
        ><Text style={styles.izinho}>i</Text></TouchableOpacity>
        {this.state.popR4 && <R4 sumaR4={this.toggleR4}/>}

      </View>
    )
  }
}










class Orient1 extends React.Component {
  render() {
    return (
      <View style={styles.divOrient}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaOrient}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Orientações</Text>
          <Text style={styles.conteudoRObs}>Essa é a área de geografia do nosso aplicativo. Aqui você encontrará os mapas mais relevantes a cerca das condições geográficas brasileiras, todos feitos por nossa própia equipe de desenvolvimento. Para acessá-los, use o botão do menu logo ao lado.</Text>
          <Text style={styles.conteudoRObs}>As principais informações sobre cada mapa podem ser acessadas através de botões "i" de informação localizados espalhados pelo mapa, ou do botão "Observações", localizado no canto inferior central.</Text>



      </View>
    )
  }
}



class OrientGeo extends React.Component {
  constructor ( props ) {
    super (props);
    this.state = {
      popOrient1: false,
    };
  }


  toggleOrient1 = () => {
    const {popOrient1} = this.state;
    this.setState({ popOrient1: !popOrient1 })
  }



  render() {
    return (
      <View>


        <TouchableOpacity style={styles.popUpOrient}
        onPress={this.toggleOrient1}
        ><Text style={styles.txtOrient}>Orientações</Text></TouchableOpacity>
        {this.state.popOrient1 && <Orient1 sumaOrient={this.toggleOrient1}/>}


      </View>
      )
    }
}











class Menuzao extends React.Component {
  render () {
    return (
      <View style={styles.divMenu}>

        <TouchableOpacity style={styles.buttonVazio}
        onPress={this.props.carVazio}
        ><Text style={styles.textoMenu}>Vazio</Text></TouchableOpacity>

        <TouchableOpacity style={styles.buttonRios}
        onPress={this.props.carRios}
        ><Text style={styles.textoMenu}>Rios</Text></TouchableOpacity>

        <TouchableOpacity style={styles.buttonRelevo}
        onPress={this.props.carRelevo}
        ><Text style={styles.textoMenu}>Relevo</Text></TouchableOpacity>

        <TouchableOpacity style={styles.buttonVeget}
        onPress={this.props.carVegetacao}
        ><Text style={styles.textoMenu}>Vegetação</Text></TouchableOpacity>

        <TouchableOpacity style={styles.buttonClima}
        onPress={this.props.carClimas}
        ><Text style={styles.textoMenu}>Climas</Text></TouchableOpacity>

      </View>

    )
  }
}



class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 27,
      padding: 26,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'Selecione a matéria'
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../maps/MainMap.jpeg')} style={styles.MainMap}>
          <TouchableOpacity style={styles.button}
          onPress={
            () => this.props.navigation.navigate('Geo')
          }
          ><Text style={styles.textoBotao}>Geografia</Text></TouchableOpacity>

          <TouchableOpacity style={styles.button2}
          onPress={
            () => this.props.navigation.navigate('Hist')
          }
          ><Text style={styles.textoBotao}>História</Text></TouchableOpacity>

        </ImageBackground>

        <TouchableOpacity style={styles.button3}
        onPress={
          () => this.props.navigation.navigate('Quest')
        }
        ><Text style={styles.textoBotao}>Questões</Text></TouchableOpacity>
      </View>
    );
  }
}






class Geografia extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 27,
      padding: 26,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'GEOGRAFIA',
  };

  constructor ( props ) {
    super (props);
    this.state = { show: false,

    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.state = {
      showRelevo: false,
      showRios: false,
      showMap: true,
      showVegetacao: false,
      showClimas: false,
    };
    imgSource = this.state.showMap? Map : Map
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState( { show: !show })
  }


  loadClimas = () => {
      this.setState ({
        showMap: false,
        showClimas: true,
      })
      imgSource = Climas
  }


  loadVegetacao = () => {
      this.setState ({
        showMap: false,
        showVegetacao: true,
      })
      imgSource = Vegetacao
  }

  loadRelevo = () => {
      this.setState ({
        showMap: false,
        showRelevo: true,
      })
      imgSource = Relevo
  }

  loadRios = () => {
      this.setState ({
        showMap: false,
        showRios: true,
      })
      imgSource = Rios
  }

  loadMap = () => {
    this.setState ({
      showMap: true,
    })
    imgSource = Map
  }


  render() {

    return (
         <View style={styles.container}>
            <ImageBackground source={imgSource}
             style={styles.MainMap}>

              <TouchableOpacity style={styles.menu} onPress={this.toggleDiv}>
                <Image source={require('../../imagens/menu.png')}
                  style={styles.Imenu}></Image></TouchableOpacity>
                  {this.state.show && <Menuzao carRios={this.loadRios} carVazio={this.loadMap} carRelevo={this.loadRelevo} carVegetacao={this.loadVegetacao} carClimas={this.loadClimas}/>}


                  {renderIf(imgSource === Rios)(
                      <PopRios />
                  )}

                  {renderIf(imgSource === Relevo)(
                      <PopRelevo />
                  )}

                  {renderIf(imgSource === Climas)(
                      <PopClimas />
                  )}

                  {renderIf(imgSource === Map)(
                      <OrientGeo />
                  )}

                  {renderIf(imgSource === Vegetacao)(
                      <PopVeg />
                  )}

            </ImageBackground>

          </View>
    );
  }
}
















class H76 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma76}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Conjuração Baiana</Text>
          <Text style={styles.conteudoH}>Também conhecida como Revolta dos Alfaiates, a Conjuração Baiana foi uma revolta social de caráter popular, que ocorreu na Bahia em 1798. Recebeu uma importante influência dos ideais iluministas da Revolução Francesa.</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Causas:</Text> Insatisfação popular com o elevado preço cobrado e escassez dos produtos essenciais, entre eles os alimentos. Além de forte insatisfação com o domínio de Portugal sobre o Brasil. O ideal de independência estava presente em vários setores da sociedade baiana.</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Revoltosos:</Text> O movimento contou com a participação de pessoas pobres, letrados, padres, pequenos comerciantes, alguns soldados, escravos e ex-escravos.</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Objetivos:</Text> Assim como na Inconfidência Mineira, defendiam liberdade comercial no mercado interno e também no comércio exterior, e o fim do pacto colonial com Portugal. Entretanto queriam uma implantação da república em todo o Brasil, diferentemente da Inconfidência Mineira, que era separatista.</Text>
          <Text style={styles.conteudoH}>A revolta estava marcada, porém um dos integrantes do movimento, o ferreiro José da Veiga, delatou o movimento para o governador, relatando o dia e a hora em que aconteceria. O governo baiano organizou as forças militares para acabar com o movimento, antes que a revolta ocorresse. Vários revoltosos foram presos. Muitos foram expulsos do Brasil, e quatro foram executados na Praça da Piedade em Salvador.</Text>


      </ScrollView>
    )
  }
}


class H75 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma75}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Indústrias</Text>
          <Text style={styles.conteudoH}>Em 1785, através de um alvará, a Rainha D. Maria I proibiu o estabelecimento de fábricas e manufaturas no Brasil. A indústria têxtil ficou restrita às fazendas de algodão.</Text>
          <Text style={styles.conteudoH}>Com o esgotamento das minas de ouro, a proibição das manufaturas contribuiu para que as pessoas que dependiam da extração de ouro, já escasso nessa época, não tivessem muitas opções de trabalho, portanto contribuiu para a pobreza da população nessa época.</Text>
          <Text style={styles.conteudoH}>A indústria no Brasil foi restabelecida apenas em 1808, quando o Príncipe D. João autorizou uma fábrica de vidros na Bahia. O alvará foi anulado oficialmente em 1º de abril de 1808.</Text>


      </ScrollView>
    )
  }
}


class H74 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma74}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeriI}>Inconfidência Mineira</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Causas:</Text> A queda da produção de ouro que passou a ocorrer a partir de 1760, se agravava a cada ano, acentuando a pobreza da população. A não diminuição do imposto de 100 arrobas de ouro estipulado pela coroa, e a ameaça do decretamento da derrama, assim confiscando bens e objetos das pessoas.</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Líderes:</Text> Os líderes, chamados de inconfidentes, eram, em sua maioria, grandes proprietários ou mineradores, padres e letrados. O mais popular entre os conspiradores é Joaquim José da Silva Xavier, chamado de Tiradentes, que era filho de um pequeno fazendeiro. Era dotado de grandes habilidades e ganhou a vida como militar, dentista, tropeiro e comerciante.</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Objetivos:</Text> Os principais objetivos eram acabar com o monopólio comercial português, além de romper por completo com Portugal politicamente, criando um novo país cuja capital seria São João del Rei.</Text>
          <Text style={styles.conteudoH}>A revolta deveria ter início no dia da derrama, que o governo programara para 1788 e acabou suspendendo quando soube da conjuração. Os planos dos inconfidentes foram frustrados pois três participantes da conspiração procuraram o governador, Visconde de Barbacena, para delatar o movimento. Após três anos sendo processado, todos os participantes foram perdoados ou condenados ao degredo. Somente Tiradentes foi condenado à morte e executado no dia 21 de abril de 1792, no campo de São Domingos, no Rio de Janeiro.</Text>


      </ScrollView>
    )
  }
}


class H73 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma73}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Derrama</Text>
          <Text style={styles.conteudoH}>Citamos brevemente a derrama no último mapa, entretanto agora vamos aprender mais sobre esse imposto, por que foi criado, e suas consequências.</Text>
          <Text style={styles.conteudoH}>A derrama era um dispositivo fiscal aplicado em Minas Gerais a fim de assegurar o teto de cem arrobas anuais na arrecadação do quinto, que consistia em confiscar bens e objetos de ouro até que a meta de 100 arrobas fosse atingida. Entretanto, mesmo com o valor arrecadado em muitos casos sendo inferior a 100 arrobas, ainda assim a derrama não acontecia.</Text>
          <Text style={styles.conteudoH}>Na verdade, ocorreu apenas uma Derrama promovida pelo governador de Minas Gerais Luís Diogo Lobo da Silva em 1763/1764. Nos outros casos os "homens-bons" (pessoas que deviam pagar a quantia) sempre enrolavam, adiavam e repactuavam o pagamento da mesma.</Text>
          <Text style={styles.conteudoH}>A partir de 1787-1788, a corrupção dos governantes da Capitania de Minas Gerais, aliada aos boatos de que a Derrama, agora, sem escapatória, iria ser implementada, levou à Inconfidência Mineira.</Text>


      </ScrollView>
    )
  }
}


class H72 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma72}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Fim do ouro</Text>
          <Text style={styles.conteudoH}>Como já dissemos anteriormente, o ouro se tornou a principal atividade econômica brasileira e atraiu muitas pessoas para a região das minas para trabalharem na extração.</Text>
          <Text style={styles.conteudoH}>Com tanto garimpo as minas não demoraram a se esgotar, a maioria delas já estavam completamentes esgotadas em aproximadamente 1785.</Text>
          <Text style={styles.conteudoH}>Parte da população que vivia do garimpo se deslocou ao Planalto Central do Brasil para trabalhar em fazendas de gado, começaram as primeiras plantações de café do Vale do Paraíba Fluminense. Aqueles que ficaram em Minas Gerais passaram também a dedicar-se à agricultura. Nessa época, houve um impulso para a cultura do algodão. A cultura da cana-de-açúcar, que não fora totalmente abandonada durante o ciclo da mineração, ganhou novo impulso.</Text>


      </ScrollView>
    )
  }
}


class HR7 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    pop72: false,
    pop73: false,
    pop74: false,
    pop75: false,
    pop76: false,
    };
  }

  toggle72 = () => {
      const { pop72 } = this.state;
      this.setState( { pop72: !pop72 })
  }

  toggle73 = () => {
      const { pop73 } = this.state;
      this.setState( { pop73: !pop73 })
  }

  toggle74 = () => {
      const { pop74 } = this.state;
      this.setState( { pop74: !pop74 })
  }

  toggle75 = () => {
      const { pop75 } = this.state;
      this.setState( { pop75: !pop75 })
  }

  toggle76 = () => {
      const { pop76 } = this.state;
      this.setState( { pop76: !pop76 })
  }

  render() {
    return (
      <View style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaHR7}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Resumo <Text style={styles.corPeriodo}>1751 - 1808</Text></Text>

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle72}><Text style={styles.txtButResumo}>Fim do ouro</Text></TouchableOpacity>
          {this.state.pop72 && <H72 suma72={this.toggle72}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle73}><Text style={styles.txtButResumo}>Derrama</Text></TouchableOpacity>
          {this.state.pop73 && <H73 suma73={this.toggle73}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle74}><Text style={styles.txtButResumoI}>Inconfidência Mineira</Text></TouchableOpacity>
          {this.state.pop74 && <H74 suma74={this.toggle74}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle75}><Text style={styles.txtButResumo}>Indústrias</Text></TouchableOpacity>
          {this.state.pop75 && <H75 suma75={this.toggle75}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle76}><Text style={styles.txtButResumo}>Conjuração Baiana</Text></TouchableOpacity>
          {this.state.pop76 && <H76 suma76={this.toggle76}/>}
      </View>
    )
  }
}



class H71 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma71}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Resumo <Text style={styles.corAno}>1808</Text></Text>
          <Text style={styles.conteudoH}>No dia 22 de janeiro de 1808, chega a Salvador a família real portuguesa, em fuga das tropas do exército francês, comandadas por Napoleão Bonaparte, que expandia seu domínio sobre a Península Ibérica. Politicamente, o evento significava a transferência do governo de Portugal e de suas colônias para o território brasileiro.</Text>
          <Text style={styles.conteudoH}>Logo após a chegada da corte, o príncipe regente Dom João VI, tomou várias medidas importantes para transformar a economia de um país que era até então a de uma colônia, em uma economia de um país independente. Por isso, apesar de o Brasil ter deixado de ser colônia oficialmente apenas em 1815 e se tornado completamente independente apenas em 1822, para muitos o fim do período colonial se dá com a chegada da corte portuguesa ao Brasil.</Text>

      </ScrollView>
    )
  }
}


class Pop1808 extends React.Component {

constructor ( props ) {
  super (props);
  this.state = {
  pop71: false,
  popHR7: false,
  };
}


toggle71 = () => {
    const { pop71 } = this.state;
    this.setState( { pop71: !pop71 })
}

toggleHR7 = () => {
    const { popHR7 } = this.state;
    this.setState( { popHR7: !popHR7 })
}

render() {
  return (
    <View style={styles.viewH}>

      <TouchableOpacity style={styles.botaoHome} onPress={this.props.loadMap}><Image source={require('../../imagens/home.png')} style={styles.imgHome}/></TouchableOpacity>

      <TouchableOpacity style={styles.butAno} onPress={this.toggle71}>
        <Text style={styles.txtAno}>1808</Text>
      </TouchableOpacity>
      {this.state.pop71 && <H71 suma71={this.toggle71}/>}

      <TouchableOpacity style={styles.butPeriodo} onPress={this.toggleHR7}>
        <Text style={styles.txtAno}>1751 - 1808</Text>
      </TouchableOpacity>
      {this.state.popHR7 && <HR7 sumaHR7={this.toggleHR7}/>}

    </View>
  )
}
}




class H67 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma67}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Conflitos</Text>
          <Text style={styles.conteudoH}>Além das revoltas contra a coroa, também ocorreram diversos conflitos nesse período, dentre eles se destacam:</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Guerra dos Emboabas:</Text> foi um confronto travado de 1707 a 1709 pelo direito de exploração das recém-descobertas jazidas de ouro na região do atual estado de Minas Gerais, no Brasil. O primeiro grupo, formado pelos bandeirantes paulistas, havia descoberto a região das minas e, por esta razão, reclamava a exclusividade de explorá-las. Já o grupo heterogêneo composto de portugueses e migrantes das demais partes do Brasil, sobretudo da costa leste nordestina, era pejorativamente apelidado de "emboabas" pelos paulistas</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Guerra dos Mascates:</Text> A Guerra dos Mascates foi uma rebelião de caráter nativista, ocorrida em Pernambuco entre os anos de 1710 e 1711, que envolveu as cidades de Olinda e Recife pela disputa do controle do poder político. Com a expulsão dos holandeses do Nordeste, a economia açucareira sofreu uma grave crise. Mesmo assim, a aristocracia rural (senhores de engenho) de Olinda continuava controlando o poder político na capitania de Pernambuco. Por outro lado, Recife se descolava deste cenário de crise graças à intensa atividade econômica dos mascates. Gerando assim um clima de hostilidade e posteriormente a guerra.</Text>

      </ScrollView>
    )
  }
}


class H66 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma66}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Consequências</Text>
          <Text style={styles.conteudoH}>A mineração e suas consequências refletiram fortemente sobre a vida econômica, social, política e administrativa da colônia.</Text>
          <Text style={styles.conteudoH}>Podemos citar como principais consequências a grande migração de portugueses para a região das minas, o que gerou uma explosão populacional, o deslocamento do eixo econômico e demográfico para a região Centro-Leste e  a intensificação do tráfico negreiro, além da mudança de capital para o Rio de Janeiro, que ocorreu em 1763.</Text>
          <Text style={styles.conteudoH}>Também vale lembrar que a corrida do ouro promoveu o povoamento do interior do Brasil, anulando completamente a velha demarcação do Tratado de Tordesilhas.</Text>


      </ScrollView>
    )
  }
}


class H65 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma65}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Revoltas</Text>
          <Text style={styles.conteudoH}>Como já dito, nesse período houve grande insatisfação com o governo devido aos impostos, o que culminou em algumas revoltas populares, a mais importante delas foi a Revolta de Vila Rica em 1720.</Text>
          <Text style={styles.conteudoH}>A principal causa dessa revolta foi a insatisfação dos protestantes com o Quinto, que havia sido instituído no ano anterior, além da proibição da circulação do ouro em pó e das punições severas para quem não pagasse os impostos devidos à metrópole.</Text>
          <Text style={styles.conteudoH}>Os revoltosos queriam o fim das Casas de Fundição, a redução de impostos e o fim dos monopólios do fumo, sal, aguardente e gado.</Text>
          <Text style={styles.conteudoH}>Liderada por Filipe dos Santos, a revolta contou com a participação do povo (principalmente pessoas mais pobres e da classe média de Vila Rica). Os revoltosos pegaram em armas e ocuparam alguns pontos de Vila Rica. Após chamar os revoltosos para negociar, o governador ordenou a prisão de todos que participaram da revolta e a execução de Felipe dos Santos.</Text>


      </ScrollView>
    )
  }
}


class H64 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma64}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Extração do ouro</Text>
          <Text style={styles.conteudoH}>Como já dito, os garimpeiros eram, normalmente, escravos de origem africana, que eram supervisionados por funcionários contratados pelos propietários das minas.</Text>
          <Text style={styles.conteudoH}>Grande parte do ouro encontrado neste período estava presente nas chamadas minas de aluvião. Estas ficavam, principalmente, nas margens de rios, córregos e riachos.</Text>
          <Text style={styles.conteudoH}>Os garimpeiros destas minas usavam a bateia, como principal instrumento, para encontrar as pepitas de ouro. Era uma espécie de peneira, de tamanho grande, que servia para separar as pedras de ouro do cascalho presente nos rios. Esta técnica era barata, porém pouco eficiente. Para compensar e obter lucro, o dono da mina utilizava grande quantidade de mão de obra, que devia trabalhar por longos períodos. Portanto, a mão de obra utilizada nestas minas era explorada ao extremo.</Text>

      </ScrollView>
    )
  }
}


class H63 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma63}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Impostos</Text>
          <Text style={styles.conteudoH}>No começo do ciclo do ouro, como já dito, Portugal passava por uma grave crise, portanto, logo após o início da extração de ouro no Brasil, os extratores já estavam sujeitos à uma alta carga tributária.</Text>
          <Text style={styles.conteudoH}>Os tipos de taxação cobrados pela metrópole foram os seguintes:</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Quinto:</Text> Criado em 1719, este imposto era cobrado nas Casas de Fundição, um órgão do governo português. O ouro era derretido e transformado em barras, com o selo da coroa portuguesa, e eram retirados 20% (um quinto) para ser enviado a Portugal.</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Capitação:</Text> Esta taxa prevaleceu por 16 anos, no período de 1734 a 1750, e era o imposto cobrado sobre escravos e pessoas livres que trabalhassem por conta própria, com as próprias mãos, e também sobre as lojas, vendas e comércios em geral.</Text>
          <Text style={styles.conteudoH}><Text style={styles.negrito}>Derrama:</Text> Instituída em 1751, mas realizada pela primeira vez (e basicamente única vez, veremos isso no próximo mapa) apenas em 1763. Consistia no confisco de bens e objetos de ouro para atingir a meta estipulada pela metrópole, devido ao frequente não pagamento integral do quinto.</Text>


      </ScrollView>
    )
  }
}


class H62 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma62}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Ciclo do ouro</Text>
          <Text style={styles.conteudoH}>A extração de ouro no Brasil se realizava principalmente na região de Minas Gerais, fator que contribuiu pra urbanização e povoamento desse local.</Text>
          <Text style={styles.conteudoH}>Os trabalhadores que faziam o serviço pesado nas minas eram, principalmente, escravos de origem africana. Além deles havia a presença de grande quantidade de funcionários, contratados pelos proprietários, que fiscalizavam o trabalho dos garimpeiros. Os garimpeiros que tentavam pegar ouro para si durante o trabalho, quando eram descobertos, recebiam duros castigos físicos. Estes fiscais também serviam para forçar os garimpeiros a trabalhar de forma rápida, correta e eficiente.</Text>
          <Text style={styles.conteudoH}>Desde o príncipio do ciclo do ouro a carga de impostos era alta, o que gerou ao longo desse período diversas revoltas.</Text>


      </ScrollView>
    )
  }
}


class HR6 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    pop62: false,
    pop63: false,
    pop64: false,
    pop65: false,
    pop66: false,
    pop67: false,
    };
  }

  toggle62 = () => {
      const { pop62 } = this.state;
      this.setState( { pop62: !pop62 })
  }

  toggle63 = () => {
      const { pop63 } = this.state;
      this.setState( { pop63: !pop63 })
  }

  toggle64 = () => {
      const { pop64 } = this.state;
      this.setState( { pop64: !pop64 })
  }

  toggle65 = () => {
      const { pop65 } = this.state;
      this.setState( { pop65: !pop65 })
  }

  toggle66 = () => {
      const { pop66 } = this.state;
      this.setState( { pop66: !pop66 })
  }

  toggle67 = () => {
      const { pop67 } = this.state;
      this.setState( { pop67: !pop67 })
  }

  render() {
    return (
      <View style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaHR6}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Resumo <Text style={styles.corPeriodo}>1698 - 1751</Text></Text>

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle62}><Text style={styles.txtButResumo}>Ciclo do ouro</Text></TouchableOpacity>
          {this.state.pop62 && <H62 suma62={this.toggle62}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle63}><Text style={styles.txtButResumo}>Impostos</Text></TouchableOpacity>
          {this.state.pop63 && <H63 suma63={this.toggle63}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle64}><Text style={styles.txtButResumo}>Extração do ouro</Text></TouchableOpacity>
          {this.state.pop64 && <H64 suma64={this.toggle64}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle65}><Text style={styles.txtButResumo}>Revoltas</Text></TouchableOpacity>
          {this.state.pop65 && <H65 suma65={this.toggle65}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle67}><Text style={styles.txtButResumo}>Conflitos</Text></TouchableOpacity>
          {this.state.pop67 && <H67 suma67={this.toggle67}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle66}><Text style={styles.txtButResumo}>Consequências</Text></TouchableOpacity>
          {this.state.pop66 && <H66 suma66={this.toggle66}/>}

      </View>
    )
  }
}


class H61 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma61}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Resumo <Text style={styles.corAno}>1751</Text></Text>
          <Text style={styles.conteudoH}>Nesse período, o ciclo do ouro já estava no seu auge, entretanto, os impostos sobre a extração eram considerados abusivos pelo povo.</Text>
          <Text style={styles.conteudoH}>Em 1751, devido ao descontentamento da população, e após diversas revoltas, o Sistema de Capitação (explicado no resumo no canto inferior esquerdo) foi substituído pelo sistema de cobrança dos quintos por Casa de Fundição, com o dispositivo coator da Derrama.</Text>
          <Text style={styles.conteudoH}>Porém, isso não viria a ser uma boa substituição, e o povo voltaria a se revoltar com os tributos. Culminando na Inconfidência Mineira em 1789.</Text>

      </ScrollView>
    )
  }
}



class Pop1765 extends React.Component {

constructor ( props ) {
  super (props);
  this.state = {
  pop61: false,
  popHR6: false,
  };
}


toggle61 = () => {
    const { pop61 } = this.state;
    this.setState( { pop61: !pop61 })
}

toggleHR6 = () => {
    const { popHR6 } = this.state;
    this.setState( { popHR6: !popHR6 })
}

render() {
  return (
    <View>

      <TouchableOpacity style={styles.botaoHome} onPress={this.props.loadMap}><Image source={require('../../imagens/home.png')} style={styles.imgHome}/></TouchableOpacity>

      <TouchableOpacity style={styles.butAno} onPress={this.toggle61}>
        <Text style={styles.txtAno}>1751</Text>
      </TouchableOpacity>
      {this.state.pop61 && <H61 suma61={this.toggle61}/>}

      <TouchableOpacity style={styles.butPeriodo} onPress={this.toggleHR6}>
        <Text style={styles.txtAno}>1698 - 1751</Text>
      </TouchableOpacity>
      {this.state.popHR6 && <HR6 sumaHR6={this.toggleHR6}/>}

    </View>
  )
}
}





class H55 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma55}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Descoberta do ouro</Text>
          <Text style={styles.conteudoH}>Em 1693 o ouro foi encontrado pela primeira vez no Brasil, durante uma bandeira escravagista no interior de Minas Gerais.</Text>
          <Text style={styles.conteudoH}>A notícia rapidamente se espalhou, muitas pessoas (inclusive europeus, principalmente portugueses devido à crise) se migraram para a região das minas.</Text>
          <Text style={styles.conteudoH}>A coroa portuguesa prontamente estabeleceu impostos sobre a extração de ouro para conseguir estabilizar a situação econômica de Portugal, a quantidade de impostos criada viria a causar muita insatisfação entre os brasileiros, mas falaremos disso apenas no próximo mapa.</Text>


      </ScrollView>
    )
  }
}


class H54 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma54}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Crise portugesa</Text>
          <Text style={styles.conteudoH}>Na segunda metade do século XVII Portugal entrou em uma grave crise econômica.</Text>
          <Text style={styles.conteudoH}>Os principais motivos para essa crise eram o baixo preço do açúcar nos mercados internacionais, devido a concorrência do açúcar holandês, francês, e inglês das Antilhas. Além disso tinha acabado de sair da união Ibérica, perdido grande parte de suas colônias na África e também gastado recursos para devolver o trono do país aos portugueses.</Text>
          <Text style={styles.conteudoH}>Para superar esse momento de crise, os portugueses ampliaram a fiscalização na colônia e criaram mecanismos para poder aumentar a arrecadação da Coroa em terras brasileiras, nesse mesmo período as expedições em busca de metais e pedras preciosas no interior do território foram intensificadas.</Text>
          <Text style={styles.conteudoH}>Essa busca faria com que o ouro brasileiro fosse descoberto em 1693, o que ajudou a acabar com a crise portuguesa.</Text>


      </ScrollView>
    )
  }
}


class H53 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma53}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Conflitos</Text>
          <Text style={styles.conteudoH}>Com a crise da produção açucareira, a coroa portuguesa se viu obrigada a tomar algumas atitudes para continuar impulsionando a economia.</Text>
          <Text style={styles.conteudoH}>Algumas dessas atitudes entretanto, não foram bem recebidas pela população, gerando algumas revoltas nesse período.</Text>
          <Text style={styles.conteudoH}>Entre elas podemos citar a Revolta de Beckman que foi uma rebelião nativista ocorrida na cidade de São Luís no Maranhão em 1684.</Text>
          <Text style={styles.conteudoH}>Essa revolta foi causada pela insatisfação do povo com a Companhia de Comércio do Maranhão, e foi fortemente repreendida pelo governo português, que prendeu os revoltosos e enforcou os líderes.</Text>


      </ScrollView>
    )
  }
}


class H52 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma52}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Cana-de-açucar</Text>
          <Text style={styles.conteudoH}>Após os holandeses serem expulsos do nordeste brasileiro, esses começaram a produzir cana-de-açucar em larga escala na região das antilhas.</Text>
          <Text style={styles.conteudoH}>Os holandeses conheciam o processo de fabricação de açúcar e tinham o controle sobre a distribuição e comercialização deste produto. Portanto, conseguiram conquistar os grandes mercados consumidores rapidamente, deixando o açúcar produzido no Brasil em segundo plano no mercado internacional.</Text>
          <Text style={styles.conteudoH}>A concorrência holandesa foi, portanto, uma das principais causas da crise do açúcar brasileiro no período colonial, pois eles conseguiram produzir açúcar mais barato e de melhor qualidade do que o brasileiro.</Text>
          <Text style={styles.conteudoH}>Entretanto, vale destacar que, mesmo com a crise, a produção e exportação de açúcar permaneceram como principais atividades econômicas até o apogeu do Ciclo do Ouro na segunda metade do século XVIII.</Text>


      </ScrollView>
    )
  }
}


class HR5 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    pop52: false,
    pop53: false,
    pop54: false,
    pop55: false,
    };
  }

  toggle52 = () => {
      const { pop52 } = this.state;
      this.setState( { pop52: !pop52 })
  }

  toggle53 = () => {
      const { pop53 } = this.state;
      this.setState( { pop53: !pop53 })
  }

  toggle54 = () => {
      const { pop54 } = this.state;
      this.setState( { pop54: !pop54 })
  }

  toggle55 = () => {
      const { pop55 } = this.state;
      this.setState( { pop55: !pop55 })
  }



  render() {
    return (
      <View style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaHR5}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Resumo <Text style={styles.corPeriodo}>1654 - 1698</Text></Text>

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle52}><Text style={styles.txtButResumo}>Cana-de-açucar</Text></TouchableOpacity>
          {this.state.pop52 && <H52 suma52={this.toggle52}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle53}><Text style={styles.txtButResumo}>Conflitos</Text></TouchableOpacity>
          {this.state.pop53 && <H53 suma53={this.toggle53}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle54}><Text style={styles.txtButResumo}>Crise portuguesa</Text></TouchableOpacity>
          {this.state.pop54 && <H54 suma54={this.toggle54}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle55}><Text style={styles.txtButResumo}>Descoberta do ouro</Text></TouchableOpacity>
          {this.state.pop55 && <H55 suma55={this.toggle55}/>}
      </View>
    )
  }
}


class H51 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma51}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Resumo <Text style={styles.corAno}>1698</Text></Text>
          <Text style={styles.conteudoH}>As primeiras minas de ouro foram encontradas pelos bandeirantes em suas expedições rumo ao interior.</Text>
          <Text style={styles.conteudoH}>O descobrimento do ouro no Brasil é atribuído a Antônio Rodrigues Arzão, em 1693. Entretanto, a corrida do ouro propiamente dita começou efetivamente com a descoberta das minas de Ouro Preto por Antônio Dias de Oliveira, em 1698.</Text>
          <Text style={styles.conteudoH}>Com a diminuição do lucro com a cana de açucar (devidamente explicada no resumo no canto inferior esquerdo), Portugal estava passando por dificuldades econômicas, o que fez muitos portugueses migrarem para o Brasil após a notícia da descoberta de grandes quantidades de ouro.</Text>
          <Text style={styles.conteudoH}>A notícia também atraiu brasileiros de todos os pontos do país, ávidos pela oportunidade de rápido enriquecimento.</Text>

      </ScrollView>
    )
  }
}



class Pop1698 extends React.Component {

constructor ( props ) {
  super (props);
  this.state = {
  pop51: false,
  popHR5: false,
  };
}


toggle51 = () => {
    const { pop51 } = this.state;
    this.setState( { pop51: !pop51 })
}

toggleHR5 = () => {
    const { popHR5 } = this.state;
    this.setState( { popHR5: !popHR5 })
}

render() {
  return (
    <View>

      <TouchableOpacity style={styles.botaoHome} onPress={this.props.loadMap}><Image source={require('../../imagens/home.png')} style={styles.imgHome}/></TouchableOpacity>

      <TouchableOpacity style={styles.butAno} onPress={this.toggle51}>
        <Text style={styles.txtAno}>1698</Text>
      </TouchableOpacity>
      {this.state.pop51 && <H51 suma51={this.toggle51}/>}

      <TouchableOpacity style={styles.butPeriodo} onPress={this.toggleHR5}>
        <Text style={styles.txtAno}>1654-1698</Text>
      </TouchableOpacity>
      {this.state.popHR5 && <HR5 sumaHR5={this.toggleHR5}/>}

    </View>
  )
}
}




class H45 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma45}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Fim União Ibérica</Text>
          <Text style={styles.conteudoH}>Em 1640 chegou ao fim a União Ibérica, graças ao movimento que ficou conhecido como Restauração. Este movimento significou o retorno da autonomia política de Portugal, agora sob a dinastia dos Bragança, sendo seu primeiro rei D. João IV. A aliança entre os portugueses e a República das Províncias Unidas, sua aliada na luta pela independência contra a Espanha, propiciou uma trégua aos combates, o que foi muito bom para os negócios holandeses na colônia.</Text>
          <Text style={styles.conteudoH}>Mesmo preservando aspectos fundamentais da colonização portuguesa, a União Ibérica foi responsável por algumas mudanças. Com a junção das coroas, as nações inimigas da Espanha passam a ver na invasão do espaço colonial lusitano uma forma de prejudicar o rei espanhol. Desta maneira, no tempo em que a União Ibérica foi vigente, ingleses, holandeses e franceses tentaram invadir o Brasil. Quando esta acaba, tais nações não veem mais o Brasil como inimigo</Text>
      </ScrollView>
    )
  }
}


class H44 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma44}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Combates</Text>
          <Text style={styles.conteudoH}>Além dos combates contra os holandeses, houve também conflitos com a França, que em 1612 fundou a cidadela de São Luís. A França tentava conquistar parte do território americano para criar a França Equinocial, e participar da crescente economia açucareira.</Text>
          <Text style={styles.conteudoH}>Os franceses foram expulsos por forças portuguesas e espanholas em 1615, e o Forte de São Luís deu origem a cidade de São Luís do Maranhão.</Text>
      </ScrollView>
    )
  }
}


class H43 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma43}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Holandeses</Text>
          <Text style={styles.conteudoH}>Como vimos no último mapa, desde 1599 os holandeses fizeram incursões à costa brasileira, entretanto, apenas muitos anos mais tarde, em 1624, têm início a primeira invasão propriamente dita ao nordeste brasileiro, contudo, ela fica restrita à Bahia. No mesmo ano, cerca de 1500 homens conquistaram a cidade de Salvador, até que, no ano seguinte, uma poderosa esquadra formada por lusos e espanhóis reconquista o território perdido.</Text>
          <Text style={styles.conteudoH}>Em fevereiro de 1630, percebendo a vulnerabilidade da região de Pernambuco, capitania rica e pouco protegida, uma esquadra de 56 navios holandeses desembarca no litoral, tomando Olinda facilmente. O mesmo não ocorre em Recife, ocupado com muita dificuldade, graças as técnicas de guerrilha utilizadas pelos defensores.</Text>
          <Text style={styles.conteudoH}>Em 1635, os efetivos holandeses em Pernambuco eram enormes. Assim, sem os reforços esperados, a resistência foge para a Bahia em 1635, deixando a região para os holandeses. Com a conquista do território, fazia-se necessária a presença de uma figura que centralizasse as funções políticas e militares da “Nova Holanda”. Desse modo, é nomeado administrador geral do Brasil Holandês o Conde João Maurício de Nassau.</Text>
          <Text style={styles.conteudoH}>Durante o seu governo, houve um forte estímulo à recuperação da produção açucareira, bem como a realização de obras de urbanização no Recife, ajudando a desenvolver a região.</Text>
          <Text style={styles.conteudoH}>Anos depois, a situação pacífica com os senhores de engenho local começa a se deteriorar, uma vez que eles não conseguem mais honrar as dívidas contraídas com os holandeses, causando a Insurreição Pernambucana em 1645.</Text>
      </ScrollView>
    )
  }
}


class H42 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma42}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Bandeirantes</Text>
          <Text style={styles.conteudoH}>Os Bandeirantes realizaram várias expedições denominadas de bandeiras. Estas reuniam indivíduos que iam para o interior com a intenção de capturar indígenas para uso como mão de obra escrava.</Text>
          <Text style={styles.conteudoH}>Além disso, com a crise Portuguesa, a coroa estimulou a procura por metais preciosos em suas colônias. Então, as bandeiras somaram-se às expedições oficiais financiadas pela própria Coroa denominadas de Entradas.</Text>
          <Text style={styles.conteudoH}>Os principais objetivos dessas expedições foram a busca por mão de obra indígena, guerras e escravidão de muitos indígenas hostis à colonização, localização e destruição de quilombos formados por negros e indígenas fugitivos e a busca por metais preciosos.</Text>


      </ScrollView>
    )
  }
}



class HR4 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    pop42: false,
    pop43: false,
    pop44: false,
    pop45: false,
    };
  }

  toggle42 = () => {
      const { pop42 } = this.state;
      this.setState( { pop42: !pop42 })
  }

  toggle43 = () => {
      const { pop43 } = this.state;
      this.setState( { pop43: !pop43 })
  }

  toggle44 = () => {
      const { pop44 } = this.state;
      this.setState( { pop44: !pop44 })
  }

  toggle45 = () => {
      const { pop45 } = this.state;
      this.setState( { pop45: !pop45 })
  }

  render() {
    return (
      <View style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaHR4}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Resumo <Text style={styles.corPeriodo}>1599 - 1654</Text></Text>

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle42}><Text style={styles.txtButResumo}>Bandeirantes</Text></TouchableOpacity>
          {this.state.pop42 && <H42 suma42={this.toggle42}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle43}><Text style={styles.txtButResumo}>Holandeses</Text></TouchableOpacity>
          {this.state.pop43 && <H43 suma43={this.toggle43}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle44}><Text style={styles.txtButResumo}>Combates</Text></TouchableOpacity>
          {this.state.pop44 && <H44 suma44={this.toggle44}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle45}><Text style={styles.txtButResumo}>Fim União Ibérica</Text></TouchableOpacity>
          {this.state.pop45 && <H45 suma45={this.toggle45}/>}
      </View>
    )
  }
}





class H41 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma41}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Resumo <Text style={styles.corAno}>1654</Text></Text>
          <Text style={styles.conteudoH}>Em 1654 os holandeses são expulsos do nordeste brasileiro, dando fim a Guerra da Luz Divina. </Text>
          <Text style={styles.conteudoH}>A expulsão deles foi fomentada pelo desgaste econômico português gerado pelo dominação espanhola durante a União Ibérica e, colocava como urgente, a recuperação do território colonial brasileiro, então dominado pela Holanda.</Text>
          <Text style={styles.conteudoH}>Ao mesmo tempo em que as armas eram utilizadas, Portugal negociava diplomaticamente a saída definitiva dos holandeses do Brasil. Especialistas apontam que Portugal teria pago à Holanda uma pesada indenização para que os holandeses abandonassem o Nordeste.</Text>
          <Text style={styles.conteudoH}>Nesse período a produção açucareira ainda era a principal atividade econômica brasileira, que logo viria a entrar em crise, mas falaremos disso apenas no próximo mapa.</Text>
          <Text style={styles.conteudoH}>Por volta dessa época também ja haviam se iniciado diversas bandeiras, que eram expedições rumo ao interior do Brasil realizadas pelos bandeirantes, visando achar metais preciosos e capturar indígenas, veja uma explicação mais detalhada no resumo "1599-1654" localizado no canto inferior esquerdo.</Text>

      </ScrollView>
    )
  }
}




class Pop1654 extends React.Component {

constructor ( props ) {
  super (props);
  this.state = {
  pop41: false,
  popHR4: false,
  };
}


toggle41 = () => {
    const { pop41 } = this.state;
    this.setState( { pop41: !pop41 })
}

toggleHR4 = () => {
    const { popHR4 } = this.state;
    this.setState( { popHR4: !popHR4 })
}

render() {
  return (
    <View>

      <TouchableOpacity style={styles.botaoHome} onPress={this.props.loadMap}><Image source={require('../../imagens/home.png')} style={styles.imgHome}/></TouchableOpacity>

      <TouchableOpacity style={styles.butAno} onPress={this.toggle41}>
        <Text style={styles.txtAno}>1654</Text>
      </TouchableOpacity>
      {this.state.pop41 && <H41 suma41={this.toggle41}/>}

      <TouchableOpacity style={styles.butPeriodo} onPress={this.toggleHR4}>
        <Text style={styles.txtAno}>1599 - 1654</Text>
      </TouchableOpacity>
      {this.state.popHR4 && <HR4 sumaHR4={this.toggleHR4}/>}

    </View>
  )
}
}






class H36 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma36}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Tráfico Negreiro</Text>
          <Text style={styles.conteudoH}>O tráfico negreiro foi fomentado pela necessidade de mão-de-obra nos engenhos e a proibição da escravização dos indígenas pela Igreja Católica.</Text>
          <Text style={styles.conteudoH}>Uma vez tendo sido comprados por portugueses e embarcados nos navios negreiros, os escravos, oriundos de diferentes regiões e etnias africanas, eram tratados com extrema violência e recebiam pouca alimentação. Geralmente, eram maltratados e castigados sem nenhum motivo aparente e eram amontoados dentro dos navios em ambientes insalubres, propícios à proliferação de doenças.</Text>
          <Text style={styles.conteudoH}>Milhões de escravos foram trazidos para o Brasil para realizarem trabalho forçado, e foi, em grande parte, o que possibilitou o desenvolvimento da economia açucareira no Brasil.</Text>

      </ScrollView>
    )
  }
}


class H35 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma35}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Cana-de-açucar</Text>
          <Text style={styles.conteudoH}>Com o intuito de colonizar tendo um retorno econômico satisfatório, na decada de 1540, os portugueses instalaram engenhos em todas as capitanias hereditárias, para que o cultivo de cana-de-açúcar fosse iniciado.</Text>
          <Text style={styles.conteudoH}>O primeiro engenho (como ja dito anteriormente) foi fundando por Martins Afonso de Souza em 1533, na Capitania de São Vicente. E logo o cultivo se espalhou por todo o litoral brasileiro, tendo um melhor desenvolvimento no Nordeste, nos locais onde atualmente se encontram os Estados de Pernambuco e Bahia. A mão-de-obra utilizada nos engenhos era composta por escravos africanos e índios.</Text>
          <Text style={styles.conteudoH}>Mais informações a respeito do cultivo da cana de açucar estão presentes no resumo dessa mapa.</Text>

      </ScrollView>
    )
  }
}



class H34 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma34}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Combates</Text>
          <Text style={styles.conteudoH}>Várias invasões aconteceram no litoral brasileiro em meados do séc. XVI, entre elas é possível destacar as francesas na área do Rio de Janeiro. O objetivo dos franceses era instalar a França Antártica, um núcleo colonial da França, tinham o objetivo de extrair Pau-Brasil, e conseguir território, mas os portugueses não permitiram. A luta durou até 1557, quando, depois de vários esforços portugueses, os franceses foram expulsos.</Text>
          <Text style={styles.conteudoH}>Durante esse período ocorreram também alguns ataques de corsários estrangeiros, especialmente ingleses ao litoral brasileiro.</Text>
          <Text style={styles.conteudoH}>Para previnir todo os tipos de ataques pelo mar, ao longo da costa brasileira foram construídos diversos fortes.</Text>

      </ScrollView>
    )
  }
}



class H33 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma33}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>União Ibérica</Text>
          <Text style={styles.conteudoH}>União Ibérica foi um período de 1580 a 1640, na qual o mesmo Rei governa à Portugal e Espanha.</Text>
          <Text style={styles.conteudoH}>Esse cenário teve algumas consequências para o Brasil, entre elas destacam-se:</Text>
          <Text style={styles.conteudoH}>•O fechamento dos portos ibéricos aos navios flamengos, inclusive nas colônias, o que desarticulou o comércio açucareiro e acarretou os ataques holandeses ao nordeste.</Text>
          <Text style={styles.conteudoH}>•A supressão temporária dos limites de Tordesilhas que possibilitou a expansão territorial na colônia.</Text>

      </ScrollView>
    )
  }
}





class H32 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma32}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Governo Geral</Text>
          <Text style={styles.conteudoH}>Após o sistema de capitanias hereditárias ter se provado ineficaz na maioria dos casos, propôs-se o sistema do governo geral, comandado pelo governador, que detinha grande autoridade, possibilitando assim a criação de novos cargos políticos com o intuito de dividir as diversas tarefas.</Text>
          <Text style={styles.conteudoH}>O governador geral, indicado pelo rei, seria responsável pelo desenvolvimento econômico da colônia, desde criação de engenhos, administração e proteção de terras, inserção dos indígenas na população, dentre outros.</Text>
          <Text style={styles.conteudoH}>O governo geral foi implantado em 1548 e extinto apenas em 1808, com a chegada da família real ao Brasil, mas falaremos disso mais pra frente.</Text>


      </ScrollView>
    )
  }
}




class HR3 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    pop32: false,
    pop33: false,
    pop34: false,
    pop35: false,
    pop36: false,
    };
  }

  toggle32 = () => {
      const { pop32 } = this.state;
      this.setState( { pop32: !pop32 })
  }

  toggle33 = () => {
      const { pop33 } = this.state;
      this.setState( { pop33: !pop33 })
  }

  toggle34 = () => {
      const { pop34 } = this.state;
      this.setState( { pop34: !pop34 })
  }

  toggle35 = () => {
      const { pop35 } = this.state;
      this.setState( { pop35: !pop35 })
  }

  toggle36 = () => {
      const { pop36 } = this.state;
      this.setState( { pop36: !pop36 })
  }


  render() {
    return (
      <View style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaHR3}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Resumo <Text style={styles.corPeriodo}>1534 - 1599</Text></Text>

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle32}><Text style={styles.txtButResumo}>Governo Geral</Text></TouchableOpacity>
          {this.state.pop32 && <H32 suma32={this.toggle32}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle33}><Text style={styles.txtButResumo}>União Ibérica</Text></TouchableOpacity>
          {this.state.pop33 && <H33 suma33={this.toggle33}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle34}><Text style={styles.txtButResumo}>Combates</Text></TouchableOpacity>
          {this.state.pop34 && <H34 suma34={this.toggle34}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle35}><Text style={styles.txtButResumo}>Cana-de-açucar</Text></TouchableOpacity>
          {this.state.pop35 && <H35 suma35={this.toggle35}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle36}><Text style={styles.txtButResumo}>Tráfico Negreiro</Text></TouchableOpacity>
          {this.state.pop36 && <H36 suma36={this.toggle36}/>}



      </View>
    )
  }
}




class H31 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma31}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Resumo <Text style={styles.corAno}>1599</Text></Text>
          <Text style={styles.conteudoH}>Em 1599 já havia produção de cana de açucar em algumas regiões do Brasil, principalmente no nordeste. </Text>
          <Text style={styles.conteudoH}>Isso ocasionou o início dos ataques holandeses à costa brasileira nordestina, para dominar a produção açucareira, bem como seu comércio. Os holandeses chegaram a invadir a Capitania de Pernambuco, mas falaremos disso no próximo mapa.</Text>
          <Text style={styles.conteudoH}>A escolha de cultivar a cana-de-açúcar no Brasil veio da Coroa Portuguesa. Vários foram os motivos para que essa escolha fosse feita, entre eles o solo de massapé, que é propício para o cultivo de cana-de-açúcar, e era encontrado em abundância nas terras brasileiras, especialmente no nordeste. Outro fator foi que a cana-de-açúcar é uma planta de cultura rápida, chegando ao ponto de corte a partir do segundo ano.</Text>

      </ScrollView>
    )
  }
}





class Pop1599 extends React.Component {

constructor ( props ) {
  super (props);
  this.state = {
  pop31: false,
  popHR3: false,
  };
}


toggle31 = () => {
    const { pop31 } = this.state;
    this.setState( { pop31: !pop31 })
}

toggleHR3 = () => {
    const { popHR3 } = this.state;
    this.setState( { popHR3: !popHR3 })
}

render() {
  return (
    <View>

      <TouchableOpacity style={styles.botaoHome} onPress={this.props.loadMap}><Image source={require('../../imagens/home.png')} style={styles.imgHome}/></TouchableOpacity>

      <TouchableOpacity style={styles.butAno} onPress={this.toggle31}>
        <Text style={styles.txtAno}>1599</Text>
      </TouchableOpacity>
      {this.state.pop31 && <H31 suma31={this.toggle31}/>}

      <TouchableOpacity style={styles.butPeriodo} onPress={this.toggleHR3}>
        <Text style={styles.txtAno}>1534 - 1599</Text>
      </TouchableOpacity>
      {this.state.popHR3 && <HR3 sumaHR3={this.toggleHR3}/>}

    </View>
  )
}
}








class H25 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma25}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Colonização</Text>
          <Text style={styles.conteudoH}>Em 1530, o rei de Portugal D. João III resolveu dar início a colonização do Brasil, fixando pessoas na colônia. A redução dos lucros com a exploração do pau-brasil e as constantes presenças de nações estrangeiras no litoral brasileiro foi o que provocou essa decisão.</Text>
          <Text style={styles.conteudoH}>Portanto, em 1530, chefiada por Martin Afonso de Souza, partiu de Portugal a primeira expedição colonizadora,  que chegou ao Brasil no começo de 1531. Com cerca de 400 homens, seu objetivo principal era dar início a colonização do Brasil. Martin Afonso de Souza distribuiu lotes de terras (sesmarias) e deu início ao plantio da cana-de-açúcar ao criar o primeiro engenho.</Text>
      </ScrollView>
    )
  }
}



class H24 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma24}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Combates</Text>
          <Text style={styles.conteudoH}>Neste período houve contrabando de pau-brasil praticado por outros povos europeus, principalmente franceses. A coroa portuguesa precisou enviar ao Brasil expedições de caráter militar para proteger a costa brasileira. Cristóvão Jacques foi o comandante de uma das principais expedições com esse objetivo, entre os anos de 1516 a 1526.</Text>

      </ScrollView>
    )
  }
}




class H23 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma23}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Pau-brasil</Text>
          <Text style={styles.conteudoH}>Se tratava de uma madeira avermelhada encontrada no litoral brasileiro, que já era bastante conhecida na Europa. Dela extraíam-se corantes que eram utilizados para tingir tecidos.</Text>
          <Text style={styles.conteudoH}>Os portugueses construíram, no período do Brasil pré-colonial, diversas feitorias no litoral. Estas tinham como função armazenar madeira (pau-brasil), facilitando o transporte para as caravelas.</Text>
          <Text style={styles.conteudoH}>Os portugueses usaram mão de obra indígena na exploração do pau-brasil. Em troca de espelhos, chocalhos, facas e outros utensilhos, os índios eram convencidos a trabalharem no corte e carregamento do pau-brasil para os navios. Esta troca de trabalho por objetos ficou conhecida como escambo.</Text>
          <Text style={styles.conteudoH}>Nestes 30 anos de exploração do pau-brasil, houve devastação de grande parte da vegetação litorânea nativa. O pau-brasil foi praticamente extinto das matas entre o litoral do Rio de Janeiro até o do Rio Grande do Norte.</Text>


      </ScrollView>
    )
  }
}




class H22 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH11}>

      <TouchableOpacity style={styles.sumir11}
      onPress={this.props.suma22}
      ><Text style={styles.sumirx11}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Brasil pré-colonial</Text>
          <Text style={styles.conteudoH}>No Brasil, o período de 1500 à 1530 é chamado de pré-colonial. Este nome se deve ao fato de que nestes 30 anos não houve colonização portuguesa no Brasil.</Text>
          <Text style={styles.conteudoH}>Da chegada dos portugueses ao Brasil, em 1500, até a vinda da primeira expedição colonizadora de Martim Afonso de Souza, em 1531, o Brasil recebeu expedições portuguesas voltadas apenas para a exploração do pau-brasil, defesa e reconhecimento territorial.</Text>


      </ScrollView>
    )
  }
}




class HR2 extends React.Component {

  constructor ( props ) {
    super (props);
    this.state = {
    pop22: false,
    pop23: false,
    pop24: false,
    pop25: false,
    };
  }

  toggle22 = () => {
      const { pop22 } = this.state;
      this.setState( { pop22: !pop22 })
  }

  toggle23 = () => {
      const { pop23 } = this.state;
      this.setState( { pop23: !pop23 })
  }

  toggle24 = () => {
      const { pop24 } = this.state;
      this.setState( { pop24: !pop24 })
  }

  toggle25 = () => {
      const { pop25 } = this.state;
      this.setState( { pop25: !pop25 })
  }


  render() {
    return (
      <View style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaHR2}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Resumo <Text style={styles.corPeriodo}>1500 - 1534</Text></Text>

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle22}><Text style={styles.txtButResumo}>Brasil pré-colonial</Text></TouchableOpacity>
          {this.state.pop22 && <H22 suma22={this.toggle22}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle23}><Text style={styles.txtButResumo}>Pau-brasil</Text></TouchableOpacity>
          {this.state.pop23 && <H23 suma23={this.toggle23}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle24}><Text style={styles.txtButResumo}>Combates</Text></TouchableOpacity>
          {this.state.pop24 && <H24 suma24={this.toggle24}/>}

          <TouchableOpacity style={styles.resumoBut} onPress={this.toggle25}><Text style={styles.txtButResumo}>Colonização</Text></TouchableOpacity>
          {this.state.pop25 && <H25 suma25={this.toggle25}/>}


      </View>
    )
  }
}



class H21 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma21}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Resumo <Text style={styles.corAno}>1534</Text></Text>
          <Text style={styles.conteudoH}>Em 1534, o rei D. João III criou os sistemas de capitanias hereditárias, que eram faixas de terra bem extensas que eram dadas a um donatário (nobres e aqueles enriquecidos pelo mercantilismo), e passava de pai pra filho, esse sistema serviu para ajudar a popular a área da coroa Portuguesa. No total, 14 capitanias, que estão representadas em nosso mapa abaixo.</Text>
          <Text style={styles.conteudoH}>Os limites dessas capitanias eram determinados por linhas imaginárias paralelas à linha do Equador, que partiam do litoral até o limite permitido pelo Tratado de Tordesilhas.</Text>
          <Text style={styles.conteudoH}>Basicamente, os donatários deveriam entregar à Coroa 10% dos lucros obtidos através da exploração colonial, além de serem responsáveis pelo recolhimento do quinto (falaremos disso nos mapas mais adiante). Entre seus direitos estariam a possibilidade de fundar vilas, conceder sesmarias e exercer a justiça na capitania.</Text>

      </ScrollView>
    )
  }
}




class Pop1532 extends React.Component {

constructor ( props ) {
  super (props);
  this.state = {
  pop21: false,
  popHR2: false,
  };
}


toggle21 = () => {
    const { pop21 } = this.state;
    this.setState( { pop21: !pop21 })
}

toggleHR2 = () => {
    const { popHR2 } = this.state;
    this.setState( { popHR2: !popHR2 })
}

render() {
  return (
    <View>

      <TouchableOpacity style={styles.botaoHome} onPress={this.props.loadMap}><Image source={require('../../imagens/home.png')} style={styles.imgHome}/></TouchableOpacity>

      <TouchableOpacity style={styles.butAno} onPress={this.toggle21}>
        <Text style={styles.txtAno}>1534</Text>
      </TouchableOpacity>
      {this.state.pop21 && <H21 suma21={this.toggle21}/>}

      <TouchableOpacity style={styles.butPeriodo} onPress={this.toggleHR2}>
        <Text style={styles.txtAno}>1500 - 1534</Text>
      </TouchableOpacity>
      {this.state.popHR2 && <HR2 sumaHR2={this.toggleHR2}/>}

    </View>
  )
}
}








class H12 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma12}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titlePeri}>Resumo <Text style={styles.corPeriodo}>1492 - 1500</Text></Text>
          <Text style={styles.conteudoH}>Após Américo Vespúcio confirmar a existência de novas terras a oeste da Europa, Portugal passou a cobiçar essas terras e exigiu da Espanha um tratado que dividisse com ele as terras descobertas ou por descobrir.</Text>
          <Text style={styles.conteudoH}>A fim de solucionar o problema, o Papa Alexandre VI, determinou que seria traçado um meridiano imaginário a 100 léguas das ilhas de Cabo Verde. As terras a oeste pertenceriam à Espanha e as à leste, a Portugal.</Text>
          <Text style={styles.conteudoH}>Portugal foi extremamente prejudicado pelo tratado, já que não ficou de posse de nenhum trecho de terra do novo continente. Portanto, recusou-se e exigiu outro. O novo tratado, elaborado pelos governos da Espanha e de Portugal, recebeu o nome de Tratado de Tordesilhas (1494) e estabelecia um meridiano imaginário a 370 léguas a oeste de Cabo Verde. As terras a oeste pertenceriam à Espanha e as à leste a Portugal.</Text>


      </ScrollView>
    )
  }
}




class H11 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.divH1}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.suma11}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Resumo <Text style={styles.corAno}>1500</Text></Text>
          <Text style={styles.conteudoH}>Chegada dos portugueses, liderados por Pedro Álvares Cabral após 45 dias de viagem ao Brasil, mais especificamente ao Monte Pascoal, que foi o primeiro ponto avistado do mar pelos navegantes.</Text>
          <Text style={styles.conteudoH}>Cerca de uma semana depois, Cabral oficializou a posse das terras brasileiras pela Coroa portuguesa e no dia seguinte a esquadra continuou a viagem para a Índia deixando aqui dois degredados (criminosos ou presos políticos).</Text>
          <Text style={styles.conteudoH}>A região onde a esquadra de Cabral atracou era povoada por inúmeras tribos de várias etnias, para facilitar as coisas os portugueses chamaram-nos de Tupiniquins.</Text>


      </ScrollView>
    )
  }
}




class Pop1500 extends React.Component {

constructor ( props ) {
  super (props);
  this.state = {
  pop11: false,
  pop12: false,
  };
}


toggle11 = () => {
    const { pop11 } = this.state;
    this.setState( { pop11: !pop11 })
}

toggle12 = () => {
    const { pop12 } = this.state;
    this.setState( { pop12: !pop12 })
}

render() {
  return (
    <View>

      <TouchableOpacity style={styles.botaoHome} onPress={this.props.loadMap}><Image source={require('../../imagens/home.png')} style={styles.imgHome}/></TouchableOpacity>

      <TouchableOpacity style={styles.butAno} onPress={this.toggle11}>
        <Text style={styles.txtAno}>1500</Text>
      </TouchableOpacity>
      {this.state.pop11 && <H11 suma11={this.toggle11}/>}

      <TouchableOpacity style={styles.butPeriodo} onPress={this.toggle12}>
        <Text style={styles.txtAno}>1492 - 1500</Text>
      </TouchableOpacity>
      {this.state.pop12 && <H12 suma12={this.toggle12}/>}

    </View>
  )
}
}





class Orient2 extends React.Component {
  render() {
    return (
      <View style={styles.divOrient2}>

      <TouchableOpacity style={styles.sumirR1}
      onPress={this.props.sumaOrient2}
      ><Text style={styles.sumirx}>X</Text></TouchableOpacity>

          <Text style={styles.titleR1}>Orientações</Text>
          <Text style={styles.conteudoRObs}>Essa é a área de história do nosso aplicativo. Aqui você encontrará alguns mapas representando acontecimentos importantes durante o brasil colonial, juntamente com um resumo de cada período. Para acessá-los, use o botão do "ANO" logo ao lado.</Text>
          <Text style={styles.conteudoRObs}>Para entender o que o mapa representa, clique no botão do ano escolhido que aparecerá do lado do menu.</Text>
          <Text style={styles.conteudoRObs}>Lembrando sempre que todos os mapas utilizados foram produzidos por nossa própia equipe de desenvolvimento.</Text>



      </View>
    )
  }
}




class OrientHist extends React.Component {
  constructor ( props ) {
    super (props);
    this.state = {
      popOrient2: false,
    };
  }


  toggleOrient2 = () => {
    const {popOrient2} = this.state;
    this.setState({ popOrient2: !popOrient2 })
  }



  render() {
    return (
      <View>


        <TouchableOpacity style={styles.popUpOrient2}
        onPress={this.toggleOrient2}
        ><Text style={styles.txtOrient}>Orientações</Text></TouchableOpacity>
        {this.state.popOrient2 && <Orient2 sumaOrient2={this.toggleOrient2}/>}


      </View>
      )
    }
}






class MenuHist extends React.Component {
  render () {
    return (
      <View style={styles.divMenu2}>

        <TouchableOpacity style={styles.button1500}
        onPress={this.props.car1500}
        ><Text style={styles.textoMenuHist}>1500</Text></TouchableOpacity>

        <TouchableOpacity style={styles.button1500}
        onPress={this.props.car1532}
        ><Text style={styles.textoMenuHist}>1534</Text></TouchableOpacity>

        <TouchableOpacity style={styles.button1500}
        onPress={this.props.car1599}
        ><Text style={styles.textoMenuHist}>1599</Text></TouchableOpacity>

        <TouchableOpacity style={styles.button1500}
        onPress={this.props.car1654}
        ><Text style={styles.textoMenuHist}>1654</Text></TouchableOpacity>

        <TouchableOpacity style={styles.button1500}
        onPress={this.props.car1698}
        ><Text style={styles.textoMenuHist}>1698</Text></TouchableOpacity>

        <TouchableOpacity style={styles.button1500}
        onPress={this.props.car1765}
        ><Text style={styles.textoMenuHist}>1751</Text></TouchableOpacity>

        <TouchableOpacity style={styles.button1500}
        onPress={this.props.car1808}
        ><Text style={styles.textoMenuHist}>1808</Text></TouchableOpacity>

      </View>

    )
  }
}





class Historia extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 27,
      padding: 26,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'HISTÓRIA',
  };


  constructor ( props ) {
    super (props);
    this.state = { show: false,

    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      showMap: true,
      showMap1500: false,
      showMap1532: false,
      showMap1599: false,
      showMap1654: false,
      showMap1698: false,
      showMap1765: false,
      showMap1808: false,
    };
    imgSource = this.state.showMap? Map : Map
  }

  loadMap = () => {
    this.setState ({
      showMap: true,
    })
    imgSource = Map
  }

  toggleMenu = () => {
    const { show } = this.state;
    this.setState( { show: !show })
  }

  load1500 = () => {
    this.setState ({
      showMap: false,
      showMap1500: true,
    })
    imgSource = Map1500
  }

  load1532 = () => {
    this.setState ({
      showMap: false,
      showMap1532: true,
    })
    imgSource = Map1532
  }

  load1599 = () => {
    this.setState ({
      showMap: false,
      showMap1599: true,
    })
    imgSource = Map1599
  }

  load1654 = () => {
    this.setState ({
      showMap: false,
      showMap1654: true,
    })
    imgSource = Map1654
  }

  load1698 = () => {
    this.setState ({
      showMap: false,
      showMap1698: true,
    })
    imgSource = Map1698
  }

  load1765 = () => {
    this.setState ({
      showMap: false,
      showMap1765: true,
    })
    imgSource = Map1765
  }

  load1808 = () => {
    this.setState ({
      showMap: false,
      showMap1808: true,
    })
    imgSource = Map1808
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imgSource} style={styles.MainMap}>


            <TouchableOpacity style={styles.menuHist} onPress={this.toggleMenu}>
              <Text style={styles.txtMenuHist}>ANO</Text>
            </TouchableOpacity>
            {this.state.show && <MenuHist car1500={this.load1500} car1532={this.load1532} car1599={this.load1599} car1654={this.load1654} car1698={this.load1698} car1765={this.load1765} car1808={this.load1808}/>}



        </ImageBackground>

        {renderIf(imgSource === Map)(
            <OrientHist />
        )}

        {renderIf(imgSource === Map1500)(
            <Pop1500 loadMap={this.loadMap}/>
        )}

        {renderIf(imgSource === Map1532)(
            <Pop1532 loadMap={this.loadMap}/>
        )}

        {renderIf(imgSource === Map1599)(
            <Pop1599 loadMap={this.loadMap}/>
        )}

        {renderIf(imgSource === Map1654)(
            <Pop1654 loadMap={this.loadMap}/>
        )}

        {renderIf(imgSource === Map1698)(
            <Pop1698 loadMap={this.loadMap}/>
        )}

        {renderIf(imgSource === Map1765)(
            <Pop1765 loadMap={this.loadMap}/>
        )}

        {renderIf(imgSource === Map1808)(
            <Pop1808 loadMap={this.loadMap}/>
        )}
      </View>
    );
  }
}



class Questoes extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 27,
      padding: 26,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'QUESTÕES',
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.questGEO}>

          <Text style={styles.questTitle}>GEOGRAFIA</Text>

          <View style={styles.quests}>

            <Image source={Globo} style={styles.globo}/>

            <TouchableOpacity style={styles.questPlay} onPress={() => this.props.navigation.navigate('Fg')}>
              <Text style={styles.textPlay}>►</Text>
            </TouchableOpacity>

            <Text style={styles.textDific}>{`
Fixação
(fácil)
`}</Text>

          </View>

          <View style={styles.quests}>

            <Image source={Globo} style={styles.globo}/>

            <TouchableOpacity style={styles.questPlay} onPress={() => this.props.navigation.navigate('Mg')}>
              <Text style={styles.textPlay}>►</Text>
            </TouchableOpacity>

            <Text style={styles.textDific}>{`
Fixação
(médio)
`}</Text>

          </View>

          <View style={styles.quests}>

            <Image source={Globo} style={styles.globo}/>

            <TouchableOpacity style={styles.questPlay} onPress={() => this.props.navigation.navigate('Dg')}>
              <Text style={styles.textPlay}>►</Text>
            </TouchableOpacity>

            <Text style={styles.textDific}>{`
  Fixação
  (difícil)
  `}</Text>

          </View>

        </View>
        <View style={styles.questGEO}>

          <Text style={styles.questTitle}>HISTÓRIA</Text>

        <View style={styles.quests}>

          <Image source={Perg} style={styles.globo}/>

          <TouchableOpacity style={styles.questPlay} onPress={() => this.props.navigation.navigate('Fh')}>
            <Text style={styles.textPlay}>►</Text>
          </TouchableOpacity>

          <Text style={styles.textDific}>{`
Fixação
(fácil)
`}</Text>

        </View>

        <View style={styles.quests}>

          <Image source={Perg} style={styles.globo}/>

          <TouchableOpacity style={styles.questPlay} onPress={() => this.props.navigation.navigate('Mh')}>
            <Text style={styles.textPlay}>►</Text>
          </TouchableOpacity>

          <Text style={styles.textDific}>{`
Fixação
(médio)
`}</Text>

        </View>

        <View style={styles.quests}>

          <Image source={Perg} style={styles.globo}/>

          <TouchableOpacity style={styles.questPlay} onPress={() => this.props.navigation.navigate('Dh')}>
            <Text style={styles.textPlay}>►</Text>
          </TouchableOpacity>

          <Text style={styles.textDific}>{`
Fixação
(difícil)
`}</Text>

        </View>

        </View>
      </ScrollView>
    );
  }
}




class FacilG extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 22,
      padding: 8,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'GEOGRAFIA - FÁCIL',
  };

  constructor() {
    super();
    this.state={
      check11: false,
      check12: false,
      check13: false,
      check14: false,

      check21: false,
      check22: false,
      check23: false,
      check24: false,

      check31: false,
      check32: false,
      check33: false,
      check34: false,

      check41: false,
      check42: false,
      check43: false,
      check44: false,

      check51: false,
      check52: false,
      check53: false,
      check54: false,

      check61: false,
      check62: false,
      check63: false,
      check64: false,

      check71: false,
      check72: false,
      check73: false,
      check74: false,

      check81: false,
      check82: false,
      check83: false,
      check84: false,

      check91: false,
      check92: false,
      check93: false,
      check94: false,

      check101: false,
      check102: false,
      check103: false,
      check104: false,
    }
  }

  checkBox11 () {
    this.setState({
      check11: !this.state.check11,
      check12: false,
      check13: false,
      check14: false,
    })
  }

  checkBox12 () {
    this.setState({
      check12: !this.state.check12,
      check11: false,
      check13: false,
      check14: false,
    })
  }

  checkBox13 () {
    this.setState({
      check13: !this.state.check13,
      check12: false,
      check11: false,
      check14: false,
    })
  }

  checkBox14 () {
    this.setState({
      check14: !this.state.check14,
      check12: false,
      check13: false,
      check11: false,
    })
  }

  resposta1 () {
    if (this.state.check14) {
      alert(`Você acertou!`)
    } else if (this.state.check13 === false && this.state.check12 == false && this.state.check11 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }





  checkBox21 () {
    this.setState({
      check21: !this.state.check21,
      check22: false,
      check23: false,
      check24: false,
    })
  }

  checkBox22 () {
    this.setState({
      check22: !this.state.check22,
      check21: false,
      check23: false,
      check24: false,
    })
  }

  checkBox23 () {
    this.setState({
      check23: !this.state.check23,
      check22: false,
      check21: false,
      check24: false,
    })
  }

  checkBox24 () {
    this.setState({
      check24: !this.state.check24,
      check22: false,
      check23: false,
      check21: false,
    })
  }

  resposta2 () {
    if (this.state.check23) {
      alert(`Você acertou!`)
    } else if (this.state.check24 === false && this.state.check22 == false && this.state.check21 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }




  checkBox31 () {
    this.setState({
      check31: !this.state.check31,
      check32: false,
      check33: false,
      check34: false,
    })
  }

  checkBox32 () {
    this.setState({
      check32: !this.state.check32,
      check31: false,
      check33: false,
      check34: false,
    })
  }

  checkBox33 () {
    this.setState({
      check33: !this.state.check33,
      check32: false,
      check31: false,
      check34: false,
    })
  }

  checkBox34 () {
    this.setState({
      check34: !this.state.check34,
      check32: false,
      check33: false,
      check31: false,
    })
  }

  resposta3 () {
    if (this.state.check31) {
      alert(`Você acertou!`)
    } else if (this.state.check34 === false && this.state.check32 == false && this.state.check33 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }



  checkBox41 () {
    this.setState({
      check41: !this.state.check41,
      check42: false,
      check43: false,
      check44: false,
    })
  }

  checkBox42 () {
    this.setState({
      check42: !this.state.check42,
      check41: false,
      check43: false,
      check44: false,
    })
  }

  checkBox43 () {
    this.setState({
      check43: !this.state.check43,
      check42: false,
      check41: false,
      check44: false,
    })
  }

  checkBox44 () {
    this.setState({
      check44: !this.state.check44,
      check42: false,
      check43: false,
      check41: false,
    })
  }

  resposta4 () {
    if (this.state.check43) {
      alert(`Você acertou!`)
    } else if (this.state.check44 === false && this.state.check42 == false && this.state.check41 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox51 () {
    this.setState({
      check51: !this.state.check51,
      check52: false,
      check53: false,
      check54: false,
    })
  }

  checkBox52 () {
    this.setState({
      check52: !this.state.check52,
      check51: false,
      check53: false,
      check54: false,
    })
  }

  checkBox53 () {
    this.setState({
      check53: !this.state.check53,
      check52: false,
      check51: false,
      check54: false,
    })
  }

  checkBox54 () {
    this.setState({
      check54: !this.state.check54,
      check52: false,
      check53: false,
      check51: false,
    })
  }

  resposta5 () {
    if (this.state.check52) {
      alert(`Você acertou!`)
    } else if (this.state.check54 === false && this.state.check53 == false && this.state.check51 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox61 () {
    this.setState({
      check61: !this.state.check61,
      check62: false,
      check63: false,
      check64: false,
    })
  }

  checkBox62 () {
    this.setState({
      check62: !this.state.check62,
      check61: false,
      check63: false,
      check64: false,
    })
  }

  checkBox63 () {
    this.setState({
      check63: !this.state.check63,
      check62: false,
      check61: false,
      check64: false,
    })
  }

  checkBox64 () {
    this.setState({
      check64: !this.state.check64,
      check62: false,
      check63: false,
      check61: false,
    })
  }

  resposta6 () {
    if (this.state.check62) {
      alert(`Você acertou!`)
    } else if (this.state.check64 === false && this.state.check63 == false && this.state.check61 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox71 () {
    this.setState({
      check71: !this.state.check71,
      check72: false,
      check73: false,
      check74: false,
    })
  }

  checkBox72 () {
    this.setState({
      check72: !this.state.check72,
      check71: false,
      check73: false,
      check74: false,
    })
  }

  checkBox73 () {
    this.setState({
      check73: !this.state.check73,
      check72: false,
      check71: false,
      check74: false,
    })
  }

  checkBox74 () {
    this.setState({
      check74: !this.state.check74,
      check72: false,
      check73: false,
      check71: false,
    })
  }

  resposta7 () {
    if (this.state.check73) {
      alert(`Você acertou!`)
    } else if (this.state.check74 === false && this.state.check72 == false && this.state.check71 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox81 () {
    this.setState({
      check81: !this.state.check81,
      check82: false,
      check83: false,
      check84: false,
    })
  }

  checkBox82 () {
    this.setState({
      check82: !this.state.check82,
      check81: false,
      check83: false,
      check84: false,
    })
  }

  checkBox83 () {
    this.setState({
      check83: !this.state.check83,
      check82: false,
      check81: false,
      check84: false,
    })
  }

  checkBox84 () {
    this.setState({
      check84: !this.state.check84,
      check82: false,
      check83: false,
      check81: false,
    })
  }

  resposta8 () {
    if (this.state.check81) {
      alert(`Você acertou!`)
    } else if (this.state.check84 === false && this.state.check82 == false && this.state.check83 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }



  checkBox91 () {
    this.setState({
      check91: !this.state.check91,
      check92: false,
      check93: false,
      check94: false,
    })
  }

  checkBox92 () {
    this.setState({
      check92: !this.state.check92,
      check91: false,
      check93: false,
      check94: false,
    })
  }

  checkBox93 () {
    this.setState({
      check93: !this.state.check93,
      check92: false,
      check91: false,
      check94: false,
    })
  }

  checkBox94 () {
    this.setState({
      check94: !this.state.check94,
      check92: false,
      check93: false,
      check91: false,
    })
  }

  resposta9 () {
    if (this.state.check94) {
      alert(`Você acertou!`)
    } else if (this.state.check91 === false && this.state.check92 == false && this.state.check93 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox101 () {
    this.setState({
      check101: !this.state.check101,
      check102: false,
      check103: false,
      check104: false,
    })
  }

  checkBox102 () {
    this.setState({
      check102: !this.state.check102,
      check101: false,
      check103: false,
      check104: false,
    })
  }

  checkBox103 () {
    this.setState({
      check103: !this.state.check103,
      check102: false,
      check101: false,
      check104: false,
    })
  }

  checkBox104 () {
    this.setState({
      check104: !this.state.check104,
      check102: false,
      check103: false,
      check101: false,
    })
  }

  resposta10 () {
    if (this.state.check101) {
      alert(`Você acertou!`)
    } else if (this.state.check104 === false && this.state.check102 == false && this.state.check103 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }

  render () {

    return (
    <Swiper showsButtons={true} showsPagination={false} loop={false}>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 1</Text>
              <Text style={styles.txtPerguntas}>São características do clima subtropical, <Text style={styles.negrito}>EXCETO</Text>?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox11()}>
                <CheckBox style={styles.checkBox} value={this.state.check11} onChange={() => this.checkBox11()}/>
                <Text style={styles.txtResp}>Quantidade de chuvas inferior à do clima tropical</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox12()}>
                <CheckBox style={styles.checkBox} value={this.state.check12} onChange={() => this.checkBox12()}/>
                <Text style={styles.txtResp}>Todas as estações bem definidas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox13()}>
                <CheckBox style={styles.checkBox} value={this.state.check13} onChange={() => this.checkBox13()}/>
                <Text style={styles.txtResp}>Ocorrência ocasional de neve</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox14()}>
                <CheckBox style={styles.checkBox} value={this.state.check14} onChange={() => this.checkBox14()}/>
                <Text style={styles.txtResp}>Temperaturas amenas durante todo o ano</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta1.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 2</Text>
              <Text style={styles.txtPerguntas}>Qual o relevo predominante nas áreas litorâneas brasileiras?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox21()}>
                <CheckBox style={styles.checkBox} value={this.state.check21} onChange={() => this.checkBox21()}/>
                <Text style={styles.txtResp}>Depressões</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox22()}>
                <CheckBox style={styles.checkBox} value={this.state.check22} onChange={() => this.checkBox22()}/>
                <Text style={styles.txtResp}>Planaltos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox23()}>
                <CheckBox style={styles.checkBox} value={this.state.check23} onChange={() => this.checkBox23()}/>
                <Text style={styles.txtResp}>Planícies</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox24()}>
                <CheckBox style={styles.checkBox} value={this.state.check24} onChange={() => this.checkBox24()}/>
                <Text style={styles.txtResp}>Não há um relevo predominante nessas áreas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta2.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 3</Text>
              <Text style={styles.txtPerguntas}>Qual desses rios é importante por irrigar a região mais seca do país?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox31()}>
                <CheckBox style={styles.checkBox} value={this.state.check31} onChange={() => this.checkBox31()}/>
                <Text style={styles.txtResp}>São Francisco</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox32()}>
                <CheckBox style={styles.checkBox} value={this.state.check32} onChange={() => this.checkBox32()}/>
                <Text style={styles.txtResp}>Amazonas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox33()}>
                <CheckBox style={styles.checkBox} value={this.state.check33} onChange={() => this.checkBox33()}/>
                <Text style={styles.txtResp}>Tietê</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox34()}>
                <CheckBox style={styles.checkBox} value={this.state.check34} onChange={() => this.checkBox34()}/>
                <Text style={styles.txtResp}>Paraná</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta3.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 4</Text>
              <Text style={styles.txtPerguntas}>Qual o bioma brasileiro mais devastado?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox41()}>
                <CheckBox style={styles.checkBox} value={this.state.check41} onChange={() => this.checkBox41()}/>
                <Text style={styles.txtResp}>Pantanal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox42()}>
                <CheckBox style={styles.checkBox} value={this.state.check42} onChange={() => this.checkBox42()}/>
                <Text style={styles.txtResp}>Amazônia</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox43()}>
                <CheckBox style={styles.checkBox} value={this.state.check43} onChange={() => this.checkBox43()}/>
                <Text style={styles.txtResp}>Mata Atlântica</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox44()}>
                <CheckBox style={styles.checkBox} value={this.state.check44} onChange={() => this.checkBox44()}/>
                <Text style={styles.txtResp}>Caatinga</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta4.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 5</Text>
              <Text style={styles.txtPerguntas}>Em qual desses biomas podemos frenquentemente ver plantas com espinhos no lugar de folhas?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox51()}>
                <CheckBox style={styles.checkBox} value={this.state.check51} onChange={() => this.checkBox51()}/>
                <Text style={styles.txtResp}>Cerrado</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox52()}>
                <CheckBox style={styles.checkBox} value={this.state.check52} onChange={() => this.checkBox52()}/>
                <Text style={styles.txtResp}>Caatinga</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox53()}>
                <CheckBox style={styles.checkBox} value={this.state.check53} onChange={() => this.checkBox53()}/>
                <Text style={styles.txtResp}>Pantanal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox54()}>
                <CheckBox style={styles.checkBox} value={this.state.check54} onChange={() => this.checkBox54()}/>
                <Text style={styles.txtResp}>Pampa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta5.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 6</Text>
              <Text style={styles.txtPerguntas}>Qual dessas é uma característica em comum entre o clima equatorial e o clima subtropical?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox61()}>
                <CheckBox style={styles.checkBox} value={this.state.check61} onChange={() => this.checkBox61()}/>
                <Text style={styles.txtResp}>Baixa amplitude térmica</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox62()}>
                <CheckBox style={styles.checkBox} value={this.state.check62} onChange={() => this.checkBox62()}/>
                <Text style={styles.txtResp}>Chuvas bem distribuídas ao longo do ano</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox63()}>
                <CheckBox style={styles.checkBox} value={this.state.check63} onChange={() => this.checkBox63()}/>
                <Text style={styles.txtResp}>Quatro estações bem definidas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox64()}>
                <CheckBox style={styles.checkBox} value={this.state.check64} onChange={() => this.checkBox64()}/>
                <Text style={styles.txtResp}>Média pluviométrica anual elevada</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta6.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 7</Text>
              <Text style={styles.txtPerguntas}>Em qual região se concentra a maior quantidade de rios de grande porte?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox71()}>
                <CheckBox style={styles.checkBox} value={this.state.check71} onChange={() => this.checkBox71()}/>
                <Text style={styles.txtResp}>Nordeste</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox72()}>
                <CheckBox style={styles.checkBox} value={this.state.check72} onChange={() => this.checkBox72()}/>
                <Text style={styles.txtResp}>Sudeste</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox73()}>
                <CheckBox style={styles.checkBox} value={this.state.check73} onChange={() => this.checkBox73()}/>
                <Text style={styles.txtResp}>Norte</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox74()}>
                <CheckBox style={styles.checkBox} value={this.state.check74} onChange={() => this.checkBox74()}/>
                <Text style={styles.txtResp}>Centro-Oeste</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta7.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 8</Text>
              <Text style={styles.txtPerguntas}>Qual dos climas a seguir é o <Text style={styles.negrito}>menos</Text> úmido?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox81()}>
                <CheckBox style={styles.checkBox} value={this.state.check81} onChange={() => this.checkBox81()}/>
                <Text style={styles.txtResp}>Tropical de Altitude</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox82()}>
                <CheckBox style={styles.checkBox} value={this.state.check82} onChange={() => this.checkBox82()}/>
                <Text style={styles.txtResp}>Tropical</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox83()}>
                <CheckBox style={styles.checkBox} value={this.state.check83} onChange={() => this.checkBox83()}/>
                <Text style={styles.txtResp}>Tropical Atlântico</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox84()}>
                <CheckBox style={styles.checkBox} value={this.state.check84} onChange={() => this.checkBox84()}/>
                <Text style={styles.txtResp}>Equatorial</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta8.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 9</Text>
              <Text style={styles.txtPerguntas}>Qual desses biomas apresenta em sua vegetação árvores de grande porte?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox91()}>
                <CheckBox style={styles.checkBox} value={this.state.check91} onChange={() => this.checkBox91()}/>
                <Text style={styles.txtResp}>Pampa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox92()}>
                <CheckBox style={styles.checkBox} value={this.state.check92} onChange={() => this.checkBox92()}/>
                <Text style={styles.txtResp}>Cerrado</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox93()}>
                <CheckBox style={styles.checkBox} value={this.state.check93} onChange={() => this.checkBox93()}/>
                <Text style={styles.txtResp}>Caatinga</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox94()}>
                <CheckBox style={styles.checkBox} value={this.state.check94} onChange={() => this.checkBox94()}/>
                <Text style={styles.txtResp}>Nenhum dos citados</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta9.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 10</Text>
              <Text style={styles.txtPerguntas}>Qual o relevo predominante no Pantanal brasileiro?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox101()}>
                <CheckBox style={styles.checkBox} value={this.state.check101} onChange={() => this.checkBox101()}/>
                <Text style={styles.txtResp}>Planície</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox102()}>
                <CheckBox style={styles.checkBox} value={this.state.check102} onChange={() => this.checkBox102()}/>
                <Text style={styles.txtResp}>Depressão</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox103()}>
                <CheckBox style={styles.checkBox} value={this.state.check103} onChange={() => this.checkBox103()}/>
                <Text style={styles.txtResp}>Planalto</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox104()}>
                <CheckBox style={styles.checkBox} value={this.state.check104} onChange={() => this.checkBox104()}/>
                <Text style={styles.txtResp}>Não há um relevo predominante nessa área</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta10.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


      </Swiper>
    );
  }
}






class FacilH extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 22,
      padding: 8,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'HISTÓRIA - FÁCIL',
  };

  constructor() {
    super();
    this.state={
      check11: false,
      check12: false,
      check13: false,
      check14: false,

      check21: false,
      check22: false,
      check23: false,
      check24: false,

      check31: false,
      check32: false,
      check33: false,
      check34: false,

      check41: false,
      check42: false,
      check43: false,
      check44: false,

      check51: false,
      check52: false,
      check53: false,
      check54: false,

      check61: false,
      check62: false,
      check63: false,
      check64: false,

      check71: false,
      check72: false,
      check73: false,
      check74: false,

      check81: false,
      check82: false,
      check83: false,
      check84: false,

      check91: false,
      check92: false,
      check93: false,
      check94: false,

      check101: false,
      check102: false,
      check103: false,
      check104: false,
    }
  }

  checkBox11 () {
    this.setState({
      check11: !this.state.check11,
      check12: false,
      check13: false,
      check14: false,
    })
  }

  checkBox12 () {
    this.setState({
      check12: !this.state.check12,
      check11: false,
      check13: false,
      check14: false,
    })
  }

  checkBox13 () {
    this.setState({
      check13: !this.state.check13,
      check12: false,
      check11: false,
      check14: false,
    })
  }

  checkBox14 () {
    this.setState({
      check14: !this.state.check14,
      check12: false,
      check13: false,
      check11: false,
    })
  }

  resposta1 () {
    if (this.state.check11) {
      alert(`Você acertou!`)
    } else if (this.state.check13 === false && this.state.check12 == false && this.state.check14 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }





  checkBox21 () {
    this.setState({
      check21: !this.state.check21,
      check22: false,
      check23: false,
      check24: false,
    })
  }

  checkBox22 () {
    this.setState({
      check22: !this.state.check22,
      check21: false,
      check23: false,
      check24: false,
    })
  }

  checkBox23 () {
    this.setState({
      check23: !this.state.check23,
      check22: false,
      check21: false,
      check24: false,
    })
  }

  checkBox24 () {
    this.setState({
      check24: !this.state.check24,
      check22: false,
      check23: false,
      check21: false,
    })
  }

  resposta2 () {
    if (this.state.check24) {
      alert(`Você acertou!`)
    } else if (this.state.check23 === false && this.state.check22 == false && this.state.check21 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }




  checkBox31 () {
    this.setState({
      check31: !this.state.check31,
      check32: false,
      check33: false,
      check34: false,
    })
  }

  checkBox32 () {
    this.setState({
      check32: !this.state.check32,
      check31: false,
      check33: false,
      check34: false,
    })
  }

  checkBox33 () {
    this.setState({
      check33: !this.state.check33,
      check32: false,
      check31: false,
      check34: false,
    })
  }

  checkBox34 () {
    this.setState({
      check34: !this.state.check34,
      check32: false,
      check33: false,
      check31: false,
    })
  }

  resposta3 () {
    if (this.state.check32) {
      alert(`Você acertou!`)
    } else if (this.state.check34 === false && this.state.check31 == false && this.state.check33 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox41 () {
    this.setState({
      check41: !this.state.check41,
      check42: false,
      check43: false,
      check44: false,
    })
  }

  checkBox42 () {
    this.setState({
      check42: !this.state.check42,
      check41: false,
      check43: false,
      check44: false,
    })
  }

  checkBox43 () {
    this.setState({
      check43: !this.state.check43,
      check42: false,
      check41: false,
      check44: false,
    })
  }

  checkBox44 () {
    this.setState({
      check44: !this.state.check44,
      check42: false,
      check43: false,
      check41: false,
    })
  }

  resposta4 () {
    if (this.state.check44) {
      alert(`Você acertou!`)
    } else if (this.state.check43 === false && this.state.check42 == false && this.state.check41 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox51 () {
    this.setState({
      check51: !this.state.check51,
      check52: false,
      check53: false,
      check54: false,
    })
  }

  checkBox52 () {
    this.setState({
      check52: !this.state.check52,
      check51: false,
      check53: false,
      check54: false,
    })
  }

  checkBox53 () {
    this.setState({
      check53: !this.state.check53,
      check52: false,
      check51: false,
      check54: false,
    })
  }

  checkBox54 () {
    this.setState({
      check54: !this.state.check54,
      check52: false,
      check53: false,
      check51: false,
    })
  }

  resposta5 () {
    if (this.state.check54) {
      alert(`Você acertou!`)
    } else if (this.state.check52 === false && this.state.check53 == false && this.state.check51 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox61 () {
    this.setState({
      check61: !this.state.check61,
      check62: false,
      check63: false,
      check64: false,
    })
  }

  checkBox62 () {
    this.setState({
      check62: !this.state.check62,
      check61: false,
      check63: false,
      check64: false,
    })
  }

  checkBox63 () {
    this.setState({
      check63: !this.state.check63,
      check62: false,
      check61: false,
      check64: false,
    })
  }

  checkBox64 () {
    this.setState({
      check64: !this.state.check64,
      check62: false,
      check63: false,
      check61: false,
    })
  }

  resposta6 () {
    if (this.state.check62) {
      alert(`Você acertou!`)
    } else if (this.state.check64 === false && this.state.check63 == false && this.state.check61 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox71 () {
    this.setState({
      check71: !this.state.check71,
      check72: false,
      check73: false,
      check74: false,
    })
  }

  checkBox72 () {
    this.setState({
      check72: !this.state.check72,
      check71: false,
      check73: false,
      check74: false,
    })
  }

  checkBox73 () {
    this.setState({
      check73: !this.state.check73,
      check72: false,
      check71: false,
      check74: false,
    })
  }

  checkBox74 () {
    this.setState({
      check74: !this.state.check74,
      check72: false,
      check73: false,
      check71: false,
    })
  }

  resposta7 () {
    if (this.state.check73) {
      alert(`Você acertou!`)
    } else if (this.state.check74 === false && this.state.check72 == false && this.state.check71 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox81 () {
    this.setState({
      check81: !this.state.check81,
      check82: false,
      check83: false,
      check84: false,
    })
  }

  checkBox82 () {
    this.setState({
      check82: !this.state.check82,
      check81: false,
      check83: false,
      check84: false,
    })
  }

  checkBox83 () {
    this.setState({
      check83: !this.state.check83,
      check82: false,
      check81: false,
      check84: false,
    })
  }

  checkBox84 () {
    this.setState({
      check84: !this.state.check84,
      check82: false,
      check83: false,
      check81: false,
    })
  }

  resposta8 () {
    if (this.state.check83) {
      alert(`Você acertou!`)
    } else if (this.state.check84 === false && this.state.check82 == false && this.state.check81 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox91 () {
    this.setState({
      check91: !this.state.check91,
      check92: false,
      check93: false,
      check94: false,
    })
  }

  checkBox92 () {
    this.setState({
      check92: !this.state.check92,
      check91: false,
      check93: false,
      check94: false,
    })
  }

  checkBox93 () {
    this.setState({
      check93: !this.state.check93,
      check92: false,
      check91: false,
      check94: false,
    })
  }

  checkBox94 () {
    this.setState({
      check94: !this.state.check94,
      check92: false,
      check93: false,
      check91: false,
    })
  }

  resposta9 () {
    if (this.state.check94) {
      alert(`Você acertou!`)
    } else if (this.state.check91 === false && this.state.check92 == false && this.state.check93 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox101 () {
    this.setState({
      check101: !this.state.check101,
      check102: false,
      check103: false,
      check104: false,
    })
  }

  checkBox102 () {
    this.setState({
      check102: !this.state.check102,
      check101: false,
      check103: false,
      check104: false,
    })
  }

  checkBox103 () {
    this.setState({
      check103: !this.state.check103,
      check102: false,
      check101: false,
      check104: false,
    })
  }

  checkBox104 () {
    this.setState({
      check104: !this.state.check104,
      check102: false,
      check103: false,
      check101: false,
    })
  }

  resposta10 () {
    if (this.state.check102) {
      alert(`Você acertou!`)
    } else if (this.state.check104 === false && this.state.check101 == false && this.state.check103 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }

  render () {

    return (
    <Swiper showsButtons={true} showsPagination={false} loop={false}>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 1</Text>
              <Text style={styles.txtPerguntas}>Em 1548 foi implementado no Brasil o governo geral, por que isso ocorreu?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox11()}>
                <CheckBox style={styles.checkBox} value={this.state.check11} onChange={() => this.checkBox11()}/>
                <Text style={styles.txtResp}>Devido à ineficácia das capitanias hereditárias</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox12()}>
                <CheckBox style={styles.checkBox} value={this.state.check12} onChange={() => this.checkBox12()}/>
                <Text style={styles.txtResp}>Para facilitar e organizar o combate aos índios</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox13()}>
                <CheckBox style={styles.checkBox} value={this.state.check13} onChange={() => this.checkBox13()}/>
                <Text style={styles.txtResp}>Para facilitar a cobrança de impostos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox14()}>
                <CheckBox style={styles.checkBox} value={this.state.check14} onChange={() => this.checkBox14()}/>
                <Text style={styles.txtResp}>Foi a primeira medida para começar a ocupação do território brasileiro</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta1.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 2</Text>
              <Text style={styles.txtPerguntas}>O que foi o escambo, realizado entre portugueses e indígenas no começo da colonização brasileira?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox21()}>
                <CheckBox style={styles.checkBox} value={this.state.check21} onChange={() => this.checkBox21()}/>
                <Text style={styles.txtResp}>Catequização dos indíos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox22()}>
                <CheckBox style={styles.checkBox} value={this.state.check22} onChange={() => this.checkBox22()}/>
                <Text style={styles.txtResp}>Escravização dos índios para trabalho forçado</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox23()}>
                <CheckBox style={styles.checkBox} value={this.state.check23} onChange={() => this.checkBox23()}/>
                <Text style={styles.txtResp}>Doações de terras para índios para impedir a invasão de outros povos europeus</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox24()}>
                <CheckBox style={styles.checkBox} value={this.state.check24} onChange={() => this.checkBox24()}/>
                <Text style={styles.txtResp}>Uso de mão de obra de indíos em troca de utensilhos, como espelhos e chucalhos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta2.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 3</Text>
              <Text style={styles.txtPerguntas}>O que foi a União Ibérica?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox31()}>
                <CheckBox style={styles.checkBox} value={this.state.check31} onChange={() => this.checkBox31()}/>
                <Text style={styles.txtResp}>União dos portugueses com os Tupiniquins para combater os franceses</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox32()}>
                <CheckBox style={styles.checkBox} value={this.state.check32} onChange={() => this.checkBox32()}/>
                <Text style={styles.txtResp}>Período onde os reinos de Portugal e Espanha possuíam um mesmo rei</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox33()}>
                <CheckBox style={styles.checkBox} value={this.state.check33} onChange={() => this.checkBox33()}/>
                <Text style={styles.txtResp}>Acordo de paz entre Portugal e Espanha para a prosperidade das colônias</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox34()}>
                <CheckBox style={styles.checkBox} value={this.state.check34} onChange={() => this.checkBox34()}/>
                <Text style={styles.txtResp}>União dos portugueses com os espanhóis para combater os franceses</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta3.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 4</Text>
              <Text style={styles.txtPerguntas}>O que ocasionou a crise açucareira na segunda metade do século XVII?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox41()}>
                <CheckBox style={styles.checkBox} value={this.state.check41} onChange={() => this.checkBox41()}/>
                <Text style={styles.txtResp}>Falta de mão de obra</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox42()}>
                <CheckBox style={styles.checkBox} value={this.state.check42} onChange={() => this.checkBox42()}/>
                <Text style={styles.txtResp}>Falta de interesse, devido ao recente descobrimento do ouro</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox43()}>
                <CheckBox style={styles.checkBox} value={this.state.check43} onChange={() => this.checkBox43()}/>
                <Text style={styles.txtResp}>Boicote das outras nações europeias à Portugal e suas colônias</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox44()}>
                <CheckBox style={styles.checkBox} value={this.state.check44} onChange={() => this.checkBox44()}/>
                <Text style={styles.txtResp}>Concorrência com o açucar holandês produzido nas Antilhas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta4.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 5</Text>
              <Text style={styles.txtPerguntas}>O que provocou a migração de portugueses para o Brasil no final do século XVII e começo do século XVIII?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox51()}>
                <CheckBox style={styles.checkBox} value={this.state.check51} onChange={() => this.checkBox51()}/>
                <Text style={styles.txtResp}>Baixo custo das terras</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox52()}>
                <CheckBox style={styles.checkBox} value={this.state.check52} onChange={() => this.checkBox52()}/>
                <Text style={styles.txtResp}>Oportunidades de trabalho na área do comércio</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox53()}>
                <CheckBox style={styles.checkBox} value={this.state.check53} onChange={() => this.checkBox53()}/>
                <Text style={styles.txtResp}>Desemprego em Portugal e oportunidade de trabalho nos engenhos brasileiros</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox54()}>
                <CheckBox style={styles.checkBox} value={this.state.check54} onChange={() => this.checkBox54()}/>
                <Text style={styles.txtResp}>Descoberta do ouro</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta5.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 6</Text>
              <Text style={styles.txtPerguntas}>O imposto chamado de _______ era uma taxa de 20% sobre toda a extração de ouro. Já o imposto chamado de _______ era a cobrança sobre escravos, pessoas livres e comerciantes que trabalhassem por conta própia. Enquanto a _______ era o confisco de bens e objetos de ouro para atingir a meta de arrecadação da metrópole. As palavras que completam corretamente as lacunas são, respectivamente:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox61()}>
                <CheckBox style={styles.checkBox} value={this.state.check61} onChange={() => this.checkBox61()}/>
                <Text style={styles.txtResp}>Quinto, Derrama e Capitação</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox62()}>
                <CheckBox style={styles.checkBox} value={this.state.check62} onChange={() => this.checkBox62()}/>
                <Text style={styles.txtResp}>Quinto, Capitação e Derrama</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox63()}>
                <CheckBox style={styles.checkBox} value={this.state.check63} onChange={() => this.checkBox63()}/>
                <Text style={styles.txtResp}>Derrama, Quinto e Capitação</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox64()}>
                <CheckBox style={styles.checkBox} value={this.state.check64} onChange={() => this.checkBox64()}/>
                <Text style={styles.txtResp}>Capitação, Quinto e Derrama</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta6.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 7</Text>
              <Text style={styles.txtPerguntas}>Entre 1707 e 1709 ocorreu um conflito entre bandeirantes paulistas e um grupo de portugueses e migrantes pelo direito de exploração das recém-descobertas jazidas de ouro na região de Minas Gerais, esse conflito ficou conhecido como:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox71()}>
                <CheckBox style={styles.checkBox} value={this.state.check71} onChange={() => this.checkBox71()}/>
                <Text style={styles.txtResp}>Guerra dos Mascates</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox72()}>
                <CheckBox style={styles.checkBox} value={this.state.check72} onChange={() => this.checkBox72()}/>
                <Text style={styles.txtResp}>Revolta de Beckman</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox73()}>
                <CheckBox style={styles.checkBox} value={this.state.check73} onChange={() => this.checkBox73()}/>
                <Text style={styles.txtResp}>Guerra dos Emboabas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox74()}>
                <CheckBox style={styles.checkBox} value={this.state.check74} onChange={() => this.checkBox74()}/>
                <Text style={styles.txtResp}>Revolta de Vila Rica</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta7.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 8</Text>
              <Text style={styles.txtPerguntas}>Qual foi o principal motivo para a mudança de capital de Salvador para o Rio de Janeiro em 1763?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox81()}>
                <CheckBox style={styles.checkBox} value={this.state.check81} onChange={() => this.checkBox81()}/>
                <Text style={styles.txtResp}>Acalmar as revoltas que eclodiam na região sudeste</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox82()}>
                <CheckBox style={styles.checkBox} value={this.state.check82} onChange={() => this.checkBox82()}/>
                <Text style={styles.txtResp}>Era uma posição estratégica contra as frequentes invasões francesas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox83()}>
                <CheckBox style={styles.checkBox} value={this.state.check83} onChange={() => this.checkBox83()}/>
                <Text style={styles.txtResp}>Descolamento do eixo econômico para essa região devido à exploração do ouro</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox84()}>
                <CheckBox style={styles.checkBox} value={this.state.check84} onChange={() => this.checkBox84()}/>
                <Text style={styles.txtResp}>Simplesmente era uma cidade mais desenvolvida que Salvador</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta8.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 9</Text>
              <Text style={styles.txtPerguntas}>Todos eram objetivos da Inconfidência Mineira, <Text style={styles.negrito}>EXCETO</Text>?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox91()}>
                <CheckBox style={styles.checkBox} value={this.state.check91} onChange={() => this.checkBox91()}/>
                <Text style={styles.txtResp}>Criar um novo país na região de Minas Gerais</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox92()}>
                <CheckBox style={styles.checkBox} value={this.state.check92} onChange={() => this.checkBox92()}/>
                <Text style={styles.txtResp}>Acabar com o monopólio	comercial português</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox93()}>
                <CheckBox style={styles.checkBox} value={this.state.check93} onChange={() => this.checkBox93()}/>
                <Text style={styles.txtResp}>Liberar e favorecer a implantação de manufaturas no Brasil</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox94()}>
                <CheckBox style={styles.checkBox} value={this.state.check94} onChange={() => this.checkBox94()}/>
                <Text style={styles.txtResp}>Todos os citados são objetivos da Inconfidência Mineira</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta9.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 10</Text>
              <Text style={styles.txtPerguntas}>Todas são semelhanças entre a Conjuração Baiana e a Inconfidência Mineira, <Text style={styles.negrito}>EXCETO</Text>?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox101()}>
                <CheckBox style={styles.checkBox} value={this.state.check101} onChange={() => this.checkBox101()}/>
                <Text style={styles.txtResp}>Ambas foram delatadas antes de ocorrerem</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox102()}>
                <CheckBox style={styles.checkBox} value={this.state.check102} onChange={() => this.checkBox102()}/>
                <Text style={styles.txtResp}>Ambas eram separatistas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox103()}>
                <CheckBox style={styles.checkBox} value={this.state.check103} onChange={() => this.checkBox103()}/>
                <Text style={styles.txtResp}>Ambas defendiam liberdade comercial</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox104()}>
                <CheckBox style={styles.checkBox} value={this.state.check104} onChange={() => this.checkBox104()}/>
                <Text style={styles.txtResp}>Ambas tiveram seus líderes enforcados</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta10.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


      </Swiper>
    );
  }
}




class MedioG extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 22,
      padding: 8,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'GEOGRAFIA - MÉDIO',
  };

  constructor() {
    super();
    this.state={
      check11: false,
      check12: false,
      check13: false,
      check14: false,

      check21: false,
      check22: false,
      check23: false,
      check24: false,

      check31: false,
      check32: false,
      check33: false,
      check34: false,

      check41: false,
      check42: false,
      check43: false,
      check44: false,

      check51: false,
      check52: false,
      check53: false,
      check54: false,

      check61: false,
      check62: false,
      check63: false,
      check64: false,

      check71: false,
      check72: false,
      check73: false,
      check74: false,

      check81: false,
      check82: false,
      check83: false,
      check84: false,

      check91: false,
      check92: false,
      check93: false,
      check94: false,

      check101: false,
      check102: false,
      check103: false,
      check104: false,
    }
  }

  checkBox11 () {
    this.setState({
      check11: !this.state.check11,
      check12: false,
      check13: false,
      check14: false,
    })
  }

  checkBox12 () {
    this.setState({
      check12: !this.state.check12,
      check11: false,
      check13: false,
      check14: false,
    })
  }

  checkBox13 () {
    this.setState({
      check13: !this.state.check13,
      check12: false,
      check11: false,
      check14: false,
    })
  }

  checkBox14 () {
    this.setState({
      check14: !this.state.check14,
      check12: false,
      check13: false,
      check11: false,
    })
  }

  resposta1 () {
    if (this.state.check11) {
      alert(`Você acertou!`)
    } else if (this.state.check13 === false && this.state.check12 == false && this.state.check14 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }





  checkBox21 () {
    this.setState({
      check21: !this.state.check21,
      check22: false,
      check23: false,
      check24: false,
    })
  }

  checkBox22 () {
    this.setState({
      check22: !this.state.check22,
      check21: false,
      check23: false,
      check24: false,
    })
  }

  checkBox23 () {
    this.setState({
      check23: !this.state.check23,
      check22: false,
      check21: false,
      check24: false,
    })
  }

  checkBox24 () {
    this.setState({
      check24: !this.state.check24,
      check22: false,
      check23: false,
      check21: false,
    })
  }

  resposta2 () {
    if (this.state.check22) {
      alert(`Você acertou!`)
    } else if (this.state.check24 === false && this.state.check23 == false && this.state.check21 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }




  checkBox31 () {
    this.setState({
      check31: !this.state.check31,
      check32: false,
      check33: false,
      check34: false,
    })
  }

  checkBox32 () {
    this.setState({
      check32: !this.state.check32,
      check31: false,
      check33: false,
      check34: false,
    })
  }

  checkBox33 () {
    this.setState({
      check33: !this.state.check33,
      check32: false,
      check31: false,
      check34: false,
    })
  }

  checkBox34 () {
    this.setState({
      check34: !this.state.check34,
      check32: false,
      check33: false,
      check31: false,
    })
  }

  resposta3 () {
    if (this.state.check32) {
      alert(`Você acertou!`)
    } else if (this.state.check34 === false && this.state.check31 == false && this.state.check33 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox41 () {
    this.setState({
      check41: !this.state.check41,
      check42: false,
      check43: false,
      check44: false,
    })
  }

  checkBox42 () {
    this.setState({
      check42: !this.state.check42,
      check41: false,
      check43: false,
      check44: false,
    })
  }

  checkBox43 () {
    this.setState({
      check43: !this.state.check43,
      check42: false,
      check41: false,
      check44: false,
    })
  }

  checkBox44 () {
    this.setState({
      check44: !this.state.check44,
      check42: false,
      check43: false,
      check41: false,
    })
  }

  resposta4 () {
    if (this.state.check43) {
      alert(`Você acertou!`)
    } else if (this.state.check44 === false && this.state.check42 == false && this.state.check41 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox51 () {
    this.setState({
      check51: !this.state.check51,
      check52: false,
      check53: false,
      check54: false,
    })
  }

  checkBox52 () {
    this.setState({
      check52: !this.state.check52,
      check51: false,
      check53: false,
      check54: false,
    })
  }

  checkBox53 () {
    this.setState({
      check53: !this.state.check53,
      check52: false,
      check51: false,
      check54: false,
    })
  }

  checkBox54 () {
    this.setState({
      check54: !this.state.check54,
      check52: false,
      check53: false,
      check51: false,
    })
  }

  resposta5 () {
    if (this.state.check51) {
      alert(`Você acertou!`)
    } else if (this.state.check54 === false && this.state.check53 == false && this.state.check52 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }



  checkBox61 () {
    this.setState({
      check61: !this.state.check61,
      check62: false,
      check63: false,
      check64: false,
    })
  }

  checkBox62 () {
    this.setState({
      check62: !this.state.check62,
      check61: false,
      check63: false,
      check64: false,
    })
  }

  checkBox63 () {
    this.setState({
      check63: !this.state.check63,
      check62: false,
      check61: false,
      check64: false,
    })
  }

  checkBox64 () {
    this.setState({
      check64: !this.state.check64,
      check62: false,
      check63: false,
      check61: false,
    })
  }

  resposta6 () {
    if (this.state.check62) {
      alert(`Você acertou!`)
    } else if (this.state.check64 === false && this.state.check63 == false && this.state.check61 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox71 () {
    this.setState({
      check71: !this.state.check71,
      check72: false,
      check73: false,
      check74: false,
    })
  }

  checkBox72 () {
    this.setState({
      check72: !this.state.check72,
      check71: false,
      check73: false,
      check74: false,
    })
  }

  checkBox73 () {
    this.setState({
      check73: !this.state.check73,
      check72: false,
      check71: false,
      check74: false,
    })
  }

  checkBox74 () {
    this.setState({
      check74: !this.state.check74,
      check72: false,
      check73: false,
      check71: false,
    })
  }

  resposta7 () {
    if (this.state.check74) {
      alert(`Você acertou!`)
    } else if (this.state.check73 === false && this.state.check72 == false && this.state.check71 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox81 () {
    this.setState({
      check81: !this.state.check81,
      check82: false,
      check83: false,
      check84: false,
    })
  }

  checkBox82 () {
    this.setState({
      check82: !this.state.check82,
      check81: false,
      check83: false,
      check84: false,
    })
  }

  checkBox83 () {
    this.setState({
      check83: !this.state.check83,
      check82: false,
      check81: false,
      check84: false,
    })
  }

  checkBox84 () {
    this.setState({
      check84: !this.state.check84,
      check82: false,
      check83: false,
      check81: false,
    })
  }

  resposta8 () {
    if (this.state.check84) {
      alert(`Você acertou!`)
    } else if (this.state.check82 === false && this.state.check81 == false && this.state.check83 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox91 () {
    this.setState({
      check91: !this.state.check91,
      check92: false,
      check93: false,
      check94: false,
    })
  }

  checkBox92 () {
    this.setState({
      check92: !this.state.check92,
      check91: false,
      check93: false,
      check94: false,
    })
  }

  checkBox93 () {
    this.setState({
      check93: !this.state.check93,
      check92: false,
      check91: false,
      check94: false,
    })
  }

  checkBox94 () {
    this.setState({
      check94: !this.state.check94,
      check92: false,
      check93: false,
      check91: false,
    })
  }

  resposta9 () {
    if (this.state.check93) {
      alert(`Você acertou!`)
    } else if (this.state.check91 === false && this.state.check92 == false && this.state.check94 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox101 () {
    this.setState({
      check101: !this.state.check101,
      check102: false,
      check103: false,
      check104: false,
    })
  }

  checkBox102 () {
    this.setState({
      check102: !this.state.check102,
      check101: false,
      check103: false,
      check104: false,
    })
  }

  checkBox103 () {
    this.setState({
      check103: !this.state.check103,
      check102: false,
      check101: false,
      check104: false,
    })
  }

  checkBox104 () {
    this.setState({
      check104: !this.state.check104,
      check102: false,
      check103: false,
      check101: false,
    })
  }

  resposta10 () {
    if (this.state.check101) {
      alert(`Você acertou!`)
    } else if (this.state.check104 === false && this.state.check102 == false && this.state.check103 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }

  render () {

    return (
    <Swiper showsButtons={true} showsPagination={false} loop={false}>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 1</Text>
              <Text style={styles.txtPerguntas}>Por que a região do Pantanal se alaga durante períodos mais chuvosos?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox11()}>
                <CheckBox style={styles.checkBox} value={this.state.check11} onChange={() => this.checkBox11()}/>
                <Text style={styles.txtResp}>Pois é composto quase que exclusivamente por planícies</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox12()}>
                <CheckBox style={styles.checkBox} value={this.state.check12} onChange={() => this.checkBox12()}/>
                <Text style={styles.txtResp}>Pois apresenta os maiores índices pluviométricos do Brasil</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox13()}>
                <CheckBox style={styles.checkBox} value={this.state.check13} onChange={() => this.checkBox13()}/>
                <Text style={styles.txtResp}>Devido aos solos completamente impermeáveis</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox14()}>
                <CheckBox style={styles.checkBox} value={this.state.check14} onChange={() => this.checkBox14()}/>
                <Text style={styles.txtResp}>Devido à grande quantidade de rios, que transbordam com as chuvas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta1.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 2</Text>
              <Text style={styles.txtPerguntas}>Qual desses elementos naturais mais contribui para a geração de energia no Brasil?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox21()}>
                <CheckBox style={styles.checkBox} value={this.state.check21} onChange={() => this.checkBox21()}/>
                <Text style={styles.txtResp}>Ventos intensos, que contribuem com energia eólica</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox22()}>
                <CheckBox style={styles.checkBox} value={this.state.check22} onChange={() => this.checkBox22()}/>
                <Text style={styles.txtResp}>Rios, que contribuem com energia hidrelétrica</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox23()}>
                <CheckBox style={styles.checkBox} value={this.state.check23} onChange={() => this.checkBox23()}/>
                <Text style={styles.txtResp}>Clima quente, que contribui com energia solar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox24()}>
                <CheckBox style={styles.checkBox} value={this.state.check24} onChange={() => this.checkBox24()}/>
                <Text style={styles.txtResp}>Períodos de seca, que contribuem com energia solar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta2.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 3</Text>
              <Text style={styles.txtPerguntas}>O que torna necessária a troca de folhas por espinhos, que ocorre nas plantas da Caatinga?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox31()}>
                <CheckBox style={styles.checkBox} value={this.state.check31} onChange={() => this.checkBox31()}/>
                <Text style={styles.txtResp}>O solo pedregoso</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox32()}>
                <CheckBox style={styles.checkBox} value={this.state.check32} onChange={() => this.checkBox32()}/>
                <Text style={styles.txtResp}>A baixa pluviosidade</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox33()}>
                <CheckBox style={styles.checkBox} value={this.state.check33} onChange={() => this.checkBox33()}/>
                <Text style={styles.txtResp}>A grande quantidade de animais herbívoros na região</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox34()}>
                <CheckBox style={styles.checkBox} value={this.state.check34} onChange={() => this.checkBox34()}/>
                <Text style={styles.txtResp}>Não há um motivo específico para esse fenômeno</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta3.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 4</Text>
              <Text style={styles.txtPerguntas}>O que causa a diferença de pluviosidade entre o clima Tropical e o clima Tropical Atlântico?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox41()}>
                <CheckBox style={styles.checkBox} value={this.state.check41} onChange={() => this.checkBox41()}/>
                <Text style={styles.txtResp}>A diferença de altitude, maior no clima Tropical</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox42()}>
                <CheckBox style={styles.checkBox} value={this.state.check42} onChange={() => this.checkBox42()}/>
                <Text style={styles.txtResp}>A vegetação, de maior porte no Tropical Atlântico</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox43()}>
                <CheckBox style={styles.checkBox} value={this.state.check43} onChange={() => this.checkBox43()}/>
                <Text style={styles.txtResp}>Os ventos úmidos vindos do oceano, influentes no Tropical Atlântico</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox44()}>
                <CheckBox style={styles.checkBox} value={this.state.check44} onChange={() => this.checkBox44()}/>
                <Text style={styles.txtResp}>A maior evaporação no Tropical Atlântico, devido aos rios</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta4.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 5</Text>
              <Text style={styles.txtPerguntas}>Qual a principal fonte de poluição do Rio Tietê?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox51()}>
                <CheckBox style={styles.checkBox} value={this.state.check51} onChange={() => this.checkBox51()}/>
                <Text style={styles.txtResp}>Lixo e esgoto não tratado da cidade de São Paulo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox52()}>
                <CheckBox style={styles.checkBox} value={this.state.check52} onChange={() => this.checkBox52()}/>
                <Text style={styles.txtResp}>Defensivos agrícolas usados por grandes monoculturas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox53()}>
                <CheckBox style={styles.checkBox} value={this.state.check53} onChange={() => this.checkBox53()}/>
                <Text style={styles.txtResp}>Poluição que vem de seus afluentes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox54()}>
                <CheckBox style={styles.checkBox} value={this.state.check54} onChange={() => this.checkBox54()}/>
                <Text style={styles.txtResp}>Não se trata de um rio poluído</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta5.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 6</Text>
              <Text style={styles.txtPerguntas}>Todos os climas a seguir tem a maior parte de suas chuvas concentradas no verão, <Text style={styles.negrito}>EXCETO</Text>?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox61()}>
                <CheckBox style={styles.checkBox} value={this.state.check61} onChange={() => this.checkBox61()}/>
                <Text style={styles.txtResp}>Tropical de Altitude</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox62()}>
                <CheckBox style={styles.checkBox} value={this.state.check62} onChange={() => this.checkBox62()}/>
                <Text style={styles.txtResp}>Tropical Atlântico</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox63()}>
                <CheckBox style={styles.checkBox} value={this.state.check63} onChange={() => this.checkBox63()}/>
                <Text style={styles.txtResp}>Semiárido</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox64()}>
                <CheckBox style={styles.checkBox} value={this.state.check64} onChange={() => this.checkBox64()}/>
                <Text style={styles.txtResp}>Tropical</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta6.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 7</Text>
              <Text style={styles.txtPerguntas}>No geral, podemos dizer que a Região Sul possui um clima:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox71()}>
                <CheckBox style={styles.checkBox} value={this.state.check71} onChange={() => this.checkBox71()}/>
                <Text style={styles.txtResp}>Quente e úmido</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox72()}>
                <CheckBox style={styles.checkBox} value={this.state.check72} onChange={() => this.checkBox72()}/>
                <Text style={styles.txtResp}>Seco e com temperaturas muito variáveis</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox73()}>
                <CheckBox style={styles.checkBox} value={this.state.check73} onChange={() => this.checkBox73()}/>
                <Text style={styles.txtResp}>Frio e com pluviosidade moderada</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox74()}>
                <CheckBox style={styles.checkBox} value={this.state.check74} onChange={() => this.checkBox74()}/>
                <Text style={styles.txtResp}>Com pluviosidade moderada e temperaturas muito variáveis</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta7.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 8</Text>
              <Text style={styles.txtPerguntas}>Qual dos biomas a seguir possui predominantemente uma vegetação de pequeno porte?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox81()}>
                <CheckBox style={styles.checkBox} value={this.state.check81} onChange={() => this.checkBox81()}/>
                <Text style={styles.txtResp}>Pampa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox82()}>
                <CheckBox style={styles.checkBox} value={this.state.check82} onChange={() => this.checkBox82()}/>
                <Text style={styles.txtResp}>Cerrado</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox83()}>
                <CheckBox style={styles.checkBox} value={this.state.check83} onChange={() => this.checkBox83()}/>
                <Text style={styles.txtResp}>Caatinga</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox84()}>
                <CheckBox style={styles.checkBox} value={this.state.check84} onChange={() => this.checkBox84()}/>
                <Text style={styles.txtResp}>Todos os citados</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta8.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 9</Text>
              <Text style={styles.txtPerguntas}>Na região de atuação do clima Tropical Atlântico predominam as planícies, por que isso ocorre?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox91()}>
                <CheckBox style={styles.checkBox} value={this.state.check91} onChange={() => this.checkBox91()}/>
                <Text style={styles.txtResp}>Devido à alta pluviosidade, que através da erosão reduziu a altitude</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox92()}>
                <CheckBox style={styles.checkBox} value={this.state.check92} onChange={() => this.checkBox92()}/>
                <Text style={styles.txtResp}>Os ventos vindos do oceano, através da erosão reduziram a altitude</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox93()}>
                <CheckBox style={styles.checkBox} value={this.state.check93} onChange={() => this.checkBox93()}/>
                <Text style={styles.txtResp}>Ambos se localizam no litoral, cuja altitude é a do nível do mar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox94()}>
                <CheckBox style={styles.checkBox} value={this.state.check94} onChange={() => this.checkBox94()}/>
                <Text style={styles.txtResp}>É mera coincidência</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta9.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 10</Text>
              <Text style={styles.txtPerguntas}>Por que os Pampas são muito usados para pastagem de gado?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox101()}>
                <CheckBox style={styles.checkBox} value={this.state.check101} onChange={() => this.checkBox101()}/>
                <Text style={styles.txtResp}>Devido à predominância de planícies e gramíneas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox102()}>
                <CheckBox style={styles.checkBox} value={this.state.check102} onChange={() => this.checkBox102()}/>
                <Text style={styles.txtResp}>Pois a carne vermelha é muito popular na região sul</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox103()}>
                <CheckBox style={styles.checkBox} value={this.state.check103} onChange={() => this.checkBox103()}/>
                <Text style={styles.txtResp}>Pois a vegetação não depende de chuvas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox104()}>
                <CheckBox style={styles.checkBox} value={this.state.check104} onChange={() => this.checkBox104()}/>
                <Text style={styles.txtResp}>Pois sua vegetação nativa é o alimento perfeito para o gado</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta10.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


      </Swiper>
    );
  }
}




class MedioH extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 22,
      padding: 8,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'HISTÓRIA - MÉDIO',
  };

  constructor() {
    super();
    this.state={
      check11: false,
      check12: false,
      check13: false,
      check14: false,

      check21: false,
      check22: false,
      check23: false,
      check24: false,

      check31: false,
      check32: false,
      check33: false,
      check34: false,

      check41: false,
      check42: false,
      check43: false,
      check44: false,

      check51: false,
      check52: false,
      check53: false,
      check54: false,

      check61: false,
      check62: false,
      check63: false,
      check64: false,

      check71: false,
      check72: false,
      check73: false,
      check74: false,

      check81: false,
      check82: false,
      check83: false,
      check84: false,

      check91: false,
      check92: false,
      check93: false,
      check94: false,

      check101: false,
      check102: false,
      check103: false,
      check104: false,
    }
  }

  checkBox11 () {
    this.setState({
      check11: !this.state.check11,
      check12: false,
      check13: false,
      check14: false,
    })
  }

  checkBox12 () {
    this.setState({
      check12: !this.state.check12,
      check11: false,
      check13: false,
      check14: false,
    })
  }

  checkBox13 () {
    this.setState({
      check13: !this.state.check13,
      check12: false,
      check11: false,
      check14: false,
    })
  }

  checkBox14 () {
    this.setState({
      check14: !this.state.check14,
      check12: false,
      check13: false,
      check11: false,
    })
  }

  resposta1 () {
    if (this.state.check13) {
      alert(`Você acertou!`)
    } else if (this.state.check14 === false && this.state.check12 == false && this.state.check11 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }





  checkBox21 () {
    this.setState({
      check21: !this.state.check21,
      check22: false,
      check23: false,
      check24: false,
    })
  }

  checkBox22 () {
    this.setState({
      check22: !this.state.check22,
      check21: false,
      check23: false,
      check24: false,
    })
  }

  checkBox23 () {
    this.setState({
      check23: !this.state.check23,
      check22: false,
      check21: false,
      check24: false,
    })
  }

  checkBox24 () {
    this.setState({
      check24: !this.state.check24,
      check22: false,
      check23: false,
      check21: false,
    })
  }

  resposta2 () {
    if (this.state.check24) {
      alert(`Você acertou!`)
    } else if (this.state.check23 === false && this.state.check22 == false && this.state.check21 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }




  checkBox31 () {
    this.setState({
      check31: !this.state.check31,
      check32: false,
      check33: false,
      check34: false,
    })
  }

  checkBox32 () {
    this.setState({
      check32: !this.state.check32,
      check31: false,
      check33: false,
      check34: false,
    })
  }

  checkBox33 () {
    this.setState({
      check33: !this.state.check33,
      check32: false,
      check31: false,
      check34: false,
    })
  }

  checkBox34 () {
    this.setState({
      check34: !this.state.check34,
      check32: false,
      check33: false,
      check31: false,
    })
  }

  resposta3 () {
    if (this.state.check31) {
      alert(`Você acertou!`)
    } else if (this.state.check34 === false && this.state.check32 == false && this.state.check33 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }



  checkBox41 () {
    this.setState({
      check41: !this.state.check41,
      check42: false,
      check43: false,
      check44: false,
    })
  }

  checkBox42 () {
    this.setState({
      check42: !this.state.check42,
      check41: false,
      check43: false,
      check44: false,
    })
  }

  checkBox43 () {
    this.setState({
      check43: !this.state.check43,
      check42: false,
      check41: false,
      check44: false,
    })
  }

  checkBox44 () {
    this.setState({
      check44: !this.state.check44,
      check42: false,
      check43: false,
      check41: false,
    })
  }

  resposta4 () {
    if (this.state.check43) {
      alert(`Você acertou!`)
    } else if (this.state.check44 === false && this.state.check42 == false && this.state.check41 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox51 () {
    this.setState({
      check51: !this.state.check51,
      check52: false,
      check53: false,
      check54: false,
    })
  }

  checkBox52 () {
    this.setState({
      check52: !this.state.check52,
      check51: false,
      check53: false,
      check54: false,
    })
  }

  checkBox53 () {
    this.setState({
      check53: !this.state.check53,
      check52: false,
      check51: false,
      check54: false,
    })
  }

  checkBox54 () {
    this.setState({
      check54: !this.state.check54,
      check52: false,
      check53: false,
      check51: false,
    })
  }

  resposta5 () {
    if (this.state.check52) {
      alert(`Você acertou!`)
    } else if (this.state.check54 === false && this.state.check53 == false && this.state.check51 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox61 () {
    this.setState({
      check61: !this.state.check61,
      check62: false,
      check63: false,
      check64: false,
    })
  }

  checkBox62 () {
    this.setState({
      check62: !this.state.check62,
      check61: false,
      check63: false,
      check64: false,
    })
  }

  checkBox63 () {
    this.setState({
      check63: !this.state.check63,
      check62: false,
      check61: false,
      check64: false,
    })
  }

  checkBox64 () {
    this.setState({
      check64: !this.state.check64,
      check62: false,
      check63: false,
      check61: false,
    })
  }

  resposta6 () {
    if (this.state.check64) {
      alert(`Você acertou!`)
    } else if (this.state.check62 === false && this.state.check63 == false && this.state.check61 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox71 () {
    this.setState({
      check71: !this.state.check71,
      check72: false,
      check73: false,
      check74: false,
    })
  }

  checkBox72 () {
    this.setState({
      check72: !this.state.check72,
      check71: false,
      check73: false,
      check74: false,
    })
  }

  checkBox73 () {
    this.setState({
      check73: !this.state.check73,
      check72: false,
      check71: false,
      check74: false,
    })
  }

  checkBox74 () {
    this.setState({
      check74: !this.state.check74,
      check72: false,
      check73: false,
      check71: false,
    })
  }

  resposta7 () {
    if (this.state.check73) {
      alert(`Você acertou!`)
    } else if (this.state.check74 === false && this.state.check72 == false && this.state.check71 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox81 () {
    this.setState({
      check81: !this.state.check81,
      check82: false,
      check83: false,
      check84: false,
    })
  }

  checkBox82 () {
    this.setState({
      check82: !this.state.check82,
      check81: false,
      check83: false,
      check84: false,
    })
  }

  checkBox83 () {
    this.setState({
      check83: !this.state.check83,
      check82: false,
      check81: false,
      check84: false,
    })
  }

  checkBox84 () {
    this.setState({
      check84: !this.state.check84,
      check82: false,
      check83: false,
      check81: false,
    })
  }

  resposta8 () {
    if (this.state.check82) {
      alert(`Você acertou!`)
    } else if (this.state.check84 === false && this.state.check81 == false && this.state.check83 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }



  checkBox91 () {
    this.setState({
      check91: !this.state.check91,
      check92: false,
      check93: false,
      check94: false,
    })
  }

  checkBox92 () {
    this.setState({
      check92: !this.state.check92,
      check91: false,
      check93: false,
      check94: false,
    })
  }

  checkBox93 () {
    this.setState({
      check93: !this.state.check93,
      check92: false,
      check91: false,
      check94: false,
    })
  }

  checkBox94 () {
    this.setState({
      check94: !this.state.check94,
      check92: false,
      check93: false,
      check91: false,
    })
  }

  resposta9 () {
    if (this.state.check93) {
      alert(`Você acertou!`)
    } else if (this.state.check91 === false && this.state.check92 == false && this.state.check94 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox101 () {
    this.setState({
      check101: !this.state.check101,
      check102: false,
      check103: false,
      check104: false,
    })
  }

  checkBox102 () {
    this.setState({
      check102: !this.state.check102,
      check101: false,
      check103: false,
      check104: false,
    })
  }

  checkBox103 () {
    this.setState({
      check103: !this.state.check103,
      check102: false,
      check101: false,
      check104: false,
    })
  }

  checkBox104 () {
    this.setState({
      check104: !this.state.check104,
      check102: false,
      check103: false,
      check101: false,
    })
  }

  resposta10 () {
    if (this.state.check102) {
      alert(`Você acertou!`)
    } else if (this.state.check104 === false && this.state.check101 == false && this.state.check103 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }

  render () {

    return (
    <Swiper showsButtons={true} showsPagination={false} loop={false}>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 1</Text>
              <Text style={styles.txtPerguntas}>Qual característica do pau-brasil o tornava um produto de interesse comercial dos portugueses?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox11()}>
                <CheckBox style={styles.checkBox} value={this.state.check11} onChange={() => this.checkBox11()}/>
                <Text style={styles.txtResp}>Sua madeira é excelente para construção de mobília</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox12()}>
                <CheckBox style={styles.checkBox} value={this.state.check12} onChange={() => this.checkBox12()}/>
                <Text style={styles.txtResp}>Sua madeira, extremamente resistente, contribuiria na construção de embarcações</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox13()}>
                <CheckBox style={styles.checkBox} value={this.state.check13} onChange={() => this.checkBox13()}/>
                <Text style={styles.txtResp}>De sua madeira é possível extrair um corante de alto valor na época</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox14()}>
                <CheckBox style={styles.checkBox} value={this.state.check14} onChange={() => this.checkBox14()}/>
                <Text style={styles.txtResp}>O fato de ser uma espécie até então desconhecida</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta1.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 2</Text>
              <Text style={styles.txtPerguntas}>Qual(is) o(s) principal(is) motivo(s) para o investimento na produção de cana-de-açucar no Brasil Colônia?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox21()}>
                <CheckBox style={styles.checkBox} value={this.state.check21} onChange={() => this.checkBox21()}/>
                <Text style={styles.txtResp}>O solo propício, encontrado principalmente na região sul</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox22()}>
                <CheckBox style={styles.checkBox} value={this.state.check22} onChange={() => this.checkBox22()}/>
                <Text style={styles.txtResp}>O clima, que por ser muito úmido, contribuia para essa cultura</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox23()}>
                <CheckBox style={styles.checkBox} value={this.state.check23} onChange={() => this.checkBox23()}/>
                <Text style={styles.txtResp}>Era considerada uma especiaria e muito valorizada no mercado europeu</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox24()}>
                <CheckBox style={styles.checkBox} value={this.state.check24} onChange={() => this.checkBox24()}/>
                <Text style={styles.txtResp}>O fato de ser uma cultura rápida, além do solo propício no nordeste</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta2.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 3</Text>
              <Text style={styles.txtPerguntas}>Qual das seguintes apresenta uma característica em comum entre a viagem de escravos e a de nobres portugueses para o Brasil?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox31()}>
                <CheckBox style={styles.checkBox} value={this.state.check31} onChange={() => this.checkBox31()}/>
                <Text style={styles.txtResp}>Em ambas os passageiros estavam muito sujeitos a contraírem doenças</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox32()}>
                <CheckBox style={styles.checkBox} value={this.state.check32} onChange={() => this.checkBox32()}/>
                <Text style={styles.txtResp}>Em ambas os navios vinham amontoados de passageiros</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox33()}>
                <CheckBox style={styles.checkBox} value={this.state.check33} onChange={() => this.checkBox33()}/>
                <Text style={styles.txtResp}>Ambas duravam apenas alguns dias</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox34()}>
                <CheckBox style={styles.checkBox} value={this.state.check34} onChange={() => this.checkBox34()}/>
                <Text style={styles.txtResp}>Ambas eram realizadas no mesmo tipo de navio</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta3.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 4</Text>
              <Text style={styles.txtPerguntas}>Sobre as Bandeiras e as Entradas pode se afirmar que:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox41()}>
                <CheckBox style={styles.checkBox} value={this.state.check41} onChange={() => this.checkBox41()}/>
                <Text style={styles.txtResp}>Ambas tinham como único objetivo descobrir de metais preciosos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox42()}>
                <CheckBox style={styles.checkBox} value={this.state.check42} onChange={() => this.checkBox42()}/>
                <Text style={styles.txtResp}>O objetivo principal de ambas era a captura de indígenas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox43()}>
                <CheckBox style={styles.checkBox} value={this.state.check43} onChange={() => this.checkBox43()}/>
                <Text style={styles.txtResp}>As Entradas eram financiadas pela Coroa, as Bandeiras não</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox44()}>
                <CheckBox style={styles.checkBox} value={this.state.check44} onChange={() => this.checkBox44()}/>
                <Text style={styles.txtResp}>A captura de indígenas era um objetivo exclusivo das Bandeiras</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta4.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 5</Text>
              <Text style={styles.txtPerguntas}>O que ocasionou a expulsão dos holandeses do Nordeste em 1654?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox51()}>
                <CheckBox style={styles.checkBox} value={this.state.check51} onChange={() => this.checkBox51()}/>
                <Text style={styles.txtResp}>A grande influência que os holandeses haviam adquirido</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox52()}>
                <CheckBox style={styles.checkBox} value={this.state.check52} onChange={() => this.checkBox52()}/>
                <Text style={styles.txtResp}>O desgaste econômico português, que pedia uma recuperação de território</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox53()}>
                <CheckBox style={styles.checkBox} value={this.state.check53} onChange={() => this.checkBox53()}/>
                <Text style={styles.txtResp}>Pressão do Rei Espanhol, o "manda-chuva" na União Ibérica</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox54()}>
                <CheckBox style={styles.checkBox} value={this.state.check54} onChange={() => this.checkBox54()}/>
                <Text style={styles.txtResp}>Revoltas populares contra o autoritarismo holandês</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta5.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 6</Text>
              <Text style={styles.txtPerguntas}>Todos esses são motivos para a crise portuguesa na segunda metade do século XVII, <Text style={styles.negrito}>EXCETO</Text>?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox61()}>
                <CheckBox style={styles.checkBox} value={this.state.check61} onChange={() => this.checkBox61()}/>
                <Text style={styles.txtResp}>Concorrência com açucar produzido nas Antilhas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox62()}>
                <CheckBox style={styles.checkBox} value={this.state.check62} onChange={() => this.checkBox62()}/>
                <Text style={styles.txtResp}>Perda de colônias na África</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox63()}>
                <CheckBox style={styles.checkBox} value={this.state.check63} onChange={() => this.checkBox63()}/>
                <Text style={styles.txtResp}>Gastos para por fim à União Ibérica</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox64()}>
                <CheckBox style={styles.checkBox} value={this.state.check64} onChange={() => this.checkBox64()}/>
                <Text style={styles.txtResp}>Gastos para conter invasões e revoltas nas colônias</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta6.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 7</Text>
              <Text style={styles.txtPerguntas}>Onde estava presente a maior parte do Ouro encontrado no Brasil na primeira metade do século XVIII?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox71()}>
                <CheckBox style={styles.checkBox} value={this.state.check71} onChange={() => this.checkBox71()}/>
                <Text style={styles.txtResp}>No topo de planaltos, cavados pela erosão</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox72()}>
                <CheckBox style={styles.checkBox} value={this.state.check72} onChange={() => this.checkBox72()}/>
                <Text style={styles.txtResp}>Em minas em profundas cavernas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox73()}>
                <CheckBox style={styles.checkBox} value={this.state.check73} onChange={() => this.checkBox73()}/>
                <Text style={styles.txtResp}>Em minas nas margens de rios e córregos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox74()}>
                <CheckBox style={styles.checkBox} value={this.state.check74} onChange={() => this.checkBox74()}/>
                <Text style={styles.txtResp}>Em pequenas serras, principalmente na região de Minas Gerais</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta7.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 8</Text>
              <Text style={styles.txtPerguntas}>Sobre as consequências do ciclo do ouro podemos citar, <Text style={styles.negrito}>EXCETO</Text>?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox81()}>
                <CheckBox style={styles.checkBox} value={this.state.check81} onChange={() => this.checkBox81()}/>
                <Text style={styles.txtResp}>Migração de portugueses para a região das minas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox82()}>
                <CheckBox style={styles.checkBox} value={this.state.check82} onChange={() => this.checkBox82()}/>
                <Text style={styles.txtResp}>Esgotamento rápido de todo o ouro do território brasileiro</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox83()}>
                <CheckBox style={styles.checkBox} value={this.state.check83} onChange={() => this.checkBox83()}/>
                <Text style={styles.txtResp}>Melhora na situação financeira portuguesa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox84()}>
                <CheckBox style={styles.checkBox} value={this.state.check84} onChange={() => this.checkBox84()}/>
                <Text style={styles.txtResp}>Insatisfação geral contra os impostos sobre a extração</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta8.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 9</Text>
              <Text style={styles.txtPerguntas}>Qual medida tomada pela Rainha de Portugal no final do século XVIII contribuiu para a falta de emprego?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox91()}>
                <CheckBox style={styles.checkBox} value={this.state.check91} onChange={() => this.checkBox91()}/>
                <Text style={styles.txtResp}>Estatização das poucas minas de ouro restantes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox92()}>
                <CheckBox style={styles.checkBox} value={this.state.check92} onChange={() => this.checkBox92()}/>
                <Text style={styles.txtResp}>Aumento de impostos para garimpeiros independentes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox93()}>
                <CheckBox style={styles.checkBox} value={this.state.check93} onChange={() => this.checkBox93()}/>
                <Text style={styles.txtResp}>Proibição de manufaturas na colônia</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox94()}>
                <CheckBox style={styles.checkBox} value={this.state.check94} onChange={() => this.checkBox94()}/>
                <Text style={styles.txtResp}>Fim do monopólio comercial com Portugal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta9.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 10</Text>
              <Text style={styles.txtPerguntas}>Sobre a derrama é correto afirmar que:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox101()}>
                <CheckBox style={styles.checkBox} value={this.state.check101} onChange={() => this.checkBox101()}/>
                <Text style={styles.txtResp}>Consistia na prisão de pessoas que não pagassem os impostos devidos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox102()}>
                <CheckBox style={styles.checkBox} value={this.state.check102} onChange={() => this.checkBox102()}/>
                <Text style={styles.txtResp}>Foi realizada de fato apenas uma vez</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox103()}>
                <CheckBox style={styles.checkBox} value={this.state.check103} onChange={() => this.checkBox103()}/>
                <Text style={styles.txtResp}>Foi uma das principais causadoras da Conjuração Baiana</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox104()}>
                <CheckBox style={styles.checkBox} value={this.state.check104} onChange={() => this.checkBox104()}/>
                <Text style={styles.txtResp}>Contribuiu muito para a miséria do povo no final do século XVIII</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta10.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


      </Swiper>
    );
  }
}




class DificilG extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 22,
      padding: 8,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'GEOGRAFIA - DIFÍCIL',
  };

  constructor() {
    super();
    this.state={
      check11: false,
      check12: false,
      check13: false,
      check14: false,

      check21: false,
      check22: false,
      check23: false,
      check24: false,

      check31: false,
      check32: false,
      check33: false,
      check34: false,

      check41: false,
      check42: false,
      check43: false,
      check44: false,

      check51: false,
      check52: false,
      check53: false,
      check54: false,

      check61: false,
      check62: false,
      check63: false,
      check64: false,

      check71: false,
      check72: false,
      check73: false,
      check74: false,

      check81: false,
      check82: false,
      check83: false,
      check84: false,
    }
  }

  checkBox11 () {
    this.setState({
      check11: !this.state.check11,
      check12: false,
      check13: false,
      check14: false,
    })
  }

  checkBox12 () {
    this.setState({
      check12: !this.state.check12,
      check11: false,
      check13: false,
      check14: false,
    })
  }

  checkBox13 () {
    this.setState({
      check13: !this.state.check13,
      check12: false,
      check11: false,
      check14: false,
    })
  }

  checkBox14 () {
    this.setState({
      check14: !this.state.check14,
      check12: false,
      check13: false,
      check11: false,
    })
  }

  resposta1 () {
    if (this.state.check12) {
      alert(`Você acertou!`)
    } else if (this.state.check14 === false && this.state.check13 == false && this.state.check11 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }





  checkBox21 () {
    this.setState({
      check21: !this.state.check21,
      check22: false,
      check23: false,
      check24: false,
    })
  }

  checkBox22 () {
    this.setState({
      check22: !this.state.check22,
      check21: false,
      check23: false,
      check24: false,
    })
  }

  checkBox23 () {
    this.setState({
      check23: !this.state.check23,
      check22: false,
      check21: false,
      check24: false,
    })
  }

  checkBox24 () {
    this.setState({
      check24: !this.state.check24,
      check22: false,
      check23: false,
      check21: false,
    })
  }

  resposta2 () {
    if (this.state.check23) {
      alert(`Você acertou!`)
    } else if (this.state.check24 === false && this.state.check22 == false && this.state.check21 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }




  checkBox31 () {
    this.setState({
      check31: !this.state.check31,
      check32: false,
      check33: false,
      check34: false,
    })
  }

  checkBox32 () {
    this.setState({
      check32: !this.state.check32,
      check31: false,
      check33: false,
      check34: false,
    })
  }

  checkBox33 () {
    this.setState({
      check33: !this.state.check33,
      check32: false,
      check31: false,
      check34: false,
    })
  }

  checkBox34 () {
    this.setState({
      check34: !this.state.check34,
      check32: false,
      check33: false,
      check31: false,
    })
  }

  resposta3 () {
    if (this.state.check31) {
      alert(`Você acertou!`)
    } else if (this.state.check34 === false && this.state.check32 == false && this.state.check33 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }



  checkBox41 () {
    this.setState({
      check41: !this.state.check41,
      check42: false,
      check43: false,
      check44: false,
    })
  }

  checkBox42 () {
    this.setState({
      check42: !this.state.check42,
      check41: false,
      check43: false,
      check44: false,
    })
  }

  checkBox43 () {
    this.setState({
      check43: !this.state.check43,
      check42: false,
      check41: false,
      check44: false,
    })
  }

  checkBox44 () {
    this.setState({
      check44: !this.state.check44,
      check42: false,
      check43: false,
      check41: false,
    })
  }

  resposta4 () {
    if (this.state.check41) {
      alert(`Você acertou!`)
    } else if (this.state.check44 === false && this.state.check42 == false && this.state.check43 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }



  checkBox51 () {
    this.setState({
      check51: !this.state.check51,
      check52: false,
      check53: false,
      check54: false,
    })
  }

  checkBox52 () {
    this.setState({
      check52: !this.state.check52,
      check51: false,
      check53: false,
      check54: false,
    })
  }

  checkBox53 () {
    this.setState({
      check53: !this.state.check53,
      check52: false,
      check51: false,
      check54: false,
    })
  }

  checkBox54 () {
    this.setState({
      check54: !this.state.check54,
      check52: false,
      check53: false,
      check51: false,
    })
  }

  resposta5 () {
    if (this.state.check53) {
      alert(`Você acertou!`)
    } else if (this.state.check54 === false && this.state.check52 == false && this.state.check51 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox61 () {
    this.setState({
      check61: !this.state.check61,
      check62: false,
      check63: false,
      check64: false,
    })
  }

  checkBox62 () {
    this.setState({
      check62: !this.state.check62,
      check61: false,
      check63: false,
      check64: false,
    })
  }

  checkBox63 () {
    this.setState({
      check63: !this.state.check63,
      check62: false,
      check61: false,
      check64: false,
    })
  }

  checkBox64 () {
    this.setState({
      check64: !this.state.check64,
      check62: false,
      check63: false,
      check61: false,
    })
  }

  resposta6 () {
    if (this.state.check64) {
      alert(`Você acertou!`)
    } else if (this.state.check62 === false && this.state.check63 == false && this.state.check61 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox71 () {
    this.setState({
      check71: !this.state.check71,
      check72: false,
      check73: false,
      check74: false,
    })
  }

  checkBox72 () {
    this.setState({
      check72: !this.state.check72,
      check71: false,
      check73: false,
      check74: false,
    })
  }

  checkBox73 () {
    this.setState({
      check73: !this.state.check73,
      check72: false,
      check71: false,
      check74: false,
    })
  }

  checkBox74 () {
    this.setState({
      check74: !this.state.check74,
      check72: false,
      check73: false,
      check71: false,
    })
  }

  resposta7 () {
    if (this.state.check74) {
      alert(`Você acertou!`)
    } else if (this.state.check73 === false && this.state.check72 == false && this.state.check71 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox81 () {
    this.setState({
      check81: !this.state.check81,
      check82: false,
      check83: false,
      check84: false,
    })
  }

  checkBox82 () {
    this.setState({
      check82: !this.state.check82,
      check81: false,
      check83: false,
      check84: false,
    })
  }

  checkBox83 () {
    this.setState({
      check83: !this.state.check83,
      check82: false,
      check81: false,
      check84: false,
    })
  }

  checkBox84 () {
    this.setState({
      check84: !this.state.check84,
      check82: false,
      check83: false,
      check81: false,
    })
  }

  resposta8 () {
    if (this.state.check81) {
      alert(`Você acertou!`)
    } else if (this.state.check84 === false && this.state.check82 == false && this.state.check83 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }

  render () {

    return (
    <Swiper showsButtons={true} showsPagination={false} loop={false}>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 1</Text>
              <Text style={styles.txtPerguntas}>Qual bioma brasileiro tem a menor diversidade de fauna?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox11()}>
                <CheckBox style={styles.checkBox} value={this.state.check11} onChange={() => this.checkBox11()}/>
                <Text style={styles.txtResp}>Cerrado</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox12()}>
                <CheckBox style={styles.checkBox} value={this.state.check12} onChange={() => this.checkBox12()}/>
                <Text style={styles.txtResp}>Caatinga</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox13()}>
                <CheckBox style={styles.checkBox} value={this.state.check13} onChange={() => this.checkBox13()}/>
                <Text style={styles.txtResp}>Pampa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox14()}>
                <CheckBox style={styles.checkBox} value={this.state.check14} onChange={() => this.checkBox14()}/>
                <Text style={styles.txtResp}>Pantanal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta1.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 2</Text>
              <Text style={styles.txtPerguntas}>Como a floresta amazônica contribui para a alta pluviosidade do clima equatorial?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox21()}>
                <CheckBox style={styles.checkBox} value={this.state.check21} onChange={() => this.checkBox21()}/>
                <Text style={styles.txtResp}>Ajudando a preservar os rios, que são a causa da grande pluviosidade</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox22()}>
                <CheckBox style={styles.checkBox} value={this.state.check22} onChange={() => this.checkBox22()}/>
                <Text style={styles.txtResp}>Por ser uma vegetação de grande porte, garante que o vapor de água suba</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox23()}>
                <CheckBox style={styles.checkBox} value={this.state.check23} onChange={() => this.checkBox23()}/>
                <Text style={styles.txtResp}>Sendo uma vegetação de grande porte e folhas largas aumenta a evaporação</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox24()}>
                <CheckBox style={styles.checkBox} value={this.state.check24} onChange={() => this.checkBox24()}/>
                <Text style={styles.txtResp}>A floresta não interfere na pluviosidade do clima</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta2.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 3</Text>
              <Text style={styles.txtPerguntas}>A nascente de rios dificilmente está situada em:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox31()}>
                <CheckBox style={styles.checkBox} value={this.state.check31} onChange={() => this.checkBox31()}/>
                <Text style={styles.txtResp}>Planícies</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox32()}>
                <CheckBox style={styles.checkBox} value={this.state.check32} onChange={() => this.checkBox32()}/>
                <Text style={styles.txtResp}>Depressões</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox33()}>
                <CheckBox style={styles.checkBox} value={this.state.check33} onChange={() => this.checkBox33()}/>
                <Text style={styles.txtResp}>Planaltos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox34()}>
                <CheckBox style={styles.checkBox} value={this.state.check34} onChange={() => this.checkBox34()}/>
                <Text style={styles.txtResp}>Planaltos e Depressões</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta3.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 4</Text>
              <Text style={styles.txtPerguntas}>"As estações mais quentes não coincidem com as estações mais chuvosas", para qual dos climas a seguir essa frase é correta?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox41()}>
                <CheckBox style={styles.checkBox} value={this.state.check41} onChange={() => this.checkBox41()}/>
                <Text style={styles.txtResp}>Subtropical</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox42()}>
                <CheckBox style={styles.checkBox} value={this.state.check42} onChange={() => this.checkBox42()}/>
                <Text style={styles.txtResp}>Tropical de Altitude</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox43()}>
                <CheckBox style={styles.checkBox} value={this.state.check43} onChange={() => this.checkBox43()}/>
                <Text style={styles.txtResp}>Tropical</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox44()}>
                <CheckBox style={styles.checkBox} value={this.state.check44} onChange={() => this.checkBox44()}/>
                <Text style={styles.txtResp}>A frase não é correta para nenhum dos climas citados</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta4.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 5</Text>
              <Text style={styles.txtPerguntas}>{`I - O Rio Amazonas é o maior do mundo em extensão e volume de água
II - O pantanal brasileiro é a maior área inundável do planeta
III - O clima Tropical Atlântico é o mais úmido do Brasil
IV - O clima Tropical de Altitude possui maior amplitude térmica que o clima Tropical
Qual(is) das alternativas acima está(ão) correta(s)?`}</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox51()}>
                <CheckBox style={styles.checkBox} value={this.state.check51} onChange={() => this.checkBox51()}/>
                <Text style={styles.txtResp}>I, II e IV</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox52()}>
                <CheckBox style={styles.checkBox} value={this.state.check52} onChange={() => this.checkBox52()}/>
                <Text style={styles.txtResp}>III e IV</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox53()}>
                <CheckBox style={styles.checkBox} value={this.state.check53} onChange={() => this.checkBox53()}/>
                <Text style={styles.txtResp}>II e IV</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox54()}>
                <CheckBox style={styles.checkBox} value={this.state.check54} onChange={() => this.checkBox54()}/>
                <Text style={styles.txtResp}>I e II</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta5.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 6</Text>
              <Text style={styles.txtPerguntas}>{`O Rio São Francisco é um rio perene que nasce em Minas Gerais e desagua no Oceano Atlântico no estado de Alagoas. Ao longo de seu percurso leva água e prosperidade para regiões ribeirinhas

As regiões abrangidas pelo clima semiárido sofrem constantemente com a falta de água, devido à escassez de chuvas e a falta de rios perenes nessa região.

Tais realidades levaram à um famoso empreendimento feito nesse rio, esse(a) foi:`}</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox61()}>
                <CheckBox style={styles.checkBox} value={this.state.check61} onChange={() => this.checkBox61()}/>
                <Text style={styles.txtResp}>O alargamento do Rio São Francisco</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox62()}>
                <CheckBox style={styles.checkBox} value={this.state.check62} onChange={() => this.checkBox62()}/>
                <Text style={styles.txtResp}>O deslocamento de outros rios para se tornarem afluentes do São Francisco</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox63()}>
                <CheckBox style={styles.checkBox} value={this.state.check63} onChange={() => this.checkBox63()}/>
                <Text style={styles.txtResp}>O deslocamento da foz do Rio São Francisco</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox64()}>
                <CheckBox style={styles.checkBox} value={this.state.check64} onChange={() => this.checkBox64()}/>
                <Text style={styles.txtResp}>A transposição do Rio São Francisco</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta6.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 7</Text>
              <Text style={styles.txtPerguntas}>{`Para cada um dos estados a seguir assinale o clima predominante correspondente, Tropical = T, Equatorial = E, Tropical de Altitude = TDA, Subtropical = S, Semiárido = SA, Tropical Atlântico = TA

- Minas Gerais
- Mato Grosso do sul
- Santa Catarina
- Espírito Santo
- Goiás

Marque a alternativa que apresenta todas as respostas na ordem correta`}</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox71()}>
                <CheckBox style={styles.checkBox} value={this.state.check71} onChange={() => this.checkBox71()}/>
                <Text style={styles.txtResp}>TDA, T, S, T, E</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox72()}>
                <CheckBox style={styles.checkBox} value={this.state.check72} onChange={() => this.checkBox72()}/>
                <Text style={styles.txtResp}>T, TDA, S, TA, SA</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox73()}>
                <CheckBox style={styles.checkBox} value={this.state.check73} onChange={() => this.checkBox73()}/>
                <Text style={styles.txtResp}>TDA, T, S, TA, E</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox74()}>
                <CheckBox style={styles.checkBox} value={this.state.check74} onChange={() => this.checkBox74()}/>
                <Text style={styles.txtResp}>TDA, T, S, TA, T</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta7.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 8</Text>
              <Text style={styles.txtPerguntas}>Qual das afirmativas a seguir NÃO é verdade em relação ao grande desmatamento da Mata Atlântica?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox81()}>
                <CheckBox style={styles.checkBox} value={this.state.check81} onChange={() => this.checkBox81()}/>
                <Text style={styles.txtResp}>Grande áreas foram desmatadas para criação de gado</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox82()}>
                <CheckBox style={styles.checkBox} value={this.state.check82} onChange={() => this.checkBox82()}/>
                <Text style={styles.txtResp}>É desmatada desde os primeiros anos de colonização portuguesa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox83()}>
                <CheckBox style={styles.checkBox} value={this.state.check83} onChange={() => this.checkBox83()}/>
                <Text style={styles.txtResp}>Sua área desmatada deu lugar para a construção de grandes cidades</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox84()}>
                <CheckBox style={styles.checkBox} value={this.state.check84} onChange={() => this.checkBox84()}/>
                <Text style={styles.txtResp}>Seu desmatamento pôs milhares de espécies em extinção</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta8.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


      </Swiper>
    );
  }
}





class DificilH extends React.Component {
  static navigationOptions = {
    headerTitleStyle: {
      fontSize: 22,
      padding: 8,
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 70,
      backgroundColor: 'lightgreen',
    },
    title: 'HISTÓRIA - DIFÍCIL',
  };

  constructor() {
    super();
    this.state={
      check11: false,
      check12: false,
      check13: false,
      check14: false,

      check21: false,
      check22: false,
      check23: false,
      check24: false,

      check31: false,
      check32: false,
      check33: false,
      check34: false,

      check41: false,
      check42: false,
      check43: false,
      check44: false,

      check51: false,
      check52: false,
      check53: false,
      check54: false,

      check61: false,
      check62: false,
      check63: false,
      check64: false,

      check71: false,
      check72: false,
      check73: false,
      check74: false,

      check81: false,
      check82: false,
      check83: false,
      check84: false,

    }
  }

  checkBox11 () {
    this.setState({
      check11: !this.state.check11,
      check12: false,
      check13: false,
      check14: false,
    })
  }

  checkBox12 () {
    this.setState({
      check12: !this.state.check12,
      check11: false,
      check13: false,
      check14: false,
    })
  }

  checkBox13 () {
    this.setState({
      check13: !this.state.check13,
      check12: false,
      check11: false,
      check14: false,
    })
  }

  checkBox14 () {
    this.setState({
      check14: !this.state.check14,
      check12: false,
      check13: false,
      check11: false,
    })
  }

  resposta1 () {
    if (this.state.check12) {
      alert(`Você acertou!`)
    } else if (this.state.check14 === false && this.state.check13 == false && this.state.check11 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }





  checkBox21 () {
    this.setState({
      check21: !this.state.check21,
      check22: false,
      check23: false,
      check24: false,
    })
  }

  checkBox22 () {
    this.setState({
      check22: !this.state.check22,
      check21: false,
      check23: false,
      check24: false,
    })
  }

  checkBox23 () {
    this.setState({
      check23: !this.state.check23,
      check22: false,
      check21: false,
      check24: false,
    })
  }

  checkBox24 () {
    this.setState({
      check24: !this.state.check24,
      check22: false,
      check23: false,
      check21: false,
    })
  }

  resposta2 () {
    if (this.state.check22) {
      alert(`Você acertou!`)
    } else if (this.state.check23 === false && this.state.check24 == false && this.state.check21 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 2!`)
    }
  }




  checkBox31 () {
    this.setState({
      check31: !this.state.check31,
      check32: false,
      check33: false,
      check34: false,
    })
  }

  checkBox32 () {
    this.setState({
      check32: !this.state.check32,
      check31: false,
      check33: false,
      check34: false,
    })
  }

  checkBox33 () {
    this.setState({
      check33: !this.state.check33,
      check32: false,
      check31: false,
      check34: false,
    })
  }

  checkBox34 () {
    this.setState({
      check34: !this.state.check34,
      check32: false,
      check33: false,
      check31: false,
    })
  }

  resposta3 () {
    if (this.state.check34) {
      alert(`Você acertou!`)
    } else if (this.state.check31 === false && this.state.check32 == false && this.state.check33 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox41 () {
    this.setState({
      check41: !this.state.check41,
      check42: false,
      check43: false,
      check44: false,
    })
  }

  checkBox42 () {
    this.setState({
      check42: !this.state.check42,
      check41: false,
      check43: false,
      check44: false,
    })
  }

  checkBox43 () {
    this.setState({
      check43: !this.state.check43,
      check42: false,
      check41: false,
      check44: false,
    })
  }

  checkBox44 () {
    this.setState({
      check44: !this.state.check44,
      check42: false,
      check43: false,
      check41: false,
    })
  }

  resposta4 () {
    if (this.state.check43) {
      alert(`Você acertou!`)
    } else if (this.state.check44 === false && this.state.check42 == false && this.state.check41 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox51 () {
    this.setState({
      check51: !this.state.check51,
      check52: false,
      check53: false,
      check54: false,
    })
  }

  checkBox52 () {
    this.setState({
      check52: !this.state.check52,
      check51: false,
      check53: false,
      check54: false,
    })
  }

  checkBox53 () {
    this.setState({
      check53: !this.state.check53,
      check52: false,
      check51: false,
      check54: false,
    })
  }

  checkBox54 () {
    this.setState({
      check54: !this.state.check54,
      check52: false,
      check53: false,
      check51: false,
    })
  }

  resposta5 () {
    if (this.state.check51) {
      alert(`Você acertou!`)
    } else if (this.state.check54 === false && this.state.check53 == false && this.state.check52 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }



  checkBox61 () {
    this.setState({
      check61: !this.state.check61,
      check62: false,
      check63: false,
      check64: false,
    })
  }

  checkBox62 () {
    this.setState({
      check62: !this.state.check62,
      check61: false,
      check63: false,
      check64: false,
    })
  }

  checkBox63 () {
    this.setState({
      check63: !this.state.check63,
      check62: false,
      check61: false,
      check64: false,
    })
  }

  checkBox64 () {
    this.setState({
      check64: !this.state.check64,
      check62: false,
      check63: false,
      check61: false,
    })
  }

  resposta6 () {
    if (this.state.check64) {
      alert(`Você acertou!`)
    } else if (this.state.check62 === false && this.state.check63 == false && this.state.check61 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 4!`)
    }
  }



  checkBox71 () {
    this.setState({
      check71: !this.state.check71,
      check72: false,
      check73: false,
      check74: false,
    })
  }

  checkBox72 () {
    this.setState({
      check72: !this.state.check72,
      check71: false,
      check73: false,
      check74: false,
    })
  }

  checkBox73 () {
    this.setState({
      check73: !this.state.check73,
      check72: false,
      check71: false,
      check74: false,
    })
  }

  checkBox74 () {
    this.setState({
      check74: !this.state.check74,
      check72: false,
      check73: false,
      check71: false,
    })
  }

  resposta7 () {
    if (this.state.check73) {
      alert(`Você acertou!`)
    } else if (this.state.check74 === false && this.state.check72 == false && this.state.check71 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 3!`)
    }
  }



  checkBox81 () {
    this.setState({
      check81: !this.state.check81,
      check82: false,
      check83: false,
      check84: false,
    })
  }

  checkBox82 () {
    this.setState({
      check82: !this.state.check82,
      check81: false,
      check83: false,
      check84: false,
    })
  }

  checkBox83 () {
    this.setState({
      check83: !this.state.check83,
      check82: false,
      check81: false,
      check84: false,
    })
  }

  checkBox84 () {
    this.setState({
      check84: !this.state.check84,
      check82: false,
      check83: false,
      check81: false,
    })
  }

  resposta8 () {
    if (this.state.check81) {
      alert(`Você acertou!`)
    } else if (this.state.check84 === false && this.state.check82 == false && this.state.check83 == false) {
      alert(`Escolha uma das alternativas!`)
    } else {
      alert(`Você errou!
A resposta certa era a alternativa 1!`)
    }
  }


  render () {

    return (
    <Swiper showsButtons={true} showsPagination={false} loop={false}>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 1</Text>
              <Text style={styles.txtPerguntas}>O que ocasionou a ocupação tardia do território brasileiro (apenas 30 anos após o descobrimento)?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox11()}>
                <CheckBox style={styles.checkBox} value={this.state.check11} onChange={() => this.checkBox11()}/>
                <Text style={styles.txtResp}>A grande quantidade de indíos hostis</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox12()}>
                <CheckBox style={styles.checkBox} value={this.state.check12} onChange={() => this.checkBox12()}/>
                <Text style={styles.txtResp}>O foco no comercio de especiarias e a falta de riquezas minerais</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox13()}>
                <CheckBox style={styles.checkBox} value={this.state.check13} onChange={() => this.checkBox13()}/>
                <Text style={styles.txtResp}>A dificuldade da viagem entre Portugal e Brasil, onde vários morriam</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox14()}>
                <CheckBox style={styles.checkBox} value={this.state.check14} onChange={() => this.checkBox14()}/>
                <Text style={styles.txtResp}>O foco português em suas colônias na África</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta1.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 2</Text>
              <Text style={styles.txtPerguntas}>Sobre a escravidão no periodo colonial podemos afimar, <Text style={styles.negrito}>EXCETO</Text>:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox21()}>
                <CheckBox style={styles.checkBox} value={this.state.check21} onChange={() => this.checkBox21()}/>
                <Text style={styles.txtResp}>No começo predominou a escravidão indígena, posteriormente a Africana</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox22()}>
                <CheckBox style={styles.checkBox} value={this.state.check22} onChange={() => this.checkBox22()}/>
                <Text style={styles.txtResp}>Desde o príncipio da escravidão os filhos de escravos nasciam livres</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox23()}>
                <CheckBox style={styles.checkBox} value={this.state.check23} onChange={() => this.checkBox23()}/>
                <Text style={styles.txtResp}>Os africanos já eram escravos na África antes de serem trazidos para o Brasil</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox24()}>
                <CheckBox style={styles.checkBox} value={this.state.check24} onChange={() => this.checkBox24()}/>
                <Text style={styles.txtResp}>Muitos Africanos fugiam e organizavam quilombos</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta2.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 3</Text>
              <Text style={styles.txtPerguntas}>{`"O heróico Tiradentes, calmo e solene, foi conduzido, vestindo a túnica branca dos condenados, da prisão da Rua da Cadeia, hoje Rua da Assembléia e pela Rua do Piolho, acompanhado por dois padres e uma guarda de cem baionetas, fazendo preces, até chegar ao cadafalso. Ali, deu o dinheiro que tinha aos seus executores e depois de repetir com seu confessor o Credo católico, gritou: 'Cumpri a minha palavra, morro pela liberdade'."

O texto faz referência a:`}</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox31()}>
                <CheckBox style={styles.checkBox} value={this.state.check31} onChange={() => this.checkBox31()}/>
                <Text style={styles.txtResp}>Uma tentativa de revolução cujo objetivo era abolir a escravidão</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox32()}>
                <CheckBox style={styles.checkBox} value={this.state.check32} onChange={() => this.checkBox32()}/>
                <Text style={styles.txtResp}>Um movimento  de caráter popular</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox33()}>
                <CheckBox style={styles.checkBox} value={this.state.check33} onChange={() => this.checkBox33()}/>
                <Text style={styles.txtResp}>Uma rebelião onde grande parte dos participantes faziam parte do clero</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox34()}>
                <CheckBox style={styles.checkBox} value={this.state.check34} onChange={() => this.checkBox34()}/>
                <Text style={styles.txtResp}>A maior parte dos participantes eram aristocratas que se preocupavam apenas com seus interesses</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta3.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 4</Text>
              <Text style={styles.txtPerguntas}>Qual era o objetivo da França ao tentar fundar cidades no brasil no começo do século XVII?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox41()}>
                <CheckBox style={styles.checkBox} value={this.state.check41} onChange={() => this.checkBox41()}/>
                <Text style={styles.txtResp}>Ter acesso à exploração das minas de ouro</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox42()}>
                <CheckBox style={styles.checkBox} value={this.state.check42} onChange={() => this.checkBox42()}/>
                <Text style={styles.txtResp}>Tal tentiva foi feita por fugitivos franceses, portanto não tinha um objetivo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox43()}>
                <CheckBox style={styles.checkBox} value={this.state.check43} onChange={() => this.checkBox43()}/>
                <Text style={styles.txtResp}>Participar da crescente economia açucareira</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox44()}>
                <CheckBox style={styles.checkBox} value={this.state.check44} onChange={() => this.checkBox44()}/>
                <Text style={styles.txtResp}>Causar problemas socioeconômicos à Portugal, seu rival na Europa</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta4.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 5</Text>
              <Text style={styles.txtPerguntas}>Levando em conta a situação econômica de Portugal no final do século XVII é correto afirmar em que:</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox51()}>
                <CheckBox style={styles.checkBox} value={this.state.check51} onChange={() => this.checkBox51()}/>
                <Text style={styles.txtResp}>Portugal dependia do lucro gerado pela colônia brasileira</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox52()}>
                <CheckBox style={styles.checkBox} value={this.state.check52} onChange={() => this.checkBox52()}/>
                <Text style={styles.txtResp}>Portugal estava começando a se industrializar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox53()}>
                <CheckBox style={styles.checkBox} value={this.state.check53} onChange={() => this.checkBox53()}/>
                <Text style={styles.txtResp}>A crise no Brasil foi gerada pela crise em Portugal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox54()}>
                <CheckBox style={styles.checkBox} value={this.state.check54} onChange={() => this.checkBox54()}/>
                <Text style={styles.txtResp}>A cana-de-açucar estava em seu auge, gerando muita renda para Portugal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta5.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 6</Text>
              <Text style={styles.txtPerguntas}>{`I - Um dos problemas enfrentados pelas Bandeiras foram os limites determinados pelo Tratado de Tordesilhas
II - As bandeiras foram um fator determinante para a descoberta do ouro, que ocorreu no fim do século XVII

As afirmativas estão respectivamente:`}</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox61()}>
                <CheckBox style={styles.checkBox} value={this.state.check61} onChange={() => this.checkBox61()}/>
                <Text style={styles.txtResp}>Incorreta e correta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox62()}>
                <CheckBox style={styles.checkBox} value={this.state.check62} onChange={() => this.checkBox62()}/>
                <Text style={styles.txtResp}>Correta e correta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox63()}>
                <CheckBox style={styles.checkBox} value={this.state.check63} onChange={() => this.checkBox63()}/>
                <Text style={styles.txtResp}>Correta e incorreta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox64()}>
                <CheckBox style={styles.checkBox} value={this.state.check64} onChange={() => this.checkBox64()}/>
                <Text style={styles.txtResp}>Incorreta e incorreta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta6.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 7</Text>
              <Text style={styles.txtPerguntas}>{`I - Muitas revoltas conhecidas ocorreram quando a derrama foi decretada pela primeira vez
II - A Inconfidência mineira foi delatada antes mesmo de ocorrer, diferentemente da Conjuração Baiana

As afirmativas estão respectivamente:`}</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox71()}>
                <CheckBox style={styles.checkBox} value={this.state.check71} onChange={() => this.checkBox71()}/>
                <Text style={styles.txtResp}>Correta e correta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox72()}>
                <CheckBox style={styles.checkBox} value={this.state.check72} onChange={() => this.checkBox72()}/>
                <Text style={styles.txtResp}>Correta e incorreta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox73()}>
                <CheckBox style={styles.checkBox} value={this.state.check73} onChange={() => this.checkBox73()}/>
                <Text style={styles.txtResp}>Incorreta e incorreta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox74()}>
                <CheckBox style={styles.checkBox} value={this.state.check74} onChange={() => this.checkBox74()}/>
                <Text style={styles.txtResp}>Incorreta e correta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta7.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


          <ScrollView style={styles.container}>
            <View style={styles.divPerg}>
              <Text style={styles.perguntas}>QUESTÃO 8</Text>
              <Text style={styles.txtPerguntas}>A família real portuguesa chegou ao Brasil em 1808, por que essa viagem foi realizada?</Text>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox81()}>
                <CheckBox style={styles.checkBox} value={this.state.check81} onChange={() => this.checkBox81()}/>
                <Text style={styles.txtResp}>Eles fugiam das tropas francesas que haviam invadido Portugal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox82()}>
                <CheckBox style={styles.checkBox} value={this.state.check82} onChange={() => this.checkBox82()}/>
                <Text style={styles.txtResp}>A ameaça espanhola de tomar Portugal preocupava os membros da corte</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox83()}>
                <CheckBox style={styles.checkBox} value={this.state.check83} onChange={() => this.checkBox83()}/>
                <Text style={styles.txtResp}>Eles buscavam evitar revoltas como a Inconfidência Mineira</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option} onPress={() => this.checkBox84()}>
                <CheckBox style={styles.checkBox} value={this.state.check84} onChange={() => this.checkBox84()}/>
                <Text style={styles.txtResp}>A monarquia foi exilada no Brasil após uma revolução democrática em Portugal</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.verResposta} onPress={this.resposta8.bind(this)}>
                <Text style={styles.txtVerResp}>Ver resposta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>


      </Swiper>
    );
  }
}






const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Geo: Geografia,
    Hist: Historia,
    Quest: Questoes,
    Fg: FacilG,
    Fh: FacilH,
    Mg: MedioG,
    Mh: MedioH,
    Dg: DificilG,
    Dh: DificilH,
  },
  {
    initialRouteName: 'Home',
  }
);










export default class Main extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Arial': require('../../assets/fonts/arial.ttf'),
    });
  }
  render() {
    return (
        <RootStack />
    );
  }
}














const styles = StyleSheet.create({
  MainMap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width*1.1,
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },


  button: {
    position: 'absolute',
    left: 69,
    top: 151 - 20,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 220,
    borderColor: 'black',
    borderWidth: 1,
  },

  textoBotao: {
    fontSize: 23,
    padding: 12,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },

  button2: {
    position: 'absolute',
    left: 69,
    top: 232 - 32,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 220,
    borderColor: 'black',
    borderWidth: 1,
  },

  button3: {
    position: 'absolute',
    left: 79,
    bottom: -2,
    backgroundColor: '#7FFFD4',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
  },






  menu: {
    width: 70,
  },

  divMenu: {
    width: 200,
    height: 780,
    marginLeft: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderColor: 'black',
    borderWidth: 0,
    borderRadius: 15,
  },

  buttonRios: {
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    borderWidth: 0,
    borderRadius: 15,
    position: 'absolute',
    top: 70,
    left: 5,
  },

  textoMenu: {
    fontSize: 33,
    fontFamily: 'serif',
  },

  buttonRelevo: {
    backgroundColor: '#Be5b59',
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    borderWidth: 0,
    borderRadius: 15,
    position: 'absolute',
    left: 5,
    top: 130,
  },

  buttonVeget: {
    backgroundColor: '#50C878',
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    borderWidth: 0,
    borderRadius: 15,
    position: 'absolute',
    left: 5,
    top: 190,
  },

  buttonClima: {
    backgroundColor: '#F0DC82',
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    borderWidth: 0,
    borderRadius: 15,
    position: 'absolute',
    left: 5,
    top: 250,
  },


  buttonVazio: {
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    borderWidth: 0,
    borderRadius: 15,
    position: 'absolute',
    left: 5,
    marginTop: 10,
  },







  popUpR1: {
    position: 'absolute',
    top: 125,
    left: 263,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  izinho: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  divR1: {
    position: 'absolute',
    zIndex: 2,
    left: 25,
    top: -25,
    width: 310,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  sumirR1: {
    width: 60,
    height: 40,
    position: 'relative',
    top: 0,
    left: 248,
    borderRadius: 10,
    backgroundColor: '#B22222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sumirx: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  titleR1: {
    position: 'absolute',
    fontSize: 28,
    fontWeight: 'bold',
    top: 5,
    left: 15,
  },

  titleRios: {
      color: '#007FFF',
    },

  subtituloR1: {
    fontSize: 21,
    fontWeight: 'bold',
  },

  conteudoR1: {
    fontSize: 19,
    textAlign: 'justify',
  },

  nascente: {
    position: 'relative',
    top: 11,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },





  popUpRiosObs: {
    position: 'absolute',
    bottom: -425,
    left: 126,
    width: 120,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  ObsRios: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  divRObs: {
    position: 'absolute',
    zIndex: 3,
    left: 25,
    top: -25,
    width: 310,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  conteudoRObs: {
    position: 'relative',
    top: 11,
    fontSize: 19,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'justify',
  },

  conteudoRVObs: {
    position: 'relative',
    top: 11,
    fontSize: 19,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    textAlign: 'justify',
  },








  popUpR2: {
    position: 'absolute',
    top: 64,
    left: 104,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  divR2: {
    position: 'absolute',
    zIndex: 2,
    left: 25,
    top: -25,
    width: 310,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },







  popUpR3: {
    position: 'absolute',
    top: 239,
    left: 172,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  divR3: {
    position: 'absolute',
    zIndex: 2,
    left: 25,
    top: -25,
    width: 310,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },





  popUpR4: {
    position: 'absolute',
    top: 218,
    left: 210,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  divR4: {
    position: 'absolute',
    zIndex: 2,
    left: 25,
    top: -25,
    width: 310,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },







  divRL1: {
    zIndex: 2,
    position: 'absolute',
    left: 158,
    top: 158,
    width: 195,
    height: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },

  popUpRL1: {
    position: 'absolute',
    top: 180,
    left: 150,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  sumirRL: {
    width: 30,
    height: 18,
    position: 'absolute',
    top: 1,
    right: 1,
    borderRadius: 7,
    backgroundColor: '#B22222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sumirxRL: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },

  rlTexto: {
    position: 'absolute',
    left: 5,
    fontSize: 15,
    fontFamily: 'serif',
  },







  popUpRelevoObs: {
    position: 'absolute',
    bottom: -425,
    left: 126,
    width: 120,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  divRLObs: {
    zIndex: 3,
    position: 'absolute',
    left: 25,
    top: -25,
    width: 310,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },






  divRL2: {
    zIndex: 2,
    position: 'absolute',
    left: 75,
    top: 54,
    width: 195,
    height: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },

  popUpRL2: {
    position: 'absolute',
    top: 76,
    left: 70,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },






  popUpRL3: {
    position: 'absolute',
    top: 208,
    left: 167,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  divRL3: {
    zIndex: 2,
    position: 'absolute',
    left: 160,
    top: 227,
    width: 195,
    height: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },





  popUpRL4: {
    position: 'absolute',
    top: 135,
    left: 165,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  divRL4: {
    zIndex: 2,
    position: 'absolute',
    left: 170,
    top: 112,
    width: 166,
    height: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },

  sumirRL2: {
    width: 30,
    height: 18,
    position: 'absolute',
    top: 1,
    right: 1,
    borderRadius: 7,
    backgroundColor: '#B22222',
    justifyContent: 'center',
    alignItems: 'center',
  },







  popUpRL5: {
    position: 'absolute',
    top: 6,
    left: 100,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  divRL5: {
    zIndex: 2,
    position: 'absolute',
    left: 100,
    top: 25,
    width: 195,
    height: 22,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },










  divC1: {
    zIndex: 2,
    position: 'absolute',
    left: 25,
    top: -25,
    width: 310,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  popUpC1: {
    position: 'absolute',
    top: 87,
    left: 120,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  titleClima: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 35,
    left: 15,
    color: '#FF4500'
  },

  titleCarac: {
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    left: 15,
  },

  conteudoC1: {
    fontSize: 19,
    textAlign: 'justify',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
  },

  conteudoC1f: {
    fontSize: 19,
    textAlign: 'justify',
    marginTop: 40,
    marginRight: 5,
    marginLeft: 5,
  },

  climograma: {
    color: '#0000CD',
    textDecorationLine: 'underline',
  },

  divClimo: {
    zIndex: 3,
    position: 'absolute',
    left: 5,
    top: 75,
    width: 300,
    height: 315,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },

  imgClimograma: {
    position: 'absolute',
    bottom: 50,
    left: 5,
    width: 290,
    height: 183,
  },

  sumirClimo: {
    width: 60,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 10,
    backgroundColor: '#B22222',
    justifyContent: 'center',
    alignItems: 'center',
  },









  popUpOrient: {

    position: 'absolute',
    top: -65,
    right: -1,
    width: 135,
    height: 55,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
  },

  divOrient: {
    position: 'absolute',
    left: 25,
    top: -45,
    width: 310,
    height: 430,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  txtOrient: {
    fontSize: 20,
    fontWeight: 'bold',
  },












  popUpC2: {
    position: 'absolute',
    top: 270,
    left: 190,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },





  popUpC3: {
    position: 'absolute',
    top: 180,
    left: 174,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },



  popUpC4: {
    position: 'absolute',
    top: 197,
    left: 243,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },



  popUpC5: {
    position: 'absolute',
    top: 110,
    left: 282,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },



  popUpC6: {
    position: 'absolute',
    top: 135,
    left: 302,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },


  imgClimograma1: {
    position: 'absolute',
    bottom: 60,
    left: 5,
    width: 280,
    height: 180,
  },


  divTituloc: {
    position: 'absolute',
    width: 200,
    left: 80,
    height: 55,
    top: -73,
    borderWidth: 5,
    padding:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0DC82',
  },

  divTitulor: {
    position: 'absolute',
    width: 200,
    left: 80,
    height: 55,
    top: -73,
    borderWidth: 5,
    padding:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },

  divTitulorl: {
    position: 'absolute',
    width: 200,
    left: 80,
    height: 55,
    top: -73,
    borderWidth: 5,
    padding:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#Be5b59',
  },

  titulo: {
    fontSize: 30,
  },

  divTitulov: {
    position: 'absolute',
    width: 200,
    left: 80,
    height: 55,
    top: -73,
    borderWidth: 5,
    padding:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50C878',
  },

  titleVeg: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 35,
    left: 15,
    color: '#006400'
  },


  popUpV1: {
    position: 'absolute',
    top: 70,
    left: 130,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  cNegrito: {
    fontWeight: 'bold',
  },

  divV1: {
    zIndex: 2,
    position: 'absolute',
    left: 25,
    top: -45,
    width: 310,
    height: 450,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  popUpV2: {
    position: 'absolute',
    top: 145,
    left: 205,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },


  popUpV3: {
    position: 'absolute',
    top: 99,
    left: 285,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },


  popUpV4: {
    position: 'absolute',
    top: 218,
    left: 235,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },


  popUpVegObs: {
    position: 'absolute',
    bottom: -425,
    left: 126,
    width: 120,
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },


  popUpV5: {
    position: 'absolute',
    top: 186,
    left: 144,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  popUpV6: {
    position: 'absolute',
    top: 293,
    left: 176,
    width: 20,
    height: 20,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },




















  menuHist: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 120,
    height: 45,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtMenuHist: {
    fontSize: 30,
    padding: 5,
    fontWeight: 'bold',
  },

  popUpOrient2: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 135,
    height: 55,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
  },

  divOrient2: {
    position: 'absolute',
    zIndex: 2,
    left: 25,
    top: 25,
    width: 310,
    height: 430,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  button1500: {
    marginTop: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#B8860B',
    backgroundColor: '#EEE8AA',
    height: 40,
    width: 140,
    marginLeft: 10,
  },

  textoMenuHist: {
    fontSize: 28,
  },

  divMenu2: {
    position: 'absolute',
    zIndex: 2,
    top: 50,
    left: -2,
    backgroundColor: 'white',
    width: 170,
    height: 430,
    borderWidth: 2,
  },

  imgHome: {
    position: 'absolute',
    top: 0,
    width: 40,
    height: 40,
    right: 0,
  },

  botaoHome: {
    position: 'absolute',
    top: 0,
    width: 70,
    height: 70,
    right: 2,
  },

  butAno: {
    position: 'absolute',
    top: -3,
    left: 123,
    width: 120,
    height: 40,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE8AA'
  },

  txtAno: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  divH1: {
    zIndex: 2,
    position: 'absolute',
    left: 25,
    top: 24,
    width: 310,
    height: 450,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },

  corAno: {
    color: '#B8860B',
  },

  conteudoH: {
    position: 'relative',
    top: 11,
    fontSize: 19,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 9,
    textAlign: 'justify',
  },

  butPeriodo: {
    position: 'absolute',
    bottom: -502,
    left: 89,
    width: 180,
    height: 70,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAD2',
  },

  titlePeri: {
    position: 'absolute',
    fontSize: 28,
    fontWeight: 'bold',
    top: 5,
    left: 5,
  },

  corPeriodo: {
    color: '#B8860B',
    fontSize: 24,
    fontWeight: 'normal',
  },

  negrito: {
    fontWeight: 'bold',
  },

  resumoBut: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 45,
    marginLeft: 15,
    marginTop: 15,
    borderWidth: 3,
    backgroundColor: '#F0FFF0',
  },

  txtButResumo: {
    fontSize: 30,
  },

  divH11: {
    zIndex: 3,
    position: 'absolute',
    left: 5,
    top: 45,
    width: 300,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#F0F8FF',
  },

  sumirx11: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  sumir11: {
    width: 50,
    height: 34,
    position: 'relative',
    top: 0,
    left: 248,
    borderRadius: 10,
    backgroundColor: '#B22222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtButResumoI: {
    fontSize: 27,
  },

  titlePeriI: {
    fontSize: 25,
    fontWeight: 'bold',
    top: 5,
    left: 5,
  },

  questGEO: {
    width: 330,
    height: 400,
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 15,
    marginRight: 15,
    backgroundColor: '#E9FFDB',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 5,
  },

  questTitle: {
    marginTop: 3,
    fontSize: 32,
    fontFamily: 'serif',
  },

  questPlay: {
    width: 77,
    height: 77,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    position: 'absolute',
    top: 2,
    left: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPlay: {
    position: 'absolute',
    fontSize: 45,
  },

  quests: {
    marginLeft: 20,
    marginTop: 22,
    marginRight: 25,
    borderWidth: 2,
    height: 85,
    width: 280,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  textDific: {
    fontSize: 32,
    position: 'absolute',
    right: 58,
    top: -42,
  },

  globo: {
    width: 77,
    height: 77,
    position: 'absolute',
    top: 2,
    left: 2,
  },

  divPerg: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },

  perguntas: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
  },

  txtPerguntas: {
    fontSize: 23,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },

  checkBox: {
    position: 'absolute',
    marginLeft: 5,
  },

  option: {
    width: 300,
    height: 70,
    borderWidth: 1,
    backgroundColor: 	'#F5F5DC',
    marginTop: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },

  verResposta: {
    width: 150,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 15,
  },

  txtVerResp: {
    fontSize: 20,
  },

  txtResp: {
    fontSize: 20,
    marginLeft: 45,
  }
});
