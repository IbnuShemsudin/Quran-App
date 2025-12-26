import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const Placeholder = ({ title }: { title: string }) => (
  <Text style={{ color: "#fff", textAlign: "center", marginTop: 100 }}>
    {title}
  </Text>
);

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0b1220",
          borderTopColor: "#1f4068",
        },
        tabBarActiveTintColor: "#4dd599",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quran" children={() => <Placeholder title="Quran" />} />
      <Tab.Screen name="Bookmarks" children={() => <Placeholder title="Bookmarks" />} />
      <Tab.Screen name="Settings" children={() => <Placeholder title="Settings" />} />
    </Tab.Navigator>
  );
}
