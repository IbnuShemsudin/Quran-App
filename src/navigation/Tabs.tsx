// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../screens/HomeScreen";
// import { View, Text } from "react-native";
// import QuranScreen from "../screens/QuranScreen";
// import BookmarksScreen from "../screens/BookmarksScreen";
// import SettingsScreen from "../screens/SettingsScreen";
// import PageReaderScreen from "../screens/PageReaderScreen";

// const Tab = createBottomTabNavigator();

// const Placeholder = ({ title }: { title: string }) => (
//   <Text style={{ color: "#fff", textAlign: "center", marginTop: 100 }}>
//     {title}
//   </Text>
// );

// export default function Tabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: "#0b1220",
//           borderTopColor: "#1f4068",
//         },
//         tabBarActiveTintColor: "#4dd599",
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       {/* <Tab.Screen name="Quran" children={() => <Placeholder title="Quran" />} /> */}
//       {/* <Tab.Screen name="Bookmarks" children={() => <Placeholder title="Bookmarks" />} /> */}
//       {/* <Tab.Screen name="Settings" children={() => <Placeholder title="Settings" />} /> */}
//       <Tab.Screen name="QuranScreen" component={QuranScreen} />
//       <Tab.Screen name="BookmarksScreen" component={BookmarksScreen} />
//       <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
//       <Tab.Screen name="Mushaf" component={PageReaderScreen} options={{ title: "Quran" }} />

//     </Tab.Navigator>
//   );
// }
