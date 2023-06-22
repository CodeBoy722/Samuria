import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppPager from './components/appPager';
import OrderFruitList from './components/miniList'
import store from './states/store'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    /* <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */
    //<OrderFruitList items={["Orange", "Guava", "Cocpnuts", "Beans"]}/>
   
   <Provider store={store}>
    <NavigationContainer>
      <AppPager/>
    </NavigationContainer>
  </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
