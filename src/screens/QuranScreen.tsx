import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { surahs } from "../data/surahs";

export default function QuranScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quran</Text>
      <Text style={styles.subtitle}>114 Surahs</Text>

      <TextInput
        placeholder="Search Surah..."
        placeholderTextColor="#9ca3af"
        style={styles.search}
      />

      <FlatList
        data={surahs}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("PageReader", {
                surahId: item.id,
                surahName: item.name,
              })
            }
          >
            <View style={styles.numberCircle}>
              <Text style={styles.number}>{item.id}</Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>
                {item.meaning} · {item.ayahs} Ayahs · {item.revelation}
              </Text>
            </View>

            <Text style={styles.arabic}>{item.arabic}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    color: "#9ca3af",
    marginBottom: 12,
  },
  search: {
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 12,
    color: "#fff",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111827",
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  numberCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#064e3b",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "#34d399",
    fontWeight: "700",
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  meta: {
    color: "#9ca3af",
    fontSize: 12,
    marginTop: 2,
  },
  arabic: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "System",
  },
});

