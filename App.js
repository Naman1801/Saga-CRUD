import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { Provider } from "react-redux";
import store from './redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <View>
      <HomeScreen/>
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({})