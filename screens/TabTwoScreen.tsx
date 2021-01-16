import * as React from 'react';
import { Platform, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Mapa from '../components/Mapa';

const image={uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNMW94Mz2ja54dMop9fj4ypaOeeIFpDeS7Q&usqp=CAU'}
const profile ={uri:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/01/27/influencer-con-pingueinos-apareandose.jpeg'}

const Caja = (props:any) => {
  return (
    <TouchableOpacity onPress={() => {alert(props.info)}}>
    <View style={styles.infContainer}>
    <View>
  <Text style={styles.titulo}>{props.titulo}</Text>
  <Text style={styles.subtitulo}>{props.info}</Text>
   <Text></Text>
    </View>
  </View>
    </TouchableOpacity>
  );
}

export default function TabTwoScreen() {
  return (
   <ScrollView>
     <View>
       <View style={{alignContent:'center'}}>
          <ImageBackground source={image} style={styles.imagen}>
            <View style={styles.divProfile}>
            <Image source={profile} style={styles.profile}></Image>
            </View>
          <Text style={styles.name}>Nombre de persona  <TouchableOpacity style={styles.buttonIcon}>
            <FontAwesome  name="pencil" size={25} color="#fff" ></FontAwesome>
            </TouchableOpacity>
            </Text>
          </ImageBackground>
       </View>
       <Caja
    titulo="Nombre"
    info="Alexis"
    />
       <Caja
    titulo="Apellido"
    info="Glez"
    />
    <Caja
    titulo="Se unio en"
    info="23 de febrero del 2020"
    />
    <Caja
    titulo="Idiomas"
    info="Español"
    />
    <Caja
    titulo="Correo electronico"
    info="prueba@gmail.com"
    />
    <Caja
    titulo="Telefono movil"
    info="5574668888"
    />
     </View>
     <View>
    <Mapa></Mapa>
     </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  imagen: {
    height: 200,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    resizeMode: 'center',
    alignItems:'center'
  },
  profile:{
    width:120,
    height:120,
    backgroundColor:'transparent',
    borderRadius:60,
  },
  divProfile:{
    backgroundColor:'transparent',
    width:10,
    height:10,
    marginTop:25,
    alignItems:'center',
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold',
    marginTop:115,
  },
  buttonIcon:{
    borderRadius:4,
    backgroundColor:'#0080ff',
    alignItems:'center',
    textAlign:'center',
    width:35,
    height:30
  },
  infContainer:{
padding:5,
marginLeft:10,
marginRight:10,
borderBottomWidth:2,
borderColor:'#696969',
marginBottom:5
  },
  titulo:{
    fontSize: 20,
      color:'#353a42',
    fontWeight:'bold',
  },
  subtitulo:{
    fontSize:17,
    color:"#333333",
},
});

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNMW94Mz2ja54dMop9fj4ypaOeeIFpDeS7Q&usqp=CAU 

// se unio 
// ubicacion
// idioma