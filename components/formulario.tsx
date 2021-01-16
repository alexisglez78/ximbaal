import React,{Component,useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextProps } from './Themed';
import CustomButton from './buttonPrincipal';

const UselessTextInput = () => {
    const [value, onChangeText] = React.useState('');
    const [selectedValue, setSelectedValue] = useState();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
    return (
        <View style={styles.viewPrincipal}>
            <View>
            <Text style={styles.textPrimary}>Huesped: </Text>
            <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder="awdaw"
            placeholderTextColor='#696969'
          />
            </View>
          <Text style={styles.textPrimary}>Selecciona el numero de huespedes: </Text>
          <View style={{borderColor:'#696969',borderWidth:1}}>
          <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="De 1 a 4 " value="1" />
        <Picker.Item label="De 5 a 6 " value="2" />
        </Picker>
          </View>
        <View>
          <Text style={styles.textPrimary}>Cuando desea reservar: </Text>
          <TouchableOpacity onPress={showDatePicker} style={styles.calendar}>
            <Text style={styles.picker}>01/10/1997</Text>
          </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> 
    </View>
    <View style={{marginTop:10}}>
       <CustomButton 
	text="Reservar"
	onPress={() => {
		alert("Hi there!!!");
	}}
/>
    </View>
        </View>
    );
  }
  
  export default UselessTextInput;

  const styles = StyleSheet.create({
    textPrimary:{
      color:"#353535",
      fontSize:17
    },
    viewPrincipal:{
      marginLeft:10,
      marginRight:10,
      flex:1
    },
    input:{
       height: 40, 
       borderColor: 'gray',
        borderWidth: 1,
        width:'100%',
        paddingLeft:5
      },
    picker:{
      color:"#696969",
      flex: 1,

    },
    calendar:{
      height:35,
      borderColor:'#696969',
      borderWidth:1,
      paddingLeft:10,
      paddingTop:5,
    }
})

