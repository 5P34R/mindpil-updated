import React from 'react';
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';


import Home from './screens/Home';
import SignUp from './screens/SignUp';
import LoginScreen from './screens/Login';
import CustomDrawer from './components/CustomDrawer';
import PersonalDetails from './screens/PersonalDetails';
import QuizScreen from './screens/Quiz';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  } 

  
const HomeStack = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeDrawerScreen() {
  return (
    <HomeStack.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Login" screenOptions={{headerShown:false}}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Home!',
        drawerIcon : () => <Ionicons name="home-outline" size={24} color="blaxk" />
      }}
      />
        <HomeStack.Screen
          name="Register"
          component={SignUp}
          options={{ tabBarLabel: 'Register',
        drawerIcon: () =><Ionicons name="ios-person-outline" size={24} color="black" />
          
        }}
        />
      <HomeStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ tabBarLabel: 'Login',
        drawerIcon: () => <SimpleLineIcons name="login" size={24} color="black" />
      }}
      />
      <HomeStack.Screen
        name="Personal"
        component={PersonalDetails}
        options={{ tabBarLabel: 'Personal',
        drawerIcon: () => <SimpleLineIcons name="login" size={24} color="black" />
      }}
      />
      <HomeStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ tabBarLabel: 'Quiz',
        drawerIcon: () => <SimpleLineIcons name="login" size={24} color="black" />
      }}
      />
    </HomeStack.Navigator>
  );
}



const CustomNavigation = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'indigo.400',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeDrawerScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    )
}

export default CustomNavigation;