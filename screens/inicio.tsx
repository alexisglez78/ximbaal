import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert, Image, Pressable } from 'react-native';
import { FlatList, gestureHandlerRootHOC, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-community/async-storage'
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from "react-native-raw-bottom-sheet";
import SheetInicio from '../components/inicioPage/SheetInicio';

// const Pr = (props) => {
//     return <Text>{props.name}</Text>
// }


const image = { uri: "https://reactjs.org/logo-og.png" };


export default function InicioScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const refRBSheet = React.useRef();
  const [cdmx, setCdmx] = React.useState([]);
  const [user, useUser] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  React.useEffect(() => {
    AsyncStorage.getItem('user')
      .then(resp => {
        if (resp) {
          var respuesta = JSON.parse(resp);
          useUser(true);
        } else {
          useUser(false);
          navigation.navigate('Login');
        }
      })

    fetch('https://ludotecapiccolo.000webhostapp.com/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCdmx(data);
      });
  }, []);
  console.log('hola');
  return (

    <ScrollView style={{ backgroundColor: '#eee' }}>
      <View style={styles.cabecera}>

        <ImageBackground source={{ uri: 'https://i1.wp.com/blog.vivaaerobus.com/wp-content/uploads/2020/04/paisaje-de-los-cabos.jpg?resize=650%2C364&ssl=1' }} style={styles.imagen}>
          <View style={{ position: 'relative', opacity: 0.7 }}>
            <Searchbar
              style={styles.searchBar}
              placeholder="Buscar"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.subtitulos}>Personalizados para ti</Text>
      </View>
      <View style={styles.left}>
        <ScrollView >
          <FlatList
            horizontal
            data={cdmx}
            renderItem={({ item }) =>
              <TouchableOpacity style={styles.cdmxTouchable}
                onPress={() => {
                  console.log(item)
                  var id = item.id;
                  navigation.navigate('DetalleSite', {
                    itemId: id,
                    otherParam: 'ewfwefwe',
                  });
                }}
                onLongPress={() => refRBSheet.current.open()}
              >
                <ImageBackground
                  source={{ uri: item.imagen }}
                  style={styles.cdmxImage}
                >
                  <View style={{ marginLeft: 5, marginRight: 10, height: 30, alignItems: 'flex-end' }}>
                    <Pressable >
                      <Icon name='ios-heart' color="#eee" style={{ fontSize: 25, marginLeft: 5, height: '100%', marginTop: 5 }}></Icon>
                    </Pressable>
                  </View>
                </ImageBackground>
                <Text style={{ marginLeft: 5, marginTop: '-10%', fontSize: 15, color: '#1f262edb' }}>{item.nombre}</Text>
                <Text style={{ marginLeft: 5, fontSize: 12, marginTop: 5, color: '#1f262edb' }}>A 11987 personas les gusta</Text>
              </TouchableOpacity>
            }
            keyExtractor={item => String(item.id)}
          >
          </FlatList>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.subtitulos}>Mas Populares</Text>
      </View>
      <View style={styles.dos}>
        <ScrollView>
          <FlatList
            data={cdmx}
            renderItem={({ item }) =>
              <TouchableOpacity style={styles.cdmxTouchable2}
                onPress={() => {
                  var id = item.id;
                  navigation.navigate('DetalleSite', {
                    itemId: id,
                    otherParam: 'ewfwefwe',
                  });
                }}
                onLongPress={() => refRBSheet.current.open()}
              >
                <ImageBackground
                  source={{ uri: item.imagen }}
                  style={styles.cdmxImage}
                >
                  <View style={{ marginLeft: 5, marginRight: 10, height: 30, alignItems: 'flex-end' }}>
                    <Pressable>
                      <Icon name='ios-heart' color="#eee" style={{ fontSize: 25, marginLeft: 5, height: '100%', marginTop: 5 }}></Icon>
                    </Pressable>
                  </View>
                </ImageBackground>
                <Text style={{ marginLeft: 5, marginTop: '-6%', fontSize: 15, color: '#1f262edb' }}>{item.nombre}</Text>
                <Text style={{ marginLeft: 5, fontSize: 12, marginTop: 5, color: '#1f262edb' }}>A 11987 personas les gusta</Text>
              </TouchableOpacity>
            }
            keyExtractor={item => String(item.id)}
          >
          </FlatList>
        </ScrollView>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <SheetInicio />
      </RBSheet>
    </ScrollView>
  );
}

const headerHeight = 0;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  left: {
    marginLeft: 5
  },
  cdmxTouchable: {
    width: 170,
    height: 140,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 3
  },
  cdmxTouchable2: {
    width: '95%',
    height: 170,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 20,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 3,
    shadowRadius: 5,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 3
  },
  cdmxImage: {
    width: '100%',
    height: '80%',
    borderRadius: 2,
    overflow: "hidden",
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 130,
    width: 130,
    borderRadius: 20,
  },
  imageRounded: {
    width: 130,
    height: 130,
    borderRadius: 15,
    overflow: "hidden",
  },
  buttonAccions: {
    margin: 5,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,

  },
  textoButtons: {
    color: 'black',
    fontSize: 20,
    margin: 10

  },
  text: {
    color: "white",
    fontSize: 30,
    marginTop: 17,
  },
  title: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cabecera: {
    width: '100%',
  },
  imagen: {
    height: 200,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    resizeMode: 'center',

  },
  dos: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'transparent'
  },
  subtitulos: {
    fontSize: 20,
    color: '#1f262edb',
    marginLeft: 5,
    marginTop: 5
  },
  searchBar: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  subtitle2: {
    margin: 5,
    color: 'white',
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.4)',

  }

});