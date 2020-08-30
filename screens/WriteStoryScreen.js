import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    }

    render(){
        return(

           
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
               
                <Header 
                    backgroundColor = {'black'}
                    centerComponent = {{
                        text : '::BED TIME STORIES::',
                        style : { color: 'gold', fontSize: 20}
                    }}
                />
                <TextInput 

                    placeholder="STORY TITLE"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="AUTHOR"
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="WRITE YOUR STORY HERE"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}>
                    <Text style={styles.buttonText}>SUBMIT</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
           
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10
  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'black',
      width: 80,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: 'gold',
      fontWeight: 'bold'
  }
});