import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenMatch from './src/components/ScreenMatch/ScreenMatch';
import ScreenHome from './src/components/ScreenHome/ScreenHome';
import ScreenOptions from './src/components/ScreenOptions/ScreenOptions';

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
              headerStyle: { backgroundColor: 'rgb(29, 30, 15)' },
              headerTintColor: '#abc',
              headerTitleStyle: { fontWeight: 'bold' } ,
              headerShadowVisible: false, 
            }}>
            <RootStack.Screen 
              name="MainMenu" 
              component={ScreenMatch} 
              options={{
                title: "Ver Menu"
                /*headerLeft: () => (
                  <View style={{ marginLeft: 10 }}>
                    <Icon name="arrow-left" size={48} color="#000" />
                  </View>
                )*/
              }} />
          </RootStack.Group>
          <RootStack.Group 
            screenOptions={{ 
              presentation: 'modal',
              headerStyle: { backgroundColor: 'rgb(29, 30, 15)' },
              headerTintColor: '#abc',
              headerTitleStyle: { fontWeight: 'bold' },
              headerShadowVisible: false, 
          }}>
            <RootStack.Screen name="OptionsMenu" component={ScreenOptions} options={{ title: "Volver" }} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


