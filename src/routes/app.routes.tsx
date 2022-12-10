import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Repositório',
          headerBackTitleVisible: false,
        }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
}
