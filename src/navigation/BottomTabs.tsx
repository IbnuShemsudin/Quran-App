import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SurahListScreen from "../screens/SurahListScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AyahListScreen from "../screens/AyahListScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Surahs" component={SurahListScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Quran" component={AyahListScreen} />
    </Tab.Navigator>
  );
}
