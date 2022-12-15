import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "./screens/HomeScreen"
import TransferScreen from "./screens/TransferScreen"
import StatisticsScreen from "./screens/StatisticsScreen"
import UtilitiesScreen from "./screens/UtilitiesScreen"
import SettingsScreen from "./screens/SettingsScreen"

import { HomeIcon } from "react-native-heroicons/outline"
import { ArrowsRightLeftIcon } from "react-native-heroicons/outline"
import { ChartPieIcon } from "react-native-heroicons/outline"
import { RectangleStackIcon } from "react-native-heroicons/outline"
import { Cog8ToothIcon } from "react-native-heroicons/outline"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* Screens */}
      {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBackground: () => (
            <View className="bg-[#232323]  flex-1"></View>
          ),
          tabBarStyle: { borderTopWidth: 0 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <HomeIcon color={color} size={size} />
            },
            tabBarActiveTintColor: "#5565FF",
            tabBarInactiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Transfers"
          component={TransferScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <ArrowsRightLeftIcon color={color} size={size} />
            },
            tabBarActiveTintColor: "#5565FF",
            tabBarInactiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <ChartPieIcon color={color} size={size} />
            },
            tabBarActiveTintColor: "#5565FF",
            tabBarInactiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Utilities"
          component={UtilitiesScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <RectangleStackIcon color={color} size={size} />
            },
            tabBarActiveTintColor: "#5565FF",
            tabBarInactiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Cog8ToothIcon color={color} size={size} />
            },
            tabBarActiveTintColor: "#5565FF",
            tabBarInactiveTintColor: "gray",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
