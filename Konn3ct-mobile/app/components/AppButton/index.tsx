import React, { FC } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

import { styles } from "./styles";
import { AppText } from "../AppText";

interface buttonProps {
  title: string;
  onPress?: (data?: any) => void;
  style?: StyleProp<ViewStyle>;
}

const AppButton: FC<buttonProps> = ({ title, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress ? onPress : () => console.log("Tapped")}
      style={[styles.button, style]}
    >
      <AppText style={[styles.text]} weight="6">
        {title}
      </AppText>
    </Pressable>
  );
};

export default AppButton;
