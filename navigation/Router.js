import {
  createRouter,
} from '@exponent/ex-navigation';

import TrackScreen from '../screens/TrackScreen';
import TrackScreenDonations from '../screens/TrackScreen_Donations';
import PickupScreen from '../screens/PickupScreen';
import PickupScreenList from '../screens/PickupScreen_List';
import PostScreen from '../screens/PostScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatScreenChris from '../screens/ChatScreen_Chris';
import ChatScreenAmy from '../screens/ChatScreen_Amy';
import EventsScreen from '../screens/EventsScreen';
import FoodProfileScreenCarrots from '../screens/FoodProfileScreenCarrots';
import FoodProfileScreenLasagna from '../screens/FoodProfileScreenLasagna';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  track: () => TrackScreen,
  trackDonations: () => TrackScreenDonations,
  pickup: () => PickupScreen,
  pickupList: () => PickupScreenList,
  post: () => PostScreen,
  chat: () => ChatScreen,
  chatAmy: () => ChatScreenAmy,
  chatChris: () => ChatScreenChris,
  events: () => EventsScreen,
  rootNavigation: () => RootNavigation,
  foodProfileCarrots: () => FoodProfileScreenCarrots,
  foodProfileLasagna: () => FoodProfileScreenLasagna,
}));
