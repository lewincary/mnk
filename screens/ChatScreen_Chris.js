import { GiftedChat } from 'react-native-gifted-chat';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';


export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  }
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Thanks for the carrots! They were so fresh.',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            //avatar: 'https://facebook.github.io/react/img/logo_og.png',
            avatar: 'http://media.eliteglobaldating.com/modmysite/getphoto.php?height=350&width=300&proprotion=false&imagepath=/home1/mediaegd/public_html/media/images/profile/126/474/orig_13368039821120.jpg'
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
