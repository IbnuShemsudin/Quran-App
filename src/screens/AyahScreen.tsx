import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { sampleSurah } from "../data/sampleQuran";

const AyahScreen = () => {
  const ayah = sampleSurah.ayahs[0];

  return (
    <View style={styles.container}>
      <Text style={styles.arabic}>{ayah.text}</Text>
      <Text style={styles.translation}>{ayah.translation}</Text>
      <Text style={styles.ayahNumber}>Ayah {ayah.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  arabic: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
  },
  translation: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  ayahNumber: {
    fontSize: 16,
    color: "#666",
  },
});

export default AyahScreen;
