import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Formulario from '../components/formulario';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import HeaderDetalle from '../components/HeaderDetalle';
import Cards from '../components/Card'
import { Avatar } from 'react-native-paper';
import PreciosComponent from '../components/PreciosComponent';

const image = { uri: "https://reactjs.org/logo-og.png" };
export default function DetalleSite({
  navigation, route
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const { itemId, otherParam } = route.params;
  const [lugar, useLugar] = React.useState();
  const [nombre, setNombre] = React.useState();
  const [detalle, setDetalle] = React.useState();
  const [imagen, setImagen] = React.useState({});

  React.useEffect(() => {
    fetch('https://ludotecapiccolo.000webhostapp.com/detalle.php', {
      method: 'POST',
      body: JSON.stringify({ 'id': itemId })

    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        useLugar(data[0]);
        setNombre(data[0].nombre);
        setDetalle(data[0].detalle);
        setImagen({ uri: data[0].imagen });
      })
  }, []);
  const _renderItem = ({ item, index }) => {
    return (
      <View >
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }
  return (
    <View style={{ height: "100%" }}>
      <ScrollView style={{ height: "90%" }}>

        <View style={{ width: '100%', backgroundColor: 'white' }}>
          <ScrollView horizontal={true} >
            <View style={{ width: 360, height: 200 }}>
              <ImageBackground source={imagen} style={{ height: 200, width: '100%' }}>
                <HeaderDetalle
                  onPress={() => navigation.replace('Root')}
                />
              </ImageBackground>
            </View>
          </ScrollView>
          <View style={styles.center}>
            <Text style={styles.name}>{nombre}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.detalle}>{detalle}</Text>
          </View>
          <View style={styles.viewPrincipalIcons}>
            <View style={styles.vistaIcons}><Text style={styles.alignIcons}><Avatar.Icon icon="star-outline" size={45} color="#696969" style={{ backgroundColor: 'transparent' }} /></Text><Text style={styles.textIcons}>197 veces agregado a favoritos</Text></View>
            <View style={styles.vistaIcons}><Text style={styles.alignIcons}><Avatar.Icon icon="account-group-outline" size={45} color="#696969" style={{ backgroundColor: 'transparent' }} /></Text><Text style={styles.textIcons}>Hasta 6 personas</Text></View>
            <View style={styles.vistaIcons}><Text style={styles.alignIcons}><Avatar.Icon icon="eye" size={45} color="#696969" style={{ backgroundColor: 'transparent' }} /></Text><Text style={styles.textIcons}>325 Visualizaciones</Text></View>
            <View style={styles.vistaIcons}><Text style={styles.alignIcons}><Avatar.Icon icon="heart-outline" size={45} color="#696969" style={{ backgroundColor: 'transparent' }} /></Text><Text style={styles.textIcons}>A 186 les gusta</Text></View>
          </View>
          <View style={{}}>
            <PreciosComponent></PreciosComponent>
          </View>

          <ScrollView horizontal={true} style={{}}>
            <View style={{
              marginLeft: 8,
              height: 130,
              width: 330,
              borderRadius: 20,
            }}>
              <Cards title={
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 50 }}>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#f6c800" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#f6c800" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#f6c800" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#696969" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#696969" style={{ backgroundColor: 'transparent' }} />
                  </View>
                </View>
              }
                subtitle="El lugar esta muy padre pero no venden cahuamas cerquita  :3"></Cards>
            </View>
            <View style={{
              marginLeft: 8,
              height: 130,
              width: 330,
              borderRadius: 20,
            }}>
              <Cards title={
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 50 }}>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#f6c800" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#f6c800" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#f6c800" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#696969" style={{ backgroundColor: 'transparent' }} />
                  </View>
                  <View style={styles.stars} >
                    <Avatar.Icon icon="star" size={30} color="#696969" style={{ backgroundColor: 'transparent' }} />
                  </View>
                </View>
              }
                subtitle="El lugar esta muy padre pero no venden cahuamas cerquita  :3"></Cards>
            </View>

          </ScrollView>
          <View style={styles.viewSecundario}>
            {/* <Formulario></Formulario> */}

          </View>
        </View>
      </ScrollView>
      <View style={{
        width: '100%', flex: 15, flexDirection: 'row', backgroundColor: 'white', borderWidth: 1,
        borderTopColor: '#d8d8d8',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        paddingTop: '2%'
      }}>
        <View style={{ width: '50%', alignItems: 'center', alignContent: 'center' }}>
          <View style={{
            //  elevation: 1,
            backgroundColor: "white",
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 20
          }}>
            <Text style={{ fontWeight: 'bold', color: 'red' }}>$1800.00 mxn</Text>
            <Text > por persona</Text>
          </View>
        </View>
        <View style={{ width: '50%', alignItems: 'center', alignContent: 'center' }}>
          <TouchableOpacity style={{
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 5,
            paddingVertical: 11,
            paddingHorizontal: 15
          }}
            onPress={() =>
              navigation.navigate('DetalleReservacion', {
                itemId: 1997,
                otherParam: 'parametro',
              })
            }
          >
            <Text style={{
              fontSize: 20,
              color: "#fff",
              // fontWeight: "bold",
              alignSelf: "center",
            }}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  center: {
    alignItems: 'center'
  },
  alignIcons: {
    textAlign: 'center'
  },
  textIcons: {
    marginLeft: 13,
    color: '#696969',
    fontSize: 10,
    marginTop: -8
  },
  name: {
    fontSize: 28,
    color: "#353535",
    fontWeight: 'bold',

  },

  imagen: {
    height: 200,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    resizeMode: 'center'
  },
  detalle: {
    fontSize: 19,
    color: "#353535",
    marginLeft: 24,
    marginRight: 20,

  },
  vistaIcons: {
    width: 70,
    height: 90,
    margin: 5,
    textAlign: 'center'
  },
  viewPrincipalIcons: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    paddingLeft: 5
  },
  viewSecundario: {
    marginLeft: 10,
    marginRight: 10,

  },
  stars: {
    width: 20,
    height: 50,
  },
});
