import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import React from "react";
import QuranScreen from "../screens/QuranScreen";
// import PageReaderScreen from "../screens/PageReaderScreen";
import QuranStack from "./QuranStack";
// import AyahListScreen from "../screens/AyahListScreen";
// import QuranStack from "../navigation/QuranStack";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator id="QuranStack" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="QuranScreen" component={QuranScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
        {/* <Tab.Screen name="Mushaf" component={PageReaderScreen} options={{ title: "Quran" }} /> */}
        

<Tab.Screen
  name="QuranTab"
  component={QuranStack}
  options={{ title: "Quran" }}
/>

      {/* <Tab.Screen name="Mushaf" component={PageReaderScreen} options={{ title: "Quran" }} /> */}
      {/* <Tab.Screen name="Mushaf" component={QuranScreen} options={{ title: "Quran" }} /> */}
        {/* <Tab.Screen name="AyahList" component={AyahListScreen} /> */}
        {/* <Tab.Screen name="QuranStack" component={QuranStack} /> */}
    </Tab.Navigator>
  );
}
