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
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {
  withNavigation
} from '@exponent/ex-navigation';

import {
  ImagePicker,
} from 'exponent';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Router from '../navigation/Router';


@withNavigation
class ExponentButton extends React.Component {

  _handlePress = () => {
    this.props.navigator.push(Router.getRoute('exponent'));
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this._handlePress}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 10, paddingTop: 1,}}>
        <Image
          source={require('../assets/images/exponent-icon.png')}
          style={{width: 21, height: 17}}
        />
      </TouchableOpacity>
    );
  }

}

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Post',
      translucent: true,
      renderRight: () => <ExponentButton />,
    },
  }

  state = {
    isRefreshing: false,
    dataSource: new ListView.DataSource({
      rowHasChanged: () => false,
      sectionHeaderHasChanged: () => false,
    }),
  }

  onRefresh = () => {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 3000);
  }


  componentDidMount() {
    let dataSource = this.state.dataSource.cloneWithRowsAndSections({
      //'Vertical ScrollView, RefreshContro': [this._renderRefreshControl],
      //'Progress': [this._renderProgressView],
      'Take a photo of the food...': [this._renderImagePicker],
      'Add a photo of the food!': [this._renderHorizontalScrollView],
      'Please enter a title:': [this._renderTextInput],
      'Choose the type of food:': [this._renderSegmentedControl],
      'How many adults does it feed?': [this._renderPicker],
      'Select the allergens:': [this._renderCheckBoxes],
      'What is the pickup location?': [this._renderTextInput2],
      'Please enter pickup details:': [this._renderTextInput3],
      //'ActivityIndicator': [this._renderActivityIndicator],
      //'Great job - you\'re almost done!': [this._renderAlert],
      //'DatePickerIOS': [this._renderDatePicker],
      //'Slider': [this._renderSlider],
      //'StatusBar': [this._renderStatusBar],
      //'Switch': [this._renderSwitch],
      //'Text': [this._renderText],
      'Optional: Share your post on social media!': [this._renderActionSheet],
      'You\'re all set!': [this._renderTouchables],
      // 'View': [this._renderView],
      //'WebView': [this._renderWebView],
    });

    this.setState({dataSource});
  }

  render() {
    return (
        <ListView
          keyboardShouldPersistTaps
          keyboardDismissMode="on-drag"
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}
            />
          }
          style={this.props.route.getContentInsetsStyle()}
          contentContainerStyle={{backgroundColor: '#fff'}}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSectionHeader={this._renderSectionHeader}
        />
    );
  }
  _renderCheckBoxes = () => {

    return (
      <View>
        <CheckBox
          title='Milk'
          checked={this.state.checked}
        ></CheckBox>
        <CheckBox
          title='Click Here'
          checked={this.state.checked}
        ></CheckBox>
        <CheckBox
          title='Click Here'
          checked={this.state.checked}
        ></CheckBox>
      </View>
    );
  }

  _renderImagePicker = () => {
    const showCamera = async () => {
      let result = await ImagePicker.launchCameraAsync({});
    }

    const showPhotos = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({});
    }

    return (
      <View style={{flexDirection: 'row', padding: 40}}>
        <Button onPress={showCamera}>
          Open Camera
        </Button>

        <Button onPress={showPhotos}>
          Open Photos
        </Button>
      </View>
    );
  }

  _renderRefreshControl = () => {
    return (
      <View style={{padding: 10}}>
        <Text>This screen is a vertical ScrollView, try the pull to refresh gesture to see the RefreshControl.</Text>
      </View>
    );
  }

  _renderActionSheet = () => {
    /*const showActionSheet = () => {
      ActionSheetIOS.showActionSheetWithOptions({
          options: [ 'Option 0', 'Option 1', 'Delete', 'Cancel' ],
          cancelButtonIndex: 3,
          destructiveButtonIndex: 2,
        },
        (buttonIndex) => { console.log({buttonIndex}) },
      );
    }*/

    const showShareSheet = () => {
     ActionSheetIOS.showShareActionSheetWithOptions({
        url: 'https://getexponent.com',
        message: 'I just posted on My Neighbor\'s Kitchen!',
        subject: 'Check out my use of My Neighbor\'s Kitchen',
      },
      (error) => alert(error),
      (success, method) => {
        if (success) {
          alert(`Shared via ${method}`);
        }
      });
    }

    return (
      <View style={{flexDirection: 'row', padding: 10, marginLeft: 85}}>

        <Button onPress={showShareSheet}>
          Share my post!
        </Button>
      </View>
    );
  }

  _renderActivityIndicator = () => {
    const Spacer = () => <View style={{marginRight: 10}} />
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <ActivityIndicator size="small" />
        <Spacer />
        <ActivityIndicator size="large" />
        <Spacer />
        <ActivityIndicator size="small" color={Colors.tintColor} />
        <Spacer />
        <ActivityIndicator size="large" color={Colors.tintColor}/>
        <Spacer />
        <ActivityIndicator size="small" animating={false} hidesWhenStopped={false} />
        <Spacer />
        <ActivityIndicator size="large" animating={false} hidesWhenStopped={false}  />
      </View>
    );
  }

  _renderAlert = () => {
    const showPrompt = () => {
      /*AlertIOS.prompt(
        'Enter a value',
        null,
        text => console.log(`You entered ${text}`)
      );*/
    }

    const showAlert = () => {
      Alert.alert(
        'Your food was posted!',
        'Thanks for helping end food waste.',
        [
          {text: 'Return to My Neighbor\'s Kitchen', onPress: () => console.log('return pressed')},
        ]
      )
    }

    return (
      //need to add another button to cancel
      <View style={{padding: 10, flexDirection: 'row', flex: 1}}>


        <Button onPress={showAlert}>
          Post!
        </Button>
      </View>
    );
  }

  _renderDatePicker = () => {
    return <DatePickerExample />
  }

  _renderHorizontalScrollView = () => {
    const imageStyle = {width: Layout.window.width, height: Layout.window.width / 2};

    return (
      <ScrollView
        pagingEnabled
        directionalLockEnabled
        horizontal
      >
        <Image source={require('../assets/images/example1.jpg')} style={imageStyle} resizeMode="cover" />
        <Image source={require('../assets/images/example2.jpg')} style={imageStyle} resizeMode="cover" />
        <Image source={require('../assets/images/example3.jpg')} style={imageStyle} resizeMode="cover" />
      </ScrollView>
    );
  }

  _renderPicker = () => {
    return <PickerExample />;
  }

  _renderProgressView = () => {
    return (
      <View style={{padding: 10, paddingBottom: 30}}>
        <ProgressViewExample initialProgress={0} />
        <ProgressViewExample progressTintColor="red" initialProgress={0.4} />
        <ProgressViewExample progressTintColor="orange" initialProgress={0.6} />
        <ProgressViewExample progressTintColor="yellow" initialProgress={0.8} />
      </View>
    );
  }

  _renderSegmentedControl = () => {
    return <SegmentedControlExample />;
  }

  _renderSlider = () => {
    return (
      <View style={{padding: 10}}>
        <SliderExample />
      </View>
    );
  }

  _renderStatusBar = () => {
    const randomAnimation = () => {
      return Math.random() > 0.5 ? 'slide' : 'fade';
    }

    const hide = () => {
      StatusBar.setHidden(true, randomAnimation());
    }

    const show = () => {
      StatusBar.setHidden(false, randomAnimation());
    }

    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <Button onPress={hide}>
          Hide
        </Button>

        <Button onPress={show}>
          Show
        </Button>
      </View>
    );
  }

  _renderSwitch = () => {
    return <SwitchExample />;
  }

  _renderTextInput2 = () => {
    return <TextInputExample2 />;
  }

  _renderTextInput3 = () => {
    return <TextInputExample3 />;
  }

  _renderText = () => {
    const linkStyle = {color: Colors.tintColor, marginVertical: 3};

    return (
      <View style={{padding: 10}}>
        <Text>All text in React Native on iOS uses the native text component and supports a bunch of useful properties.</Text>
        <Text style={linkStyle} onPress={() => alert('pressed!')}>Press on this!</Text>
        <Text numberOfLines={1} ellipsizeMode="tail">It's easy to limit the number of lines that some text can span and ellipsize it</Text>
      </View>
    );
  }
  _renderTextInput = () => {
    return <TextInputExample />;
  }
  _renderTouchables = () => {
    const showAlert = () => {
      Alert.alert(
        'Your food was posted!',
        'Thanks for helping end food waste.',
        [
          {text: 'Return to My Neighbor\'s Kitchen', onPress: () => console.log('return pressed')},
        ]
      )
    }
    const buttonStyle1 = {
      paddingHorizontal: 80,
      paddingVertical: 20,
      marginRight: 10,
      backgroundColor: Colors.tintColor,
      borderRadius: 5,
    };
    const buttonStyle2 = {
      paddingHorizontal: 25,
      paddingVertical: 20,
      marginRight: 10,
      backgroundColor: Colors.tintColor,
      borderRadius: 5,
    };
    const buttonText = {
      color: '#fff',
    };
    return (
      <View style={{padding: 10, flexDirection: 'row', flex: 1}}>
        <TouchableOpacity style={buttonStyle2} onPress={() => {}}>
          <Text style={buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle1} onPress={showAlert}>
          <Text style={buttonText}>Post!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // _renderView = () => {
  //   // Don't know what to put here
  //   return (
  //     <View>
  //     </View>
  //   );
  // }

  _renderWebView = () => {
    return (
      <WebView
        style={{width: Layout.window.width, height: 250}}
        source={{html: `
          <h2>You can always use a WebView if you need to!</h2>
          <p>
            <h4>But don't the other components above seem like better building blocks for most of your UI?</h4>
            <input type="text" placeholder="Disagree? why?"></input>
            <input type="submit">
          </p>
          <p>
            <a href="https://www.getexponent.com">getexponent.com</a>
          </p>
        `}}
      />
    );
  }

  _renderRow = (renderRowFn) => {
    return (
      <View>
        {renderRowFn && renderRowFn()}
      </View>
    );
  }

  _renderSectionHeader = (_, sectionTitle) => {
    return (
      <View style={styles.sectionHeader}>
        <Text>{sectionTitle}</Text>
      </View>
    );
  }
}

class DatePickerExample extends React.Component {
  state = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  }

  render() {
    return (
      <DatePickerIOS
        date={this.state.date}
        mode="datetime"
        timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
        onDateChange={this._onDateChange}
      />
    );
  }

  _onDateChange = (date) => {
    this.setState({date: date});
  }
}

