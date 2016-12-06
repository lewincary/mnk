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
        name: 'Lasagna',
        avatar_url: 'http://assets.simplyrecipes.com/wp-content/uploads/2004/12/lasagna-horiz-b-2000.jpg',
        subtitle: '1 day ago'
    },
    {
        name: 'Pizza',
        avatar_url: 'http://static.comicvine.com/uploads/original/11114/111144184/4791207-9790062099-Pizza.jpg',
        subtitle: '3 days ago'
    },
    {
        name: 'Soup',
        avatar_url: 'http://speed.brandoncarter.com/content/2016/01/Vegetables-Soup.jpg',
        subtitle: '4 days ago'
    },
    {
        name: 'Chicken',
        avatar_url: 'http://images.media-allrecipes.com/userphotos/560x315/211414.jpg',
        subtitle: '6 days ago'
    },
    {
        name: 'Quiche',
        avatar_url: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2015/8/4/1/VB0102H_Quiche-Valerie_s4x3.jpg',
        subtitle: '8 days ago'
    },
]

export default class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            visible: true,
            title: 'My Meals'
        },
    }

    render() {
        return (
            <View style={styles.container}>
            <SegmentedControlIOS
                tintColor={Colors.tintColor}
                values={['Orders', 'Donations']}
                selectedIndex={1}
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
                    />
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
