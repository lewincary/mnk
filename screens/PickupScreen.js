import React, {
  PropTypes,
} from 'react';
import {
  ActionSheetIOS,
  ActivityIndicator,
  Alert,
  AlertIOS,
  DatePickerIOS,
  Image,
  Picker,
  Platform,
  ProgressViewIOS,
  RefreshControl,
  SegmentedControlIOS,
  Slider,
  Switch,
  StatusBar,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
  WebView,
} from 'react-native';
import {
  withNavigation
} from '@exponent/ex-navigation';

import {
  ImagePicker,
} from 'exponent';

import { connect } from 'react-redux';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Router from '../navigation/Router';

import { Components } from 'exponent';
import { List, ListItem } from 'react-native-elements';

const list = [
    {
        name: 'Cake',
        avatar_url: 'http://media3.s-nbcnews.com/j/newscms/2016_25/1134626/rainbow-cake-finishedt-today-160621_86a1445147f5a7eda43a54f6e86033f4.today-inline-large.jpg',
        subtitle: '10 min left to pickup!'
    },
    {
        name: 'Pasta',
        avatar_url: 'http://www.pmq.com/January-2013/Pasta-dishes-yield-high-profits-enhance-menus-and-help-create-a-true-Italian-dining-experience/pasta-openpic.jpg',
        subtitle: '3 days ago'
    },
    {
        name: 'Potatoes',
        avatar_url: 'http://blog.oxforddictionaries.com/wp-content/uploads/potato.jpg',
        subtitle: '5 days ago'
    },
    {
        name: 'Steak',
        avatar_url: 'https://i.ytimg.com/vi/qKwKWwGt1SY/maxresdefault.jpg',
        subtitle: '7 days ago'
    },
    {
        name: 'Lobster',
        avatar_url: 'http://www.lobsterboatrestaurant.com/images/twinlobster.png',
        subtitle: '9 days ago'
    },
]

var markers = [
    {
        latitude: 37.4241,
        longitude: -122.1661,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title: 'Leftover Pizza',
        subtitle: 'hello',
        animateDrop: true,
    },
    {
        latitude: 37.4245,
        longitude: -122.1663,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title: 'Lasagna',
    },
    {
        latitude: 37.4242,
        longitude: -122.1664,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title: 'Canned Soup',
    },
    {
        latitude: 37.4242,
        longitude: -122.1664,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title: 'Cake',
    }
];


var markers_2 = [
  {
    latitude: 45.65,
    longitude: -78.90,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];

export default class PickupScreen extends React.Component {
    static route = {
        navigationBar: {
            visible: true,
            title: 'Pickup'
        },
    }

    state = {
        mapRegion: {
            latitude: 37.4241,
            longitude: -122.1661,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        annotations: [
            {
                latitude: 37.4241,
                longitude: -122.1661,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                title: 'Leftover Pizza',
                subtitle: 'hello',
                animateDrop: true,
            },
        ],
    }



    render() {
        return (
            <View style={{flex: 1}}>
                <SegmentedControlIOS
                    tintColor={Colors.tintColor}
                    values={['Map', 'List']}
                    selectedIndex={0}
                    onValueChange ={(value) => {
                        if (value == "Map") {
                            this.props.navigator.replace(Router.getRoute('pickup'));
                        } else {
                            this.props.navigator.replace(Router.getRoute('pickupList'));
                        }
                    }}
                ></SegmentedControlIOS>
                <Components.MapView
                style={{flex: 1}}
                region={this.state.mapRegion}
                annotations = { markers }
                showsUserLocation = {true}
                showsAnnotationCallouts  = {true}
                >
                </Components.MapView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    hd1: {
        fontSize: 35,
        color: '#F9AD5F',
        textAlign: 'center',
    },
    mnk_section_hdr: {
        height: 60,
        paddingTop: 10,
        margin: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 15,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 80,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 34.5,
        marginTop: 3,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 23,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    map: {
        flex: 1,
    },
});
