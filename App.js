import StartScreen from "./screens/startScreen";
import FilterScreen from "./screens/filterScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Start"
          component={StartScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Filter"
          component={FilterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}