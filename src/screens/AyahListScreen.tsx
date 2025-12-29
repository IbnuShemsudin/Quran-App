// import { View, Text, FlatList, StyleSheet } from "react-native";
// import { RouteProp, useRoute } from "@react-navigation/native";

// type Surah = {
//   id: number;
//   name: string;
//   arabic: string;
// };

// type RouteParams = {
//   params: {
//     surah: Surah;
//   };
// };

// export default function AyahListScreen() {
//   const route = useRoute<RouteProp<RouteParams, "params">>();
//   const { surah } = route.params;

//   // TEMP ayahs (we'll replace with real data next)
//   const ayahs = Array.from({ length: 7 }, (_, i) => ({
//     id: i + 1,
//     text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
//   }));

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{surah.arabic}</Text>
//       <Text style={styles.subtitle}>{surah.name}</Text>

//       <FlatList
//         data={ayahs}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.ayahCard}>
//             <Text style={styles.ayahText}>{item.text}</Text>
//             <Text style={styles.ayahNumber}>{item.id}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#0b1220",
//     padding: 16,
//   },
//   title: {
//     fontSize: 28,
//     color: "#fff",
//     textAlign: "center",
//     marginBottom: 4,
//   },
//   subtitle: {
//     textAlign: "center",
//     color: "#9ca3af",
//     marginBottom: 16,
//   },
//   ayahCard: {
//     backgroundColor: "#111827",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//   },
//   ayahText: {
//     color: "#fff",
//     fontSize: 22,
//     lineHeight: 42,
//     textAlign: "right",
//   },
//   ayahNumber: {
//     color: "#34d399",
//     textAlign: "left",
//     marginTop: 8,
//   },
// });
