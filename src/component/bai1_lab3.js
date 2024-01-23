import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function Bai1() {

    return (
        <View style={styles.container}>
        <View>
          <Text style = {{ color : "#c0deee", fontSize : 16, fontWeight : 'bold',marginTop : 20}}>anh không biết bây giờ{' '}
             <Text style={{ color : 'red', fontSize : 16, fontWeight : 'bold'}}>em có{' '}</Text>
               nhớ đến anh
          </Text>
          <Text style={{ color : 'yellow',fontSize : 16,marginTop : 2}}>nhớ đến nơi ta bên nhau 123
          </Text>
        </View>
        <View>
          <Text style = {{ color : "#c0deee", fontSize : 16, fontWeight : 'bold',marginTop : 20}}>ngày chia tay ấy{' '}
             <Text style={{ color : 'red', fontSize : 22, fontWeight : 'bold'}}>vẫn còn{' '}</Text>
             <Text style = {{ color : "green", fontSize : 11, fontWeight : 'bold',marginTop : 20}}>ngày chia tay ấy{' '}
               nhiều điều chưa nói lòng vẫn chưa yên, anh  mong ngày gặp lại
              </Text>
          </Text>
        </View>
  
        <View>
          <Text style = {{ color : "#6D7B8D", fontSize : 16, fontWeight : 'bold',marginTop : 20}}>anh không biết bây giờ
          em có còn nhớ đến ngà anh không biết từ bao giờ 555
          </Text>
        </View>
        <View>
          <Text style = {{ color : "#fff", fontSize : 16, fontWeight : 'bold',marginTop : 20}}>nói anh nghe 1 lần rồi thôi{' '}
             <Text style={{ color : '#fff', fontSize : 16, fontWeight : 'bold' , textDecorationLine : 'underline'}}>Em   có    biết    rằng</Text>
          </Text>
          <Text style = {{ color : "#fff", fontSize : 16, fontWeight : 'bold',marginTop : 5}}>Em có biết được{' '}
             <Text style={{ color : '#fff', fontSize : 16, fontWeight : 'bold' , textDecorationLine :'underline'}}>anh  sẽ  không  bao  giờ  ra  đi</Text>
          </Text>
             <Text style={{ color : '#fff', fontSize : 16, fontWeight : 'bold',textDecorationLine : 'underline'}}>anh sẽ không bao giờ</Text>
        </View>
  
        <View style = {{width : "100%"}}>
          <Text style = {{ color : "#fff", fontSize : 16, marginTop : 20, textAlign : 'right', alignSelf : "flex-end",marginEnd : 20}}>dù ta xe nhau đâu nghĩa là sẽ quên đi hết
          </Text>
          <Text style = {{ color : "#fff", fontSize : 16, marginTop : 10, textAlign : 'right', alignSelf : "flex-end",marginEnd : 20}}>em có hiểu không
          </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#6699FF',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginRight : 20,
      marginTop : 20,
      marginLeft : 20,
      marginBottom : 80,
      paddingStart : 20,
      paddingEnd : 10
    },
    textBase : {
      color : 'white',
      fontSize : 16,
      marginTop : 20,
    }
    
  });