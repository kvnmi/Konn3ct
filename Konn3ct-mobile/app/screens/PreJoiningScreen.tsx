import { AppText } from "@/components/AppText";
import {
  fontPixel,
  heightPixel,
  normalise,
  pixelSizeVertical,
} from "@/config/normalize";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ControlIcon from "@/components/ControlIcon";
import AppButton from "@/components/AppButton";
import DisplayField from "@/components/DisplayField";
import { Camera, CameraType } from "expo-camera/legacy";
import AppModal from "@/components/AppModal";
import DeviceSettingsModal from "@/modals/DeviceSettingsModal";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

interface Props {}

function PreJoiningScreen({}: Props) {
  const { top } = useSafeAreaInsets();

  const [showModal, setShowModal] = useState(false);
  const [hasCamPermission, setHasCamPermission] = useState(false);
  const [hasMicPermission, setHasMicPermission] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  const inactiveMic = !hasMicPermission || !isMicEnabled;
  const inactiveCam = !hasCamPermission || !isCameraOn;

  async function toggleCamera() {
    if (hasCamPermission) {
      setIsCameraOn(!isCameraOn);
    } else {
      Alert.alert(
        "Permission Required",
        "You need to grant Konn3ct permission to use this functionality.\nGo to your settings to do so."
      );
    }
  }

  async function toggleMic() {
    if (hasMicPermission) {
      if (isMicEnabled) {
        await stopRecording();
      } else {
        await startRecording();
      }
    } else {
      Alert.alert(
        "Permission Required",
        "You need to grant Konn3ct permission to use this functionality.\nGo to your settings to do so."
      );
    }
  }

  const startRecording = async () => {
    try {
      await Audio.setIsEnabledAsync(true);
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync();
      await newRecording.startAsync();

      setRecording(newRecording);
      setIsMicEnabled(true);
    } catch (err) {
      console.log("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    if (recording) {
      await Audio.setIsEnabledAsync(false);

      await recording.stopAndUnloadAsync();
      setRecording(null);
      setIsMicEnabled(false);
    }
  };

  async function requestPermission() {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCamPermission(status === "granted");

    const { status: micStatus } = await Audio.requestPermissionsAsync();
    setHasMicPermission(micStatus == "granted");
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <AppText style={styles.headerText} weight="6">
        Get Started
      </AppText>
      <AppText style={styles.tagline} weight="4">
        Setup your audio and video before joining
      </AppText>
      <View style={styles.cameraCtn}>
        {isCameraOn ? (
          <Camera
            type={CameraType.front}
            ref={cameraRef}
            style={styles.camera}
            ratio={"4:3"}
          />
        ) : (
          <View style={styles.cameraDisabledCtn}>
            <View style={styles.avatar}>
              <AppText style={styles.avText} weight="6">
                AJ
              </AppText>
            </View>
            <AppText style={styles.avTagline} weight="6">
              Akanji J
            </AppText>
          </View>
        )}
        {isCameraOn && (
          <View style={styles.wifiCtn}>
            <Ionicons name="wifi-outline" color={"#36B37E"} size={20} />
          </View>
        )}
      </View>
      <View style={styles.controlIconCtn}>
        <View style={styles.leftControlIcons}>
          <ControlIcon
            icon={inactiveMic ? "mic-off-outline" : "mic-outline"}
            inActive={inactiveMic}
            onPress={toggleMic}
          />
          <ControlIcon
            icon={inactiveCam ? "videocam-off-outline" : "videocam-outline"}
            inActive={inactiveCam}
            onPress={toggleCamera}
          />
        </View>
        <ControlIcon
          icon="settings-outline"
          inActive
          onPress={() => setShowModal(true)}
        />
      </View>
      <View style={styles.detsCtn}>
        <DisplayField title="Akanji J" />
        <View style={{ flex: 1 }}>
          <DisplayField title="joseph@mail.com" />
        </View>
      </View>
      <AppButton title="Konn3ct" style={styles.btn} />
      <AppModal active={showModal} closeModal={() => setShowModal(false)}>
        <DeviceSettingsModal closeModal={() => setShowModal(false)} />
      </AppModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: normalise(20),
  },
  headerText: {
    fontWeight: "500",
    fontSize: fontPixel(24),
    color: "black",
    lineHeight: normalise(40),
    letterSpacing: 0.25,
    marginTop: pixelSizeVertical(84),
  },
  tagline: {
    fontSize: fontPixel(14),
    lineHeight: normalise(24),
    letterSpacing: 0.5,
  },
  cameraCtn: {
    width: "100%",
    height: heightPixel(324),
    borderRadius: normalise(16),
    marginTop: pixelSizeVertical(12),
    overflow: "hidden",
    position: "relative",
  },
  cameraDisabledCtn: {
    width: "100%",
    height: "100%",
    backgroundColor: "#B9C9C2",
    alignItems: "center",
    justifyContent: "center",
  },
  controlIconCtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: normalise(20),
  },
  leftControlIcons: {
    flexDirection: "row",
    columnGap: 16,
  },
  btn: { alignSelf: "flex-start", width: "50%", marginTop: normalise(30) },
  detsCtn: {
    flexDirection: "row",
    columnGap: normalise(9),
    width: "100%",
    marginTop: normalise(37),
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  avatar: {
    height: normalise(144),
    width: normalise(144),
    borderRadius: 999,
    backgroundColor: "#93B3A5",
    justifyContent: "center",
    alignItems: "center",
  },
  avText: {
    color: "white",
    fontSize: fontPixel(48),
  },
  avTagline: {
    color: "white",
    fontSize: fontPixel(14),
    marginTop: normalise(16),
  },
  wifiCtn: {
    position: "absolute",
    height: normalise(28),
    width: normalise(36),
    borderRadius: normalise(8),
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    left: 20,
  },
});

export default PreJoiningScreen;
