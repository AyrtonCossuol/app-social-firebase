import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
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
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <View style={styles.container}>
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