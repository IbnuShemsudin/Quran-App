import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import React from "react";
// import QuranScreen from "../screens/QuranScreen";
import QuranStack from "./QuranStack";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator id="QuranStack" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="QuranTab" component={QuranStack} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
