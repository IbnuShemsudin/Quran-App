import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const popularSurahs = [
  { id: 1, name: "Al-Fatihah", ayahs: 7, type: "Meccan" },
  { id: 36, name: "Ya-Sin", ayahs: 83, type: "Meccan" },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Assalamu Alaikum</Text>
        <Text style={styles.subGreeting}>Continue your journey</Text>
      </View>

      {/* Last Read Card */}
      <TouchableOpacity style={styles.lastReadCard}>
        <Text style={styles.lastReadSurah}>الفاتحة</Text>
        <Text style={styles.lastReadAyah}>Al-Fatihah - Ayah 1</Text>
      </TouchableOpacity>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text>Day Streak</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text>Ayahs Read</Text>
        </View>
      </View>

      {/* Popular Surahs */}
      <Text style={styles.sectionTitle}>Popular Surahs</Text>
      <FlatList
        data={popularSurahs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.surahCard}>
            <Text style={styles.surahNumber}>{item.id}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.surahName}>{item.name}</Text>
              <Text style={styles.surahDetails}>{item.ayahs} Ayahs • {item.type}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0a0f24" },
  header: { marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  subGreeting: { fontSize: 16, color: "#ccc" },
  lastReadCard: { backgroundColor: "#1a1f3f", padding: 20, borderRadius: 16, marginBottom: 20 },
  lastReadSurah: { fontSize: 22, color: "#fff", marginBottom: 5 },
  lastReadAyah: { fontSize: 16, color: "#aaa" },
  statsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  statCard: { flex: 1, backgroundColor: "#1a1f3f", marginHorizontal: 5, padding: 15, borderRadius: 16, alignItems: "center" },
  statNumber: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  surahCard: { flexDirection: "row", backgroundColor: "#1a1f3f", padding: 15, borderRadius: 16, marginBottom: 10, alignItems: "center" },
  surahNumber: { fontSize: 16, color: "#fff", marginRight: 15 },
  surahName: { fontSize: 18, color: "#fff", fontWeight: "bold" },
  surahDetails: { color: "#aaa" },
});

export default HomeScreen;
