import React from 'react';
import { Card, ListItem, Button } from 'react-native-elements'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';
import * as Progress from 'react-native-progress';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Impact'
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Card
            title='Your Stats'
            titleStyle={[styles.titleStyle]}
            image={require('../images/profilepic.jpeg')}
            containerStyle={{padding: 0}}>
            <Text style={{marginBottom: 10, textAlign:'center', fontSize:18}}>
              Donated:                     <Text style={{fontWeight:'bold'}}>30</Text> meals     
            </Text>
            <Text style={{marginBottom: 10, textAlign:'center', fontSize:18}}>
              Claimed:                      <Text style={{fontWeight:'bold'}}>21</Text> meals
            </Text>
          </Card>
        </View>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Card
            title='Thanksgiving Donation Challenge'
            titleStyle={[styles.titleStyle]}
            image={require('../images/Thanksgiving.jpg')}
            containerStyle={{padding: 0}}>
            <Progress.Bar progress={0.3} width={250} color={Colors.tintColor}/>
            <Text style={{marginTop:13, marginBottom:15, textAlign:'center', fontSize:20}}>
              <Text style={{fontWeight:'bold'}}>30/100</Text> meals donated   
            </Text>
            <Button
              backgroundColor='#f9ad5f'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='JOIN' 
              onPress={() => Alert.alert(
                'You have joined the challenge.',
                null,
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed!')},
                ]
              )}/>
          </Card>
        </View>

      </ScrollView>
    );
  }
}
/*const showAlert = () => {
  Alert.alert(
    'Your food was posted!',
    'Thanks for helping end food waste.',
  )
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    textAlign:'center',
    fontSize:18,
    marginBottom:15,
  },
});


