import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

export default function (props) {
    const height = (Platform.OS === 'ios') ? 20 : StatusBar.currentHeight;
    const { backgroundColor } = props;

    return (
        <View style={{  height, backgroundColor }} />
    );
}

/**
 * 
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    </SafeAreaView>

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

 */