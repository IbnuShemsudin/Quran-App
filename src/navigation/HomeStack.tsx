import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { surahs } from "../data/surahs";
import { useApp } from "../context/AppContext";

const HomeScreen = () => {
  const { lastRead } = useApp();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Assalamu Alaikum</Text>
      <Text style={styles.subtitle}>Continue your journey</Text>

      {/* Last Read */}
      <View style={styles.card}>
        <Text style={styles.arabic}>
          {lastRead?.surah.arabicName ?? "الفاتحة"}
        </Text>
        <Text style={styles.small}>
          {lastRead
            ? `${lastRead.surah.name} • Ayah ${lastRead.ayahNumber}`
            : "Al-Fatihah • Ayah 1"}
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.row}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.small}>Day Streak</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.small}>Ayahs Read</Text>
        </View>
      </View>

      {/* Popular Surahs */}
      <Text style={styles.section}>Popular Surahs</Text>
      <FlatList
        data={surahs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.surah}>
            <Text style={styles.circle}>{item.id}</Text>
            <View>
              <Text style={styles.surahName}>{item.name}</Text>
              <Text style={styles.small}>
                {item.ayahsCount} Ayahs • {item.revelation}
              </Text>
            </View>
            <Text style={styles.arabic}>{item.arabicName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0b1220" },
  title: { fontSize: 24, color: "#fff", fontWeight: "bold" },
  subtitle: { color: "#aaa", marginBottom: 20 },
  card: { backgroundColor: "#162447", padding: 20, borderRadius: 16, marginBottom: 15 },
  arabic: { fontSize: 22, color: "#fff" },
  small: { color: "#aaa", fontSize: 14 },
  row: { flexDirection: "row", gap: 10, marginBottom: 20 },
  stat: { flex: 1, backgroundColor: "#162447", padding: 15, borderRadius: 16 },
  statNumber: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  section: { color: "#fff", fontSize: 18, marginBottom: 10 },
  surah: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#162447",
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  circle: {
    backgroundColor: "#1f4068",
    color: "#fff",
    width: 30,
    height: 30,
    textAlign: "center",
    borderRadius: 15,
    lineHeight: 30,
  },
  surahName: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default HomeScreen;