class PickerExample extends React.Component {
  state = {
    language: '4',
  };

  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        onValueChange={(lang) => this.setState({language: lang})}>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
      </Picker>
    );
  }
}

class ProgressViewExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: props.initialProgress,
    }
  }

  componentDidMount() {
    this.progressLoop()
  }

  progressLoop() {
    setTimeout(() => {
      this.setState({
        progress: this.state.progress === 1 ? 0 : Math.min(1, this.state.progress + 0.01)
      });

      this.progressLoop();
    }, 17 * 2);
  }

  render() {
    const progressStyle = {marginTop: 20};

    return (
      <ProgressViewIOS
        style={progressStyle}
        progressTintColor={this.props.progressTintColor}
        progress={this.state.progress}
      />
    );
  }
};

class SegmentedControlExample extends React.Component {
  state = {
    selectedIndex: 0,
  };

  render() {
    let tintColor;
    switch(this.state.selectedIndex) {
      case 0:
        tintColor = Colors.tintColor;
        break;
      case 1:
        tintColor = Colors.tintColor;
        break;
      case 2:
        tintColor = Colors.tintColor;
        break;
      //case 3:
        //tintColor = 'purple';
        //break;
    }

    return (
      <View style={{margin: 10}}>
        <SegmentedControlIOS
          values={['Leftovers', 'Raw Produce', 'Other']}
          tintColor={tintColor}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />
      </View>
    );
  }
}

