import { normalise } from "@/config/normalize";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "./AppText";

interface props {
  title: string;
}

function DisplayField({ title }: props) {
  return (
    <View style={styles.container}>
      <AppText>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#5D957E",
    backgroundColor: "#D3D5DA",
    paddingVertical: normalise(12),
    paddingHorizontal: normalise(16),
    borderRadius: 8,
  },
  txt: {
    color: "#1B1B1B",
  },
});

export default DisplayField;
