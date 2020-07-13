import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation } from 'react-native';

import styles from './styles';

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: null
    };

    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(function () {
                setLoading(false);
                navigation.navigate("Tab", { screen: "home" });
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
            });
    };

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <Image source={require('../../assets/authHeader.png')} style={{ width: 480, marginTop: -140, marginLeft: -50 }} />
                <Image source={require('../../assets/authHeader.png')} style={{ width: 480,position: 'absolute', bottom: -190, right: -190 }} />
                <Image source={require('../../assets/loginLogo.png')} style={{ marginTop: -100, alignSelf: 'center' }} />
                <Text style={styles.greeting}>{`Olaa meu Rei. \nSeja Bem Vindo`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none' 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                    </View>
                    
                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Senha</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry
                            autoCapitalize='none' 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: '#fff', fontWeight: '500' }}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ alignSelf: 'center', marginTop: 32 }} 
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text style={{ color: '#414959', fontSize: 13 }}>
                        É novo no App?  <Text style={{ fontWeight: '500', color: '#e9446a' }}>Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}