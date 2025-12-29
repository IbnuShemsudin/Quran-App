import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeContext";

type Ayah = {
  number: number;
  text: string;
  page: number;
};

export default function SurahDetailScreen({ route, navigation }: any) {
  const { surahNumber, surahName } = route.params;
  const { colors } = useTheme();
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar`)
      .then((res) => res.json())
      .then((json) => {
        setAyahs(json.data.ayahs);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{surahName}</Text>

      <FlatList
        data={ayahs}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.ayahCard, { backgroundColor: colors.surface }]}
            onPress={() =>
              navigation.navigate("PageReader", {
                pageNumber: item.page,
              })
            }
          >
            <Text style={[styles.ayahText, { color: colors.text }]}>
              {item.text}
            </Text>
            <Text style={styles.pageHint}>Page {item.page}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "700", textAlign: "center", marginVertical: 16 },
  ayahCard: { padding: 16, borderRadius: 12, marginBottom: 12 },
  ayahText: {
    fontSize: 22,
    lineHeight: 36,
    textAlign: "right",
    fontFamily: "AmiriQuranColored",
  },
  pageHint: {
    marginTop: 6,
    fontSize: 12,
    opacity: 0.6,
  },
});
