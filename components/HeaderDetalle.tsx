import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground,Share} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Formulario from '../components/formulario';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

export default function TabTwoScreen(props) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
    return(
        <View style={{flex: 1, flexDirection: 'row',opacity:0.7}}>

            <View style={{width: 235, height: 50}} >
        <TouchableOpacity
        onPress={props.onPress}
         style={styles.link}>
          <Text style={{marginLeft:-5.0,marginTop:-5.0}}>
          <Avatar.Icon {...props} icon="arrow-left" size={45} color="#000000" style={{backgroundColor:'transparent'}}/>
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{width: 50, height: 50}} >
        <TouchableOpacity  style={styles.link} 
        onPress={onShare}
        >
          <Text style={{marginLeft:-4.9,marginTop:-6.0}}>
          {/* <Ionicons name="share-vlariant" size={45} color="#000000"  /> */}
          <Avatar.Icon {...props} icon="export-variant" size={45} color="#000000" style={{backgroundColor:'transparent'}}/>
          </Text>
        </TouchableOpacity>
        </View>
        <View style={{width: 50, height: 50}} >
        <TouchableOpacity  style={styles.link}>
          <Text style={{marginLeft:-4.9,marginTop:-3.5}}>
          {/* <Ionicons name="md-heart"  size={32} color="#000000"  /> */}
          <Avatar.Icon {...props} icon="heart-outline" size={45} color="#000000" style={{backgroundColor:'transparent'}}/>
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    link: {
        width:35,
        height:35,
        backgroundColor:'white',
        borderRadius:20,
          marginTop:30,
          marginLeft:20,
        
      },
      iconos:{
        height:40,
        marginTop:-5,
        marginLeft:4
      },
})