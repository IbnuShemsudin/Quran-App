// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "../screens/HomeScreen";
// import SurahListScreen from "../screens/SurahListScreen";
// // import AyahListScreen from "../screens/AyahListScreen";

// export type RootStackParamList = {
//   Home: undefined;
//   SurahList: undefined;
//   AyahList: { surahId: number };
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function RootNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator id="QuranStack" initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: "Quran App" }}
//         />
//         <Stack.Screen
//           name="SurahList"
//           component={SurahListScreen}
//           options={{ title: "Surahs" }}
//         />
//         {/* <Stack.Screen
//           name="AyahList"
//           component={AyahListScreen}
//           options={{ title: "Ayahs" }}
//         /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
