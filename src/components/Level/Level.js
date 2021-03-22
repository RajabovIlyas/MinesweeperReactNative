import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';

const Level = (props) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.column}>
                        <Text style={{color:'white'}}>{props.state.mines}</Text>
                        <Image style={styles.tinyLogo} source={require('../../resources/flag.png')}/></View>
                    <TouchableOpacity onPress={() => {
                        props.newGame();
                    }}>
                        <Image style={styles.tinyLogo} source={require('../../resources/smileNice.png')}/>
                    </TouchableOpacity>
                    <View><Image style={styles.tinyLogo} source={require('../../resources/time.png')}/></View>
                </View>
                <ScrollView>
                    {props.level ? props.level.map((p, first) =>
                        <View style={styles.column} key={p[0].key}>
                            {p.map((b, second) =>
                                b.type ?
                                    (b.checkBox ?
                                        (<View style={styles.button} key={b.key}>
                                            <Text style={styles.textOpen}>{b.content === 0 ? null : b.content}</Text>
                                        </View>) :
                                        (<TouchableOpacity onLongPress={() => props.setFlags({first, second})}
                                                           style={styles.button} key={b.key} onPress={() => {
                                            props.touchBox({first, second});
                                        }}>
                                            {b.flags ? <Image style={styles.flagShow}
                                                              source={require('../../resources/flag.png')}/> :
                                                <Text style={styles.textSel}/>}
                                        </TouchableOpacity>)) : (<View style={styles.button} key={b.key}/>),
                            )}
                        </View>,
                    ) : null}

                </ScrollView>
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
        width: '10%',
        margin: 1,
    },
    textOpen: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 10,
    },
    textSel: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#FF3D00',
        color: 'white',
        borderRadius: 10,
    },
    flagShow: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#FF3D00',
        maxWidth: '100%',
        height: 39,
        borderRadius: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});

export default Level;
