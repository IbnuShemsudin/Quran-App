import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SurahListScreen from "../screens/SurahListScreen";
import AyahScreen from "../screens/AyahScreen";

export type RootStackParamList = {
  Home: undefined;
  SurahList: undefined;
  Ayah: { surahId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Quran App" }}
        />
        <Stack.Screen
          name="SurahList"
          component={SurahListScreen}
          options={{ title: "Surahs" }}
        />
        <Stack.Screen
          name="Ayah"
          component={AyahScreen}
          options={{ title: "Ayahs" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
