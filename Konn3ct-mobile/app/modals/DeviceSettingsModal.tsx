import { AppText } from "@/components/AppText";
import { ActionFieldField } from "@/components/DisplayField";
import colors from "@/config/colors";
import { normalise, fontPixel } from "@/config/normalize";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface props {
  closeModal: () => void;
}

function DeviceSettingsModal({ closeModal }: props) {
  const [activeView, setActiveView] = useState<"A" | "B">("A");
  return (
    <View style={styles.container}>
      {activeView == "A" && (
        <View>
          <View style={styles.headerCtn}>
            <AppText style={styles.headerTxt}>Settings</AppText>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={"white"}
              onPress={closeModal}
            />
          </View>
          <View style={{ marginTop: normalise(24) }}>
            <ActionFieldField
              title="Device Settings"
              icon="settings-outline"
              onPress={() => setActiveView("B")}
            />
          </View>
        </View>
      )}
      {activeView == "B" && (
        <View>
          <View style={styles.headerCtn}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={24}
              color={"white"}
              style={styles.iconCtn}
              onPress={() => setActiveView("A")}
            />
            <AppText style={styles.headerTxt}>Device Settings</AppText>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={"white"}
              onPress={closeModal}
            />
          </View>
          <View style={{ marginTop: normalise(24), rowGap: normalise(40) }}>
            <ActionFieldField
              title="Device Settings"
              icon="camera-outline"
              label="Video"
            />
            <ActionFieldField title="High Definition" label="Video Quality" />
            <ActionFieldField title="Default - Phone mic" label="Microphone" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: normalise(16),
    paddingHorizontal: normalise(16),
    flex: 1,
  },
  headerCtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#5D957E",
    paddingVertical: normalise(24),
  },
  iconCtn: {
    backgroundColor: "#3E8466",
    padding: 10,
    borderRadius: 999,
  },
  headerTxt: {
    color: "white",
    fontWeight: "600",
    fontSize: fontPixel(20),
  },
});

export default DeviceSettingsModal;
