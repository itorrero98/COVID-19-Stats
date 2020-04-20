import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import CountriesScreen from "../screens/CountriesScreen";
import InfoScreen from "../screens/InfoScreen";
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.tabIconSelected,
        activeBackgroundColor: Colors.accent,
        inactiveBackgroundColor: Colors.accent,
        inactiveTintColor: Colors.tabIconDefault,
        style: { backgroundColor: Colors.accent }
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "red"
        },
        headerTintColor: Colors.primary
      }}
    >
      <BottomTab.Screen
        name="Quick Facts"
        component={HomeScreen}
        options={{
          title: "Quick Facts",

          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-stats" />
          )
        }}
      />
      <BottomTab.Screen
        name="Current Statistics"
        component={CountriesScreen}
        options={{
          title: "Find a Country",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-search" />
          )
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: "Get Info",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="md-information-circle-outline"
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Quick Facts":
      return "COVID-19 At a Glance";
    case "Current Statistics":
      return "Find a Country";
    case "Info":
      return "COVID-19 Information";
  }
}
