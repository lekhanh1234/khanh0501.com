// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button ,TextInput,SafeAreaView,StyleSheet,TouchableOpacity,Image} from 'react-native';

// Màn hình đăng nhập
const LoginScreen = ({ navigation }) => {
    const [InputChange,setInputChange] = useState('');
    handleInputChange =(input)=>{
           setInputChange(input);
    }

    const [InputChange2,setInputChange2] = useState('');

    handleInputChange2 =(input)=>{
       setInputChange2(input);
    }

  return (
    <View>
      <Text>Login vào tài khoản của bạn</Text>
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setInputChange}
        value={InputChange}
        placeholder='Nhập userName'
      />
      <TextInput
        style={styles.input}
        onChangeText={setInputChange2}
        value={InputChange}
        placeholder="Nhập mật khẩu"
        keyboardType="numeric"
      />
    </SafeAreaView>
    <TouchableOpacity
        
        title="Login"
        style={{ height: 50, width: "70%", backgroundColor: 'blue' ,marginStart : 60,marginTop : 20, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => navigation.navigate('SignUp')}
    >
      <Text>Sing up</Text>
    </TouchableOpacity>
    </View>
  );
};

// Màn hình dang ki

const SignupScreen = ({ navigation }) => {
  return (
    <View style ={{textAlign : 'center',flex :1}}>
      <Text style = {{textAlign : 'center',fontSize : 14}}>Sing up Account của bạn</Text>
      <SafeAreaView>
      <TextInput
        style={styles.input}
        value={""}
        placeholder="Nhập userName"
      />
      <TextInput
        style={styles.input}
        value={""}
        placeholder="Nhập mật khẩu"
      />
      <TextInput
        style={styles.input}
        value={""}
        placeholder="Nhập lại mật khẩu"
      />
      </SafeAreaView>
    <TouchableOpacity
        
        title="Sign up"
        style={{ height: 50, width: "70%", backgroundColor: 'blue' ,marginStart : 60,marginTop : 20, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => navigation.navigate('SignUp')}
    >
      <Text>Sing up</Text>
    </TouchableOpacity>
    </View>
  );
};

// Màn hình chính (sau khi đăng nhập)
const HomeScreen = ({ navigation }) => {
  return (
    <View style ={{flex : 1,alignItems :'center'}}>
      <Text style={{fontSize : 30}}>trang Home</Text>
      <Image
          style = {styles.image}
          resizeMode="stretch"
          source = {require('../../assets/anhhoctap.jpg')}
      />
      <TouchableOpacity
         title="Sign up"
        style={{ height: 50, width: "80%", backgroundColor: 'blue',marginTop : 30, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => navigation.navigate('SignUp')}
      >
       <Text>Sign Up</Text>
      </TouchableOpacity>
       <TouchableOpacity
         title="Login"
        style={{ height: 50, width: "80%", marginTop : 30, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}
        onPress={() => navigation.navigate('Login')}
      >
       <Text>Login</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const Stack = createStackNavigator();

const ASM = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"123"}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    image : {
        width : "80%",
        height : "25%",
        backgroundColor : 'green',
        marginTop : 20
       }
  });


export default ASM;