class SliderExample extends React.Component {
  static defaultProps = {
    value: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  render() {
    const textStyle = {color: this.state.value === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.9)', marginBottom: -2};

    return (
      <View>
        <Text style={textStyle}>
          Value: {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    );
  }
}

class SwitchExample extends React.Component {
  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  }

  render() {
    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10, marginRight: 10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
      </View>
    );
  }
}

class TextInputExample extends React.Component {
  state = {
    singleLineValue: '',
    //secureTextValue: '',
  };

  render() {
    let textInputStyle = {
      width: Layout.window.width - 20,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: Colors.secondColor,
      fontSize: 15,
      padding: 5,
      height: 40,
    };

    const updateSingleLineValue = value => this.setState({singleLineValue: value});
    //const updateSecureTextValue = value => this.setState({secureTextValue: value});

    return (
      <View style={{padding: 10}}>
        <TextInput
          placeholder="What is the food called?"
          onChangeText={updateSingleLineValue}
          style={[{marginBottom: 10}, textInputStyle]}
          value={this.state.singleLineValue}
        />

        <TextInput
          /*placeholder="A secure text field"
          keyboardAppearance="dark"
          value={this.state.secureTextValue}
          onChangeText={updateSecureTextValue}
          secureTextEntry
          style={textInputStyle}*/
        />
      </View>
    );
  }
}

