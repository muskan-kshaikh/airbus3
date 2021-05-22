import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import Axios from 'axios'

const Report = () => {
  const [text, onChangeText] = React.useState("");
  let state = {
      empID: '',
      anntext: '',
      dept:'',
      date:''
   }

   let handleEmpID = (text) => {
      this.setState({ empID: text })
   }

   let handleAnntext = (text) => {
      this.setState({ anntext: text })
   }
   let handleDept = (text) => {
      this.setState({ dept: text })
   }
   let handleDate = (text) => {
      this.setState({ date: text })
   }

   let send = ()=>
   {
     alert("Announcement Sent")
   }


  return (
    <SafeAreaView>
      <TextInput
        style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Employee ID"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText = {this.handleEmpID}
      />
      <TextInput
        style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Announcement"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText = {this.handleAnntext}
      />
      <TextInput
        style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Department"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText = {this.handleDept}
      />
      <TextInput
        style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Date"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText = {this.handleDate}
      />
      <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.send()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Report;