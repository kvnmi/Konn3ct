import { AppText } from "@/components/AppText";
import {
  fontPixel,
  heightPixel,
  normalise,
  pixelSizeVertical,
} from "@/config/normalize";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ControlIcon from "@/components/ControlIcon";
import AppButton from "@/components/AppButton";
import DisplayField from "@/components/DisplayField";
import { Camera, CameraType } from "expo-camera/legacy";

interface Props {}

function PreJoiningScreen({}: Props) {
  const { top } = useSafeAreaInsets();

  const [hasCamPermission, setHasCamPermission] = useState<boolean>(false);
  const [hasMicPermission, setMicCamPermission] = useState<boolean>(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const cameraRef = useRef<Camera | null>(null);
  const [ratio, setRatio] = useState<string>("4:3");

  const toggleCamera = () => setIsCameraOn((prevState) => !prevState);
  async function requestPermission() {
    const { status: micStatus } =
      await Camera.requestMicrophonePermissionsAsync();
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCamPermission(status === "granted");

    console.log(micStatus);
    setMicCamPermission(micStatus == "granted");
  }

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    const setSupportedRatio = async () => {
      if (cameraRef.current) {
        const supportedRatios =
          await cameraRef.current.getSupportedRatiosAsync();
        if (supportedRatios.includes("16:9")) {
          setRatio("16:9"); // Set your preferred ratio if available
        }
      }
    };
    setSupportedRatio();
  }, [cameraRef]);

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
      </View>
      <View style={styles.controlIconCtn}>
        <View style={styles.leftControlIcons}>
          <ControlIcon icon="mic-outline" />
          <ControlIcon
            icon="videocam-off-outline"
            inActive={!isCameraOn}
            onPress={() => toggleCamera()}
          />
        </View>
        <ControlIcon icon="settings-outline" inActive />
      </View>
      <View style={styles.detsCtn}>
        <DisplayField title="Akanji J" />
        <View style={{ flex: 1 }}>
          <DisplayField title="joseph@mail.com" />
        </View>
      </View>
      <AppButton title="Konn3ct" style={styles.btn} />
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
    height: heightPixel(264),
    borderRadius: normalise(16),
    marginTop: pixelSizeVertical(12),
    overflow: "hidden",
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
});

export default PreJoiningScreen;
