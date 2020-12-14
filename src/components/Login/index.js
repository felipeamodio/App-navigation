import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';


export default function Login(props){
    return(
    <>
        <View style={styles.login}>
            <TextInput style={styles.txtLogin} placeholder="Login" />
          </View>

          <View style={styles.senha}>
            <TextInput style={styles.txtSenha} secureTextEntry={true} placeholder="Senha" />
          </View>

        <TouchableOpacity style={styles.btnLogin} title='Avançar' 
                                onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnTxt}>Entrar</Text>
        </TouchableOpacity>
    </>
    )
}

const styles = StyleSheet.create({
    btnLogin: {
        justifyContent: 'center',
        backgroundColor: '#1E90FF',
        alignItems: 'center',
        width: 350,
        height: 40,
        borderRadius: 10,
        marginHorizontal: '3%',
        marginTop: 30
    },
    btnTxt: {
        fontSize: 25,
        color: '#1C1C1C',
        fontWeight: 'bold',
        position: 'absolute'
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFAFA',
        marginTop: 70,
        width: 350,
        height: 40,
        marginHorizontal: '3%',
        borderColor: '#1C1C1C',
        borderWidth: 0.5,
        borderRadius: 10
    },
    senha: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFAFA',
        marginTop: 10,
        width: 350,
        height: 40,
        marginHorizontal: '3%',
        borderColor: '#1C1C1C',
        borderWidth: 0.5,
        borderRadius: 10
    },
    txtLogin: {
        fontSize: 20
    },
    txtSenha: {
        fontSize: 20
    }
})