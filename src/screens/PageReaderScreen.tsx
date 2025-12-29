import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AYAH_PAGE_MAP } from "../data/ayahPageMap";
import { TouchableOpacity } from "react-native";

export default function PageReaderScreen({ route }: any) {
  const { surahId, surahName } = route.params;
  const [ayahs, setAyahs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}/ar`)
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
        <ActivityIndicator size="large" color="#22c55e" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{surahName}</Text>

    <FlatList
  data={ayahs}
  keyExtractor={(item) => item.number.toString()}
  renderItem={({ item }) => {
    const pageInfo = AYAH_PAGE_MAP.find(
      (a) => a.surah === surahId && a.ayah === item.numberInSurah
    );

    return (
      <TouchableOpacity
        onPress={() => {
          if (pageInfo) {
            Navigator.navigate("MushafPage", {
              page: pageInfo.page,
            });
          }
        }}
      >
        <Text style={styles.ayah}>{item.text}</Text>
      </TouchableOpacity>
    );
  }}
/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b1220",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },
  ayah: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 38,
    textAlign: "right",
    marginBottom: 16,
  },
});
