import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Setting: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Данный раздел на доработке')}>
          <Text style={styles.textSel}>Изменить язык</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    width: '90%',
    margin: 10,
    borderRadius: 20,
  },
  textSel: {
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#FF3D00',
    color: 'white',
    borderRadius: 10,
  },
});

export default Setting;
