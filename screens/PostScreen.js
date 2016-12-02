import React from 'react';
import { Ionicons } from '@exponent/vector-icons';
import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
} from 'react-native';
import Router from '../navigation/Router'
import Button from 'react-native-button';
var t=require('tcomb-form-native');
import { MonoText } from '../components/StyledText';

var Form = t.form.Form;

var Person = t.struct({
    Title: t.String,              // a required string
    Quantity: t.Number,               // a required number
    Description: t.maybe(t.String),  // an optional string
    PickupDetails: t.maybe(t.String),  // an optional string
    rememberMe: t.Boolean        // a boolean
});

var options = {};

export default class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            visible: false,
        },
    }

    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                />
                <Button
                        style={{fontSize: 20, color: 'red'}}
                        styleDisabled={{color: 'red'}}
                        onPress={() => this._handlePress()}>
                        Post
                </Button>
            </View>
            /*<View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#FAF3DD'}}>
                    <View style={{flex: 1, backgroundColor: '#FAF3DD'}}>
                        <View style={styles.center}>
                            <Ionicons name="ios-add-circle-outline" size={80} color="white" />
                            <Text>Add Photo</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'steelblue', justifyContent: 'center'}}>
                        <Text>"Title:"</Text>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'skyblue'}}>
                    <Button
                        style={{fontSize: 20, color: 'red'}}
                        styleDisabled={{color: 'red'}}
                        onPress={() => this._handlePress()}>
                        Post
                    </Button>
                </View>

            </View>*/


        );
    }

    _handlePress(){
        console.log("pressed");
        this.props.navigator.push(Router.getRoute('track'));
    }

    _maybeRenderDevelopmentModeWarning() {
        if (__DEV__) {
            const learnMoreButton = (
                <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
                Learn more
                </Text>
            );

            return (
                <Text style={styles.developmentModeText}>
                Development mode is enabled, your app will run slightly slower but
                you have access to useful development tools. {learnMoreButton}.
                </Text>
            );
        } else {
            return (
                <Text style={styles.developmentModeText}>
                You are not in development mode, your app will run at full speed.
                </Text>
            );
        }
    }

    _handleLearnMorePress = () => {
        Linking.openURL('https://docs.getexponent.com/versions/latest/guides/development-mode');
    }

    _handleHelpPress = () => {
        Linking.openURL('https://docs.getexponent.com/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
    }
}

/*const styles = StyleSheet.create({
    center: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    add_photo: {
        backgroundColor: '#F9AD5F',
    },
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
});*/

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

