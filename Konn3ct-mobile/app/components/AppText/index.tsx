import { FC } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { styles } from "./styles";

type textProps = {
  style?: StyleProp<TextStyle>;
  weight?: "4" | "6";
};

const AppText: FC<textProps & TextProps> = ({
  children,
  style,
  weight = "4",
  ...otherProps
}) => {
  return (
    <Text
      maxFontSizeMultiplier={1.13}
      style={[
        styles.text,
        style,
        {
          fontFamily: weight == "4" ? "Inter_400Regular" : "Inter_600SemiBold",
        },
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export { AppText };
