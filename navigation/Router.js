import {
  createRouter,
} from '@exponent/ex-navigation';

import TrackScreen from '../screens/TrackScreen';
import PickupScreen from '../screens/PickupScreen';
import PostScreen from '../screens/PostScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatScreenChris from '../screens/ChatScreen_Chris';
import ChatScreenAmy from '../screens/ChatScreen_Amy';
import EventsScreen from '../screens/EventsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  track: () => TrackScreen,
  pickup: () => PickupScreen,
  post: () => PostScreen,
  chat: () => ChatScreen,
  chatAmy: () => ChatScreenAmy,
  chatChris: () => ChatScreenChris,
  impact: () => EventsScreen,
  rootNavigation: () => RootNavigation,
}));
