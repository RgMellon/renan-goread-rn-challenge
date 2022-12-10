import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';

import store from './src/store';
import { Provider } from 'react-redux';
import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Provider store={store}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
