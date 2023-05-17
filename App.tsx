import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button
} from "react-native";

function App(){
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <Button
  // onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

      </View>
    </SafeAreaView>
  )

}

export default App;