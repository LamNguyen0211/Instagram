import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import ProfileScreen from './screens/ProfileScreen'
import EditProfile from './components/ProfileScreen/EditProfile'
import Reels from './screens/ReelScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen'
import ActivityScreen from './screens/ActivityScreen'
import Ionic from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const bottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };



const screenOptions = {
    headerShown:false
}
export const SignedInStack = ({}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator
             initialRouteName='LoginScreen' 
             screenOptions={screenOptions} 
            >
                <Stack.Screen name='bottomTab' component={bottomTabScreen} />
                <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='SignupScreen' component={SignupScreen} /> 
              
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}
