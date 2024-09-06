import { StyleSheet, TextStyle } from "react-native";
import { fontPixel } from "../../config/normalize";
import colors from "../../config/colors";

type textSytle = {
  text: TextStyle;
};

export const styles = StyleSheet.create<textSytle>({
  text: {
    fontSize: fontPixel(16),
    color: colors.black,
  },
});
