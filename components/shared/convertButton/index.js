
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../screens/homeScreen/style';

const ConvertButton = ({ onPress, buttonText }) => {
  return (
    <View>
      <Button icon="plus" mode="contained" style={styles.btn} onPress={onPress}>
        {buttonText}
      </Button>
    </View>
  );
};

export default ConvertButton;
