import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Search from './Search'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


const MyComponent = () => (
  <Card>
    <h1>About Air Crafts</h1>
    <div>
      <Search/>
    </div>
    <Card.Title title="Commercial Aircraft" subtitle="Card Subtitle" left={LeftContent} />
    
  </Card>
  
);

export default MyComponent;