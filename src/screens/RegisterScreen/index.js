import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Olaa. \nCadastre-se Agora`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Nome Completo</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none' 
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        />
                    </View>
                    
                    <View style={{ marginTop: 32 }}>
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

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{ color: '#fff', fontWeight: '500' }}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ alignSelf: 'center', marginTop: 32 }} 
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={{ color: '#414959', fontSize: 13 }}>
                        <Text style={{ fontWeight: '500', color: '#e9446a' }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}