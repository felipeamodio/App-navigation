import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

export default function Login(){
    return(
    <>
    <View style={{justifyContent: 'space-between'}}>
        <View style={styles.bola1} />
        <View style={styles.bola2} />
    </View>
        <View>
            <Image source={require('../../img/logo.png')} style={styles.img} />
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
        marginHorizontal: '30%',
        marginTop: -25
    },
    bola1: {
        backgroundColor: '#87CEEB',
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 60,
        marginLeft: 8
    },
    bola2: {
        backgroundColor: '#00BFFF',
        width: 145,
        height: 145,
        borderRadius: 100,
        marginTop: -200,
        marginLeft: 220
    }
})