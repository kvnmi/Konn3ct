import { StyleSheet } from "react-native";
import {
  normalise,
  fontPixel,
  pixelSizeVertical,
  heightPixel,
} from "@/config/normalize";

export const styles = StyleSheet.create({
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
