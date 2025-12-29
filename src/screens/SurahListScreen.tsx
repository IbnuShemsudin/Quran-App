import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { surahs } from "../data/surahs";

export default function SurahListScreen() {
  const navigation = useNavigation<any>();

  return (
    <FlatList
      data={surahs}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Ayahs", { surah: item })}
          style={{
            paddingVertical: 14,
            borderBottomWidth: 0.5,
            borderColor: "#ccc",
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {item.id}. {item.name}
            </Text>
            <Text style={{ fontSize: 18 }}>{item.arabic}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
