import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "./src/screens/FeedScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {},
              tabBarActiveTintColor: "#345f66",
            }}
          >
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
              component={SearchScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="pluscircleo" color={color} size={size} />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Community"
              component={SearchScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5 name="users" size={size} color={color} />
                ),
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Me"
              component={SearchScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user-circle" size={size} color={color} />
                ),
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
