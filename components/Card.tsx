import *as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View,StyleSheet,Text } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="account" style={{marginTop:15}}/>

export default function Cards(props) {
    return(
       <View style={styles.container}>
       <Card style={styles.card}>
       <Card.Title title={<Text><Text>Alexis Glez</Text> <Text style={{fontSize:12,color:'#7f7f7f'}}>1 de octubre del 2017</Text></Text>} left={LeftContent} style={{marginTop:-17,}}></Card.Title>
       <Card.Content>
    <Title style={{marginBottom:-19,marginLeft:46,marginTop:'-3%'}}>{props.title}</Title>
    <Paragraph style={{}}>{props.subtitle}</Paragraph>
       </Card.Content>
       {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
       <Card.Actions>
         {/* <Button onPress={props.onCancel}>Cancel</Button> */}
         {/* <Button onPress={props.onOk}>Ok</Button> */}
       </Card.Actions>
     </Card>
       </View>
    )
 
    };

    const styles=StyleSheet.create({
        container:{
            
            width:'95%',
            marginLeft:10,
            marginRight:10,
            marginBottom:10,
        },
        card:{
            width:'100%',
            // backgroundColor:'#e8e8e8',
            borderColor:'#f0f0f0',
            borderWidth:1
        },
    });