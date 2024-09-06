import colors from "@/config/colors";
import {
  widthPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from "@/config/normalize";
import { StyleSheet, ViewStyle } from "react-native";

type Style = {
  container: ViewStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
