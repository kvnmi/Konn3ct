import { normalise } from "@/config/normalize";
import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import Modal from "react-native-modal";

export interface modalProps {
  active: boolean;
  closeModal: () => void;
  onModalClose?: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

function AppModal({
  active = false,
  children,
  closeModal,
  onModalClose,
  contentContainerStyle,
}: modalProps & { children: React.ReactNode }) {
  return (
    <View style={modalStyles.container}>
      <Modal
        isVisible={active}
        style={modalStyles.modal}
        onSwipeComplete={closeModal}
        swipeDirection={["down"]}
        onBackdropPress={closeModal}
        onModalHide={onModalClose}
        backdropColor="black"
        backdropOpacity={0.55}
      >
        <View style={[modalStyles.screen, contentContainerStyle]}>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  modal: {
    margin: 0,
  },
  screen: {
    backgroundColor: "transparent",
    paddingHorizontal: normalise(15),
    justifyContent: "flex-start",
    flex: 1,
    paddingVertical: normalise(27),
  },
});

export default AppModal;
