import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export default function SheetPerfil(props: any) {
    return (
        <View>
            <Text style={styles.titulo}>Acciones</Text>
            <Pressable style={styles.pressableActions}><Icon name='ios-trash' color="#1f262ead" style={{ fontSize: 20, marginLeft: 5, height: '100%', marginTop: 5 }}><Text > Eliminar de galeria</Text></Icon></Pressable>
            <Pressable style={styles.pressableActions}><Icon name='ios-share' color="#1f262ead" style={{ fontSize: 20, marginLeft: 5, height: '100%', marginTop: 5 }}><Text > Compartir</Text></Icon></Pressable>
            <Pressable style={styles.pressableActions}><Icon name='ios-save' color="#1f262ead" style={{ fontSize: 20, marginLeft: 5, height: '100%', marginTop: 5 }}><Text > Guardar en mi dispositivo</Text></Icon></Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        color: '#a3a3a3',
        marginLeft: 10,
        marginBottom: 10
    },
    pressableActions: {
        marginLeft: 15,
        marginRight: 15,
        height: 30,
        shadowColor: "#a3a3a3",
        marginTop: 7
    },
});