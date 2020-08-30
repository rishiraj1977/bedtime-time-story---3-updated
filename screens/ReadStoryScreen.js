import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>READ STORY</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});