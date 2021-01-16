import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, View ,ImageBackground, Button,Alert ,Image} from 'react-native';
import { FlatList, gestureHandlerRootHOC, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-community/async-storage'
import { Searchbar } from 'react-native-paper';
// const Pr = (props) => {
//     return <Text>{props.name}</Text>
// }


const image = { uri: "https://reactjs.org/logo-og.png" };


export default function InicioScreen({
    navigation,
  }: StackScreenProps<RootStackParamList, 'NotFound'>) {
    const [cdmx, setCdmx]= React.useState([]);
    const [user,useUser] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    React.useEffect(() => {
      AsyncStorage.getItem('user')
   .then(resp => {
     if(resp){
       var respuesta =JSON.parse(resp);
    // console.log(Object.values(respuesta));
      useUser(true);
    }else{
      useUser(false);
      navigation.navigate('Login');
     }
   })

        fetch('https://ludotecapiccolo.000webhostapp.com/')
        .then(response => response.json())
        .then(data =>{
          console.log(data);
            setCdmx(data);
        });
      }, []);
console.log('hola');
  return (
    
    <ScrollView style={{ backgroundColor:'#eee'}}>
    <View style={styles.cabecera}>
    
    <ImageBackground source={{uri:'https://i1.wp.com/blog.vivaaerobus.com/wp-content/uploads/2020/04/paisaje-de-los-cabos.jpg?resize=650%2C364&ssl=1'}} style={styles.imagen}>
        <View style={{position:'relative'}}>
        <Searchbar
        style={styles.searchBar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        </View>
    </ImageBackground>
    </View>
    <View>
    <Text style={styles.subtitulos}>Cdmx</Text>
    </View>
    <View style={styles.left}>
    <ScrollView >
      <FlatList
      horizontal
      data={cdmx}
      renderItem={({item}) => 
      <TouchableOpacity
       style={styles.cdmxTouchable}
       onPress={() => {
        console.log('Prueba de un touchable');
        var id=item.id;
        navigation.navigate('DetalleSite', {
          itemId: id,
          otherParam: 'ewfwefwe',
        });
    }}
       >
        <ImageBackground
        source={{uri:item.imagen}}
        style={styles.cdmxImage}

         >
           <Text style={styles.subtitle2}>{item.nombre}</Text>
           </ImageBackground>
        </TouchableOpacity>}
      keyExtractor= {item => String(item.id)}
      >
      </FlatList>
        </ScrollView>
    </View>
    <View>
    <Text style={styles.subtitulos}>Categorias</Text>
    </View>
    <View style={styles.dos}>

        <ScrollView horizontal={true} >
        <TouchableOpacity 
      onPress={() => {
        navigation.navigate('DetalleSite', {
          itemId: 1,
          otherParam: 'Toque un touchable ',
        });
        console.log('Prueba de un touchable');
    }}
     style={styles.buttonAccions}
     >
        <Text style={styles.textoButtons}>Aqui compa</Text>
     </TouchableOpacity >
    <TouchableOpacity 
    style={styles.buttonAccions}
      onPress={() => {
        navigation.navigate('DetalleSite', {
          itemId: 1,
          otherParam: 'Toque un touchable ',
        });
    }}
     >
        <Text style={styles.textoButtons}>Romance</Text>
     </TouchableOpacity >
   
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate('DetalleSite', {
          itemId: 1,
          otherParam: 'Toque un touchable ',
        });
    }}
     style={styles.buttonAccions}
     >
        <Text style={styles.textoButtons}>Aventura</Text>
     </TouchableOpacity >
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate('DetalleSite', {
          itemId: 1,
          otherParam: 'Toque un touchable ',
        });
        console.log('Prueba de un touchable');
    }}
     style={styles.buttonAccions}
     >
        <Text style={styles.textoButtons}>Presiona este</Text>
     </TouchableOpacity >
        </ScrollView>
      
    </View>


     {/* aqui tenemos problemas  */}
    <View>
    <Text style={styles.subtitulos}>Mas populares</Text>
    </View>
    <View style={styles.dos}> 
    <ScrollView horizontal={true}>
            <TouchableOpacity 
            style={styles.profileImgContainer}
            onPress={ () => {alert('Search!')}}
            >
                <ImageBackground source={image} style={styles.imageRounded}><Text></Text></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.profileImgContainer}
            onPress={ () => {alert('Search!')}}
            >
                <ImageBackground source={image} style={styles.imageRounded}><Text></Text></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.profileImgContainer}
            onPress={ () => {alert('Search!')}}
            >
                <ImageBackground source={image} style={styles.imageRounded}><Text></Text></ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    </View> 



    <View>
 
    <Text style={styles.subtitulos}>Paquetes personalizados</Text>
    </View> 
   <View style={styles.dos}>
    <ScrollView horizontal={true}>
            <TouchableOpacity 
            style={styles.profileImgContainer}
            // onPress={ () => StackNavigator('SecondPage', { name: 'Awesomepankaj' })}
            >
                <ImageBackground source={image} style={styles.imageRounded}><Text></Text></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.profileImgContainer}
            onPress={ () => {alert('Search!')}}
            >
                <ImageBackground source={image} style={styles.imageRounded}><Text></Text></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.profileImgContainer}
            onPress={ () => {alert('Search!')}}
            >

                <ImageBackground source={image} style={styles.imageRounded}><Text></Text></ImageBackground>
            </TouchableOpacity>
        </ScrollView>
    </View>
    <Button
            onPress={() => {
                navigation.navigate('DetalleSite', {
                  itemId: 1,
                  otherParam: 'lo que sale del boton',
                });
                console.log('presionado');
            }}
         title='presioname'
    ></Button>
  </ScrollView>
  );
}

const headerHeight=0;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  left:{
    marginLeft:5
  },
  cdmxTouchable:{
    width:140,
    height:140,
    marginTop:5,
    marginBottom: 5
  },
  cdmxImage:{
    width: 130,
    height: 130,
    borderRadius:12,
    overflow: "hidden",
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 130,
    width: 130,
    borderRadius: 20,
  },
  imageRounded:{
    width: 130,
    height: 130,
    borderRadius:15,
    overflow: "hidden",
    // borderWidth: 3,
  },
  buttonAccions:{
     margin:5,
     elevation: 8,
     backgroundColor: "#009688",
     borderRadius: 10,
     paddingVertical: 6,
     paddingHorizontal: 8,
     
  },
  textoButtons:{
    color: 'white',
    fontSize: 20,
    margin:10
    
  },
  text: {
    color: "white",
    fontSize: 30,
    marginTop:17,
    // fontFamily: 'SpaceMono-Regular',
  },
  title: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cabecera:{
      width:'100%',
      // position: 'absolute',
      // top: 0,
      // left: 0,
      // right: 0,
      // zIndex: 10,
      // height: headerHeight,
    },
    imagen:{
        height: 200,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        resizeMode:'center',
        
  },
  dos:{
    flexDirection: 'row',
    marginTop:5,
    marginBottom: 5
  },
  subtitulos:{
      fontSize: 20,
      color:'#353a42',
      marginLeft:5
  },
  searchBar:{
    marginTop:30,
    marginLeft:30,
    marginRight:30,

  },
  subtitle2:{
    margin:5,
    color:'white',
    borderRadius:8,
    textAlign:'center',
    backgroundColor:'rgba(0, 0, 0,0.4)',
    
  }

});