import { TextInput } from 'react-native';
import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet ,Image,TouchableHighlight} from 'react-native';


export default function Bai3() {

    const [modalVisible, setModalVisible] = useState(false);
    const aa = ()=>{ 
       setModalVisible(true) };
    return (
     <View style={styles.container}> 
     <Button title='show modal' style = {styles.button   } color='green'    onPress ={aa}></Button>    
      <Modal
        style = {styles.modalContainer}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.viewchirent}>
        <Text style = {{backgroundColor : 'white',marginTop : 20 ,fontSize : 15}}>Hello World</Text>
          <Image
          style = {styles.image}
          resizeMode="stretch"
          source = {require('../assets/aaaa.jpg')}
          />
          <TouchableHighlight onPress={ 
                              () => setModalVisible(false) } 
                              style = {{backgroundColor : 'blue', borderRadius : 30,marginTop :15}
                              }>
            <View>
            <Text style = {{paddingStart : 10, paddingEnd : 10,paddingTop : 5, paddingBottom : 5 }}>Đóng Modal</Text>
            </View>
           </TouchableHighlight>
        </View>
      </Modal>
        </View>      
    );
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : 'red'
    },
    modalContainer : {
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewchirent: {
      flex : 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : 'grey',
      marginTop : 280
    },
   button : {
    fontSize : 20,
    width : 200,
    flex : 0.1,
    borderRadius : 100,
    marginTop : 20,
    color : 'green'
   }
   ,
   image : {
    width : "60%",
    height : "50%",
    backgroundColor : 'green',
    marginTop : 20
   }
  });
