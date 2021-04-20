import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Container, Header, Content, Input, Item , Switch, Icon, Left, Body, Right, ListItem, Button} from 'native-base';

const Setting = () => {
  return (
    <View style={styles.center}>
      <Container >
        <Content style={{backgroundColor:"#EFDFDD"}}>
          <Item style={styles.Item} regular>
            <Input  placeholder='Radius'
                    keyboardType = 'numeric' />
          </Item>
          <View style={{marginTop:50}}>
          <ListItem icon>
            <Body>
              <Text>$$$$$$</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text>short time park free</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text>Handicap</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text>Bike</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Body>
              <Text>MC</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          </View>
          <View style={{display: "flex"},{flexDirection:"row"}}>
          <Button style={styles.Button} info><Text style={{marginLeft:20}}> Save </Text></Button> 
          <Button style={styles.Button} success><Text style={{marginLeft:15}}> Search </Text></Button>
          </View>
        </Content>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
      flex: 1},
  Item:{
      marginLeft:10,
      marginRight:10,
      borderRadius:5,
      marginTop:50
    },
  Button:{
      marginVertical:30,
      marginHorizontal:50,
      width:80,
      
  } 
  });


export default Setting;