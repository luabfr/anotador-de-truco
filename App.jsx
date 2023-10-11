import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenMatch from './src/components/ScreenMatch/ScreenMatch';
import ScreenHome from './src/components/ScreenHome/ScreenHome';
import ScreenOptions from './src/components/ScreenOptions/ScreenOptions';
import { colorTheme } from './src/components/colorTheme';
import { View , Text, Button} from 'react-native';

const RootStack = createStackNavigator();




export default function App() {

  return (
    <Provider store={store}>


        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Group>
              <RootStack.Screen name="Home" component={ScreenHome} options={{ headerShown: false }} />
            </RootStack.Group>
            <RootStack.Group
              screenOptions={{
                presentation: 'modal',
                headerStyle: { backgroundColor: `${colorTheme.mode[0].bg}` },
                headerTintColor: `${colorTheme.mode[0].text2}`,
                headerTitleStyle: { fontWeight: 'normal' },
                headerShadowVisible: false,
              }}>
              <RootStack.Screen
                name="ScreenMatch"
                component={ScreenMatch}
                options={{
                  title: "Ver Menu"
                }} />
            </RootStack.Group>
            <RootStack.Group
              screenOptions={{
                presentation: 'modal',
                headerStyle: { backgroundColor: `${colorTheme.mode[0].bg}` },
                headerTintColor: `${colorTheme.mode[0].text2}`,
                headerTitleStyle: { fontWeight: 'bold' },
                headerShadowVisible: false,
              }}>
              <RootStack.Screen
                name="OptionsMenu"
                component={ScreenOptions}
                options={{ title: "Volver" }} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>

      {/* </CustomView> */}
    </Provider>
  );
}


