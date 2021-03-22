import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headline}>My First Game</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Levels')}>
          <Text style={styles.textSel}>Выбрать уровень</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.textSel}>Настройки</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Данный раздел на доработке')}>
          <Text style={styles.textSel}>Выход</Text>
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
  headline: {
    fontSize: 20,
    margin: 20,
    color: 'white',
    textAlign: 'center',
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

export default Home;
