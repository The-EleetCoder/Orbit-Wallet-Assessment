import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./src/screens/FeedScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="home" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="discover"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name="search" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Create"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircleo" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Community"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="users" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={FeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
