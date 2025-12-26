import { Text, View } from "react-native";

export default function AyahListScreen({ route }: any) {
  const { surah } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 8 }}>
        {surah.name}
      </Text>

      <Text style={{ fontSize: 26, textAlign: "right" }}>
        {surah.arabic}
      </Text>
    </View>
  );
}
