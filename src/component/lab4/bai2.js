import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl, StatusBar, StyleSheet } from 'react-native';


export default Bai2 = ()=>{
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
      // Khi người dùng kéo xuống để làm mới
      console.log("value :"+refreshing);
      setRefreshing(true);
      setRefreshing(false);
      };
    return (
      <View style={styles.container}>
        <ScrollView
         contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style ={{    marginTop : 300}}>KÉO ĐỂ LÀM MỚI</Text>
        </ScrollView>

      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'green',
  },
  contentContainer :{
    alignItems : 'center',
  }
});
