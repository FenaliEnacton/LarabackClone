import React, { useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import MainStackNavigator from './Navigation/appNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
// LogBox.ignoreAllLogs = true;

function App() {

  return (
    <View style={styles.container}>
      {/* <Provider store={configureStore().store}> */}
      <SafeAreaProvider>
        <StatusBar hidden />
        <MainStackNavigator />
      </SafeAreaProvider>
      {/* </Provider> */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
