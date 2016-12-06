import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Notifications,
} from 'exponent';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <TabNavigation
        tabBarHeight={56}
        initialTab="pickup">

        <TabNavigationItem
          id="pickup"
          title="Pickup"
          renderIcon={isSelected => this._renderIcon('cutlery', isSelected)}>
          <StackNavigation initialRoute="pickup" />
        </TabNavigationItem>

        <TabNavigationItem
          id="post"
          title="Post"
          renderIcon={isSelected => this._renderIcon('pencil', isSelected)}>
          <StackNavigation initialRoute="post" />
        </TabNavigationItem>

        <TabNavigationItem
          id="track"
          title="My Meals"
          renderIcon={isSelected => this._renderIcon('map-marker', isSelected)}>
          <StackNavigation initialRoute="track" />
        </TabNavigationItem>

        <TabNavigationItem
          id="chat"
          title="Chat"
          renderIcon={isSelected => this._renderIcon('envelope', isSelected)}>
          <StackNavigation initialRoute="chat" />
        </TabNavigationItem>

        <TabNavigationItem
          id="impact"
          title="Impact"
          renderIcon={isSelected => this._renderIcon('bullseye', isSelected)}>
          <StackNavigation initialRoute="impact" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({origin, data}) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
