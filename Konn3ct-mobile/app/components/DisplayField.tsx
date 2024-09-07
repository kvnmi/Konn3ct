import { fontPixel, normalise } from "@/config/normalize";
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { AppText } from "./AppText";
import { Ionicons } from "@expo/vector-icons";

interface props {
  title: string;
}

interface actionFieldProps extends props {
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  label?: string;
}

function DisplayField({ title }: props) {
  return (
    <View style={styles.container}>
      <AppText>{title}</AppText>
    </View>
  );
}

export function ActionFieldField({
  title,
  icon,
  onPress,
  label,
}: actionFieldProps) {
  return (
    <View>
      {label && <AppText style={actionFieldStyles.label}>{label}</AppText>}
      <Pressable style={[actionFieldStyles.container]} onPress={onPress}>
        {icon && <Ionicons name={icon} size={24} color={"white"} />}
        <AppText style={actionFieldStyles.txt}>{title}</AppText>
      </Pressable>
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

const actionFieldStyles = StyleSheet.create({
  container: {
    backgroundColor: "#5D957E",
    paddingVertical: normalise(12),
    paddingHorizontal: normalise(16),
    borderRadius: 8,
    flexDirection: "row",
    columnGap: 16,
    alignItems: "center",
    marginTop: normalise(8),
  },
  txt: {
    color: "white",
    fontSize: fontPixel(14),
    flex: 1,
  },
  label: {
    fontSize: fontPixel(14),
    color: "#F5F9FFF2",
  },
});

export default DisplayField;
