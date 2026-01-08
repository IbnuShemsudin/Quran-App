import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuranScreen from "../screens/QuranScreen";
import PageReaderScreen from "../screens/PageReaderScreen";
import MushafPageScreen from "../screens/MushafPageScreen";


const Stack = createNativeStackNavigator();

export default function QuranStack() {
  return (
    <Stack.Navigator id="QuranStack"screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QuranHome" component={QuranScreen} />
      <Stack.Screen name="PageReader" component={PageReaderScreen} />
      <Stack.Screen name="MushafPage" component={MushafPageScreen} />
    </Stack.Navigator>
  );
}