class TextInputExample2 extends React.Component {
  state = {
    singleLineValue: '',
    //secureTextValue: '',
  };

  render() {
    let textInputStyle = {
      width: Layout.window.width - 20,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: Colors.secondColor,
      fontSize: 15,
      padding: 5,
      height: 40,
    };

    const updateSingleLineValue = value => this.setState({singleLineValue: value});
    //const updateSecureTextValue = value => this.setState({secureTextValue: value});

    return (
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Enter your street address"
          onChangeText={updateSingleLineValue}
          style={[{marginBottom: 10}, textInputStyle]}
          value={this.state.singleLineValue}
        />

        <TextInput
          /*placeholder="A secure text field"
          keyboardAppearance="dark"
          value={this.state.secureTextValue}
          onChangeText={updateSecureTextValue}
          secureTextEntry
          style={textInputStyle}*/
        />
      </View>
    );
  }
}

class TextInputExample3 extends React.Component {
  state = {
    singleLineValue: '',
    //secureTextValue: '',
  };

  render() {
    let textInputStyle = {
      width: Layout.window.width - 20,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: Colors.secondColor,
      fontSize: 15,
      padding: 5,
      height: 100,
    };

    const updateSingleLineValue = value => this.setState({singleLineValue: value});
    //const updateSecureTextValue = value => this.setState({secureTextValue: value});

    return (
      <View style={{padding: 10}}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="E.g. I'll leave the food outside my door in a plastic box!"
          onChangeText={updateSingleLineValue}
          style={[{marginBottom: 10}, textInputStyle]}
          value={this.state.singleLineValue}
        />

        <TextInput
          /*placeholder="A secure text field"
          keyboardAppearance="dark"
          value={this.state.secureTextValue}
          onChangeText={updateSecureTextValue}
          secureTextEntry
          style={textInputStyle}*/
        />
      </View>
    );
  }
}

function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
}


//IMPLEMENT BACK BUTTON
import Icon from 'react-native-vector-icons/MaterialIcons'

const BackButton = ({onPress, name, size}) => (
  <TouchableHighlight onPress={onPress}>
    <Icon name={name} size={size || 28} />
  </TouchableHighlight>
)

import { CheckBox } from 'react-native-elements'

const CheckBox1 = () => (
  <CheckBox>
    title='Click Here';
    checked={this.state.checked};
  </CheckBox>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  sectionHeader: {
    backgroundColor: 'rgba(250,243,221,1)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: Colors.tintColor,
    marginRight: 10,
  },
  buttonText: {
    color: '#faf3dd',
  },
});
