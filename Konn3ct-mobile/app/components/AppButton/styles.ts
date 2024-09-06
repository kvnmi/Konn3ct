import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { fontPixel, heightPixel } from "@/config/normalize";
import colors from "../../config/colors";

type buttonConatiner = {
  button: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<buttonConatiner>({
  button: {
    height: heightPixel(56),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  text: {
    color: "#fff",
    fontSize: fontPixel(15),
  },
});
