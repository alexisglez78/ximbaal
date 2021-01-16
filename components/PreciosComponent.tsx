import * as React from 'react';
import {Text ,View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

export function Requerimientos(props){
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: 50 }}>
                <Avatar.Icon icon={props.icon}
                    style={{ backgroundColor: 'transparent' }} color="#696969" size={50} />
            </View>
            <View style={{ width:'85%', marginTop: 15}}>
    <Text style={{ color: "#696969" }}>{props.descripcion}</Text>
            </View>
        </View>
    )
}


export default function PreciosComponent(){
    return(
        <View style={styles.container}>
             <View style={styles.viewPrincipal}>
            <Text style={styles.subtitles}>Anfitrion: <Text style={{fontSize:18}}>Jose Gerardo</Text></Text>
            <Requerimientos
            descripcion="60 minutos"
            icon="clock-fast"
            />
            <Requerimientos
            descripcion="idioma: Español"
            icon="spellcheck"
            />
            <Requerimientos
            descripcion="Cancelacion gratuita"
            icon="calendar-alert"
            />
            </View>
            <View style={styles.viewPrincipal}>
                <Text style={styles.subtitles}>Incluye: </Text>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, esse rerum nisi eos deleniti fuga minus delectus minima ut? Consequuntur cum molestias autem tempora. Cupiditate facere neque veritatis obcaecati perspiciatis.</Text>
            </View>
            <View style={styles.viewPrincipal}>
                <Text style={styles.subtitles}>Requerimientos: </Text>
                <Requerimientos
                descripcion="No tener COVID"
                icon="account-check"
                />
                <Requerimientos
                descripcion="Ten mucho cuidado con los niños pequeños"
                icon="baby"
                />
                <Requerimientos
                descripcion="Maleta ligera"
                icon="briefcase"
                />
            </View>
           
        </View>
    )
} 
const styles= StyleSheet.create({
container:{
width:'92%',
marginLeft:20,
marginBottom:10,
},
viewPrincipal:{
borderWidth:0.5,
borderTopColor:'#d8d8d8',
borderRightColor:'transparent',
borderLeftColor:'transparent',
borderBottomColor:'transparent',
paddingTop:10,
paddingBottom:10
},
subtitles:{
    fontSize:19,
    color:"#353535",
}
})