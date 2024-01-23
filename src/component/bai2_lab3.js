import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function Bai2() {
    const [name, setName] = useState("");
    const [sdt, setSdt] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Nhập họ tên"
                placeholderTextColor = '#fff'
                style={styles.input}
            />
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Nhập họ tên"
                placeholderTextColor = '#fff'
                style={styles.input2}
            />
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Nhập họ tên"
                placeholderTextColor = '#fff'
                style={styles.input3}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    input: {
        backgroundColor: "blue", // Thay đổi màu nền của TextInput nếu cần
        width : "90%",
        height : 50,
        marginTop : 100,
        alignSelf : "center",
        color : "white"
    },
    input2: {
        backgroundColor: "blue", // Thay đổi màu nền của TextInput nếu cần
        width : "90%",
        height : 50,
        marginTop : 20,
        alignSelf : "center",
        color : "white"
    },
    input3: {
        backgroundColor: "blue", // Thay đổi màu nền của TextInput nếu cần
        width : "90%",
        height : 50,
        marginTop : 20,
        alignSelf : "center",
        color : "white"
    },
});
