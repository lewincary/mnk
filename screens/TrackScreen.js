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
import { PricingCard, Card, Button, List, ListItem } from 'react-native-elements';

const list = [
    {
        name: 'Leftover Lasagna',
        avatar_url: 'http://assets.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-b-2000.jpg',
        subtitle: '60 min left to pickup!'
    },
    {
        name: 'Cake',
        avatar_url: 'http://media3.s-nbcnews.com/j/newscms/2016_25/1134626/rainbow-cake-finishedt-today-160621_86a1445147f5a7eda43a54f6e86033f4.today-inline-large.jpg',
        subtitle: '1 day ago'
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

export default class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            visible: true,
            title: 'My Meals'
        },
    }

    _handlePress(l){
        if (l.name == 'Leftover Lasagna') this.props.navigator.push(Router.getRoute('foodProfileLasagna'));
    }

    render() {
        return (
            <View style={styles.container}>
            <SegmentedControlIOS
                tintColor={Colors.tintColor}
                values={['Orders', 'Donations']}
                selectedIndex={0}
                onValueChange ={(value) => {
                    if (value == "Orders") {
                        this.props.navigator.replace(Router.getRoute('track'));
                    } else {
                        this.props.navigator.replace(Router.getRoute('trackDonations'));
                    }
                }}
            ></SegmentedControlIOS>
            <List containerStyle={{marginBottom: 20}}>
            {
                list.map((l, i) => (
                    <ListItem
                    roundAvatar
                    avatar={{uri:l.avatar_url}}
                    key={i}
                    title={l.name}
                    subtitle={l.subtitle}
                    rightIcon={{name: 'check'}}
                    onPress={() => this._handlePress(l)}
                    ></ListItem>
                ))
            }
            </List>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center'
    },
    tabText: {
        margin: 50,
        fontSize: 40
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
});
