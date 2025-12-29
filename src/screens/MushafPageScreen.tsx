import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MushafPageScreen({ route }: any) {
  const { page } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageNumber}>Page {page}</Text>

      <Image
        source={{ uri: `https://everyayah.com/data/quranpngs/Page${page}.png` }}
        style={styles.image}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    justifyContent: "center",
    alignItems: "center",
  },
  pageNumber: {
    color: "#9ca3af",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "90%",
  },
});
