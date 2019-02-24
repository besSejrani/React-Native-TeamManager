import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { cardSectionContent, containerContent, textContent } = styles;

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      visible={visible}
    >
      <View style={containerContent}>
        <CardSection style={cardSectionContent}>
          <Text style={textContent}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionContent: {
    justifyContent: 'center'
  },
  textContent: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerContent: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    psition: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export default Confirm;
