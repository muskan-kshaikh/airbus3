// import React from 'react';
// import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import {Container} from 'native-base';
// import Home from './Home'
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// const HomeScreen = ({navigation}) => {
// state = {
//     screen:0
//   }

//   const onScreenChange= ()=>{
//     if(this.state.screen==0)
//       return (
//           <Home/>
//       )
//     else if(this.state.screen == 1)
//       return (
//           <Chat/>);
//     else if(this.state.screen == 2)
//       return (
//           <Notifications/>);
//     else if(this.state.screen == 3)
//       return (
//           <Search/>);
//     else if(this.state.screen == 4)
//       return (
//           <Report/>);
//   }

//   const { colors } = useTheme();

//   const theme = useTheme();
  
//     return (
//       <Container>
//       <View 
//       style={styles.container}
//       >
      
        
//       {/*<Button
//         title="Go to details screen"
//         onPress={() => navigation.navigate("Widget")}
//       />

      
      
//         {/* Rest of the app comes ABOVE the action button component !*/}
        
//         <ActionButton buttonColor="#00000f">
//           <ActionButton.Item buttonColor='#9b59b6' title="Support" onPress={() => console.log("notes tapped!")}>
//             <Icon name="md-help" style={styles.actionButtonIcon} />
//           </ActionButton.Item>
//           <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
//             <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
//           </ActionButton.Item>
//           <ActionButton.Item buttonColor='#1abc9c' title="Search" onPress={() => {}}>
//             <Icon name="md-search" style={styles.actionButtonIcon} />
//           </ActionButton.Item>
//           <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Report" onPress={() => {}}>
//             <Icon name="md-warning" style={styles.actionButtonIcon} />
//           </ActionButton.Item>
//         </ActionButton>
//       </View>
   
//       </Container>
//     );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Chat from '../Chatbot/Chat'
 import Search from './Search'
import Report from './Report'
 import Notifications from './Notification'
 import Home from './Home'
export default class HomeScreen extends Component {


  state = {
    screen:0
  }

  onScreenChange= ()=>{
    if(this.state.screen==0)
      return (
          <Home/>
      )
    else if(this.state.screen == 1)
      return (
          <Chat/>);
    else if(this.state.screen == 2)
      return (
          <Notifications/>);
    else if(this.state.screen == 3)
      return (
          <Search/>);
    else if(this.state.screen == 4)
      return (
          <Report/>);
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: 'white'}}>
        {this.onScreenChange()}
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionButton buttonColor="#00000f">
          <ActionButton.Item buttonColor='#9b59b6' title="Support" onPress={() => {
            this.setState({screen:1})
          }}>
            <Icon name="md-help" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {
            this.setState({screen:2})
          }}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Search"  onPress={() => {
            this.setState({screen:3})
          }}>
            <Icon name="md-search" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Report"  onPress={() => {
            this.setState({screen:4})
          }}>
            <Icon name="md-warning" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
