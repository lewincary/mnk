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

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            visible: false,
        },
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#FAF3DD'}}>
                    <View style={{flex: 1, backgroundColor: '#FAF3DD'}}>
                        <View style={styles.center}>
                            <Ionicons name="ios-add-circle-outline" size={80} color="white" />
                            <Text>Add Photo</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                        <Text>"Details Here!"</Text>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'skyblue'}} />
            </View>


        );
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

const styles = StyleSheet.create({
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
});
