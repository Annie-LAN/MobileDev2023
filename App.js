import startScreen from "./screens/startScreen";
import filterScreen from "./screens/filterScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Start"
          component={startScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Filter"
          component={filterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}