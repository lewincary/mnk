import React from 'react';
import Router from '../navigation/Router';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Chang',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Lasagna'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'http://media.eliteglobaldating.com/modmysite/getphoto.php?height=350&width=300&proprotion=false&imagepath=/home1/mediaegd/public_html/media/images/profile/126/474/orig_13368039821120.jpg',
    subtitle: 'Carrots'
  },
]

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Chat',
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <List containerStyle={{marginBottom: 20}}>
		  {
		    list.map((l, i) => (
		      <ListItem
		        roundAvatar
		        avatar={{uri:l.avatar_url}}
		        key={i}
		        title={l.name}
		        subtitle={l.subtitle}
		        onPress={() => this._handlePress(l)}/>
		    ))
		  }
		</List>

      </ScrollView>
    );
  }

  _handlePress(l){
  		if (l.name=='Amy Chang') {
        	console.log("pressed Amy");
        	this.props.navigator.push(Router.getRoute('chatAmy'));

        }
        if (l.name=='Chris Jackson') {
        	console.log("pressed Chris")
        	this.props.navigator.push(Router.getRoute('chatChris'));
        }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
