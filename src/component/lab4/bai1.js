import { TextInput } from 'react-native';
import React, { useState } from 'react';
import { View, Text, StyleSheet ,Image,FlatList} from 'react-native';


export default function Bai1() {
    const datas = [
        { id: 'id1', title: 'Item 1',image : require('../../assets/aaaa.jpg')   },
        { id: 'id2', title: 'Item 2',image : require('../../assets/aaaa.jpg')   },
        { id: 'id3', title: 'Item 3',image : require('../../assets/aaaa.jpg')   },
        { id: 'id4', title: 'Item 4',image : require('../../assets/aaaa.jpg')   },
        { id: 'id5', title: 'Item 5',image : require('../../assets/aaaa.jpg')   },
        { id: 'id6', title: 'Item 6',image : require('../../assets/aaaa.jpg')   },
        { id: 'id7', title: 'Item 7',image : require('../../assets/aaaa.jpg')   },
        { id: 'id8', title: 'Item 8',image : require('../../assets/aaaa.jpg')   },


    ];
    const RenderItem = ({items}) => (
        <View style={styles.item}>  
            <Image 
                       style = {{
                       width : 120,
                       height : 120,
                       marginStart : 30,
                       borderRadius : 100
                        }}
                       source = {items.image}
            />    
            <Text style = {{marginStart : 20 , fontSize : 20}}>{items.title}</Text>
            <Text style ={{marginStart : 20, fontSize : 20}}>{items.image}</Text>
       </View>
    ) ;
        
    
    return (
     <View style={styles.container}> 
       <FlatList
       data={datas}
       renderItem={({item}) => <RenderItem items={item}></RenderItem>}
       >

       </FlatList>
        
          
    </View>      
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        marginTop : '6%'
    },
    item : {
        flex : 0,
        width : "100%",
        flexDirection: "row",
        justifyContent : 'flex-start',
        alignItems : 'center',
        backgroundColor : '#ffffcf',
        marginBottom : 10
    }
  });
