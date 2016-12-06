import React from 'react';
import { Card, ListItem, Button } from 'react-native-elements'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
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
            image={require('../images/Amy.jpg')}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
          </Card>
        </View>
        <View style={{flexDirection: 'row', padding: 40}}>
          <Progress.Bar progress={0.3} width={200} color={Colors.tintColor}/>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


