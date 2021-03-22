import React from 'react';
import {StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native';

const Levels=(props)=> {
    return (
      <>
        <View style={styles.container}>
        {props.levels.map(p=>
              <View style={styles.column} key={p[0]}>
                {p.map(b=>
                    <TouchableOpacity style={styles.button} key={b}
                                      onPress={() => {props.openLevel(b);
                                        props.navigation.navigate('Level')}}>
                      <Text style={styles.textSel}>{b}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )}
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
    flexDirection: 'column',
  },
  column: {
    flexDirection: 'row',
  },
  button: {
    width: '18%',
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

export default Levels;
