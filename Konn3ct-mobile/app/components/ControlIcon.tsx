import colors from "@/config/colors";
import { normalise } from "@/config/normalize";
import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface props {
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  inActive?: boolean;
}

function ControlIcon({ icon, onPress, inActive = false }: props) {
  return (
    <Pressable
      style={[styles.container, inActive && { backgroundColor: "#B9C9C2" }]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={25} color={"white"} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: normalise(48),
    width: normalise(48),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
  },
});

export default ControlIcon;
