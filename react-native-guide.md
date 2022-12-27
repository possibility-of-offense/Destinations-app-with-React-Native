# Init projects

    expo init DoneWithIt

# Components

    View - the same as <div> in web
    Text - display text on the screen

# Installation

    Remove HAXM
    Remvoe .expo from the folder
    *Optional* Wipe data

# Check Platform

    Import {Platform} from 'react-native'
    Platform.OS === 'ios' || Platform.OS === 'android'

# Image component

    <Image source={require('./assets/image.jpg')}>
    <Image source={{uri: 'https://test.com', width: 200, height: 300}}>

    ## force an image to be full width and maintain aspect ratio using React Native?

    <Image
        style={{ resizeMode: "contain", width: null, height: 300 }}
        source={require("./assets/beach.jpg")}
    />

# StyleSheet.create({}) - not css | Object defined with nested objects, validates the property in the object

# Linkin outside -> Linking.openURL()

# StatusBar - useful trick if you use SafeAreaView

    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0

- NOTES ON LAYOUTS
- NOTES ON LAYOUTS
- NOTES ON LAYOUTS

-- Dimensions API - detech the dynamic width, height and scale of the device
-- Detect screen orientation and resize components accordingly -
--- go to app.json to support both modes - portrait and landscape - "orientation": "default";
detect screen orientation - download hooks library -> npm install @react-native-community/hooks
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

-- Flexbox
--- flex: 1 is the same like CSS display: flex; but if the parent container has flex: 1 and
there are three containers in it with flex: 1, they will share 30% of the height

# Enable scrolling with Navigator

--- user ScrollView to wrap the other <View>s

# Draw empty line to separate text

You could simply use an empty View with a bottom border.

<!-- <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/> -->

# Overriding styles

Improving the Welcome Screen - Mosh lecture
