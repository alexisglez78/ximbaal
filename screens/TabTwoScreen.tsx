import * as React from 'react';
import {
  Platform,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text, View, Modal } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MasonryList from "react-native-masonry-list";





const image = {
  uri:
    'https://i.hipertextual.com/2017/03/22/4ff902d76bb370a7b40756aa6dd65c11.md.jpg',
};
const profile = {
  uri:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS316qTwul1gW8pZ45UJ2WbhL5MuujJbfIuKg&usqp=CAU',
};


export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const AbrirImagen = (param) => {
    console.log(param)
    setModalVisible(true)
  }
  return (
    <View style={{ height: '100%', alignItems: 'center' }} >
      <ScrollView style={{ height: '90%' }}>
        <View>
          <View >
            <ImageBackground source={image} style={styles.imagen}>
              <View style={{ width: '100%' }}>
                <Text style={styles.profileText}>Perfil</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={{ backgroundColor: 'transparent', marginTop: '-18%' }}>
          <Card style={{ margin: 10, height: 200 }}>
            <View style={styles.divProfile}>
              <Image source={profile} style={styles.profile}></Image>
            </View>
            <View style={{ width: '100%', height: 60 }}>
              <TouchableOpacity onPress={() => { alert('Search!') }}>
                <Text
                  style={{
                    margin: 5,

                    height: '40%',
                  }}>
                  <Avatar.Icon
                    icon="settings"
                    size={45}
                    color="#696969"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                borderBottomWidth: 1, borderColor: '#e1e0e0',
                paddingBottom: 10
              }}>
              <Text style={{ fontSize: 25, color: '#696969' }}>
                Paul Alexis
              </Text>
              <Text style={{ color: '#a3a3a3' }}>
                alexisglez78@gmail.com
              </Text>
            </View>
            <View style={{}}>
              <TouchableOpacity style={{ flex: 1, flexDirection: 'row', margin: 5 }}>
                <View
                  style={{
                    width: '12%',
                    height: 50,
                  }}>
                  <Avatar.Icon
                    icon="phone"
                    size={45}
                    color="#a3a3a3"
                    style={{ backgroundColor: 'transparent' }}
                  />

                </View>
                <View
                  style={{
                    width: '78%',
                    height: 50,
                  }}
                >
                  <Text style={{ fontSize: 20, color: '#a3a3a3', marginTop: 8 }}>
                    5574518878
                    </Text>
                </View>
                <View
                  style={{
                    width: '10%',
                    height: 50,
                  }}
                >
                  <Avatar.Icon
                    icon="chevron-right"
                    size={45}
                    color="#a3a3a3"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
        <View>
          <Card style={{ marginLeft: 10, marginRight: 10 }}>
            {/* <Text style={{ marginLeft: 20, fontSize: 20, color: '#696969' }}>Galeria</Text> */}
            <MasonryList
              onPressImage={({ source, index }) => AbrirImagen(source.uri)}
              images={[
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                { uri: "https://d500.epimg.net/cincodias/imagenes/2020/09/04/lifestyle/1599210924_839777_1599210984_rrss_normal.jpg" },

                {
                  source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" }, dimensions: { width: 1080, height: 1920 }
                },
                {
                  source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" }, dimensions: { width: 90, height: 90 }
                },
                {
                  uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                },
                {
                  URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                  // Optional: Does not require an id for each
                  // image object, but is for best practices.
                  id: "blpccx4cn"
                },
                { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
                { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
              ]}
            />
          </Card>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={{ width: '100%', height: '100%', backgroundColor: '#000000bd' }}>
              <View style={{ flex: 1, flexDirection: 'row', opacity: 0.7 }}>

                <View style={{ width: '80%', height: 50 }} >
                  <TouchableOpacity
                    style={styles.link}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{ marginLeft: -5.0, marginTop: -5.0 }}>
                      <Avatar.Icon icon="arrow-left" size={45} color="#000000" style={{ backgroundColor: 'transparent' }} />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '10%', height: 50 }} >
                  <TouchableOpacity style={styles.link}
                  >
                    <Text style={{ marginLeft: -4.9, marginTop: -6.0 }}>
                      {/* <Ionicons name="share-vlariant" size={45} color="#000000"  /> */}
                      <Avatar.Icon icon="export-variant" size={45} color="#000000" style={{ backgroundColor: 'transparent' }} />
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>

              <Text >Hello World!</Text>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text >Hide Modal</Text>
                <Image source={profile} style={styles.profile}></Image>
              </Pressable>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imagen: {
    height: 200,
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 50,
    resizeMode: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    borderRadius: 60,
    borderColor: 'blue',
  },
  divProfile: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 50,
    marginTop: '-16%',
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
    marginTop: 115,
  },
  link: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 20,

  },
  iconos: {
    height: 40,
    marginTop: -5,
    marginLeft: 4
  },
  buttonIcon: {
    borderRadius: 4,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    textAlign: 'center',
    width: 35,
    height: 30,
  },
  infContainer: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 2,
    borderColor: '#696969',
    marginBottom: 5,
  },
  titulo: {
    fontSize: 20,
    color: '#353a42',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 17,
    color: '#333333',
  },
  profileText: {
    color: 'white',
    marginTop: '15%',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNMW94Mz2ja54dMop9fj4ypaOeeIFpDeS7Q&usqp=CAU

// se unio
// ubicacion
// idioma
