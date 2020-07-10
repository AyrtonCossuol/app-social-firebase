import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerShown: null
    };

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
                <StatusBar barStyle='light-content' />
                <Image source={require('../../assets/authHeader.png')} style={{ width: 550,height: 350, marginTop: -70, marginLeft: -50 }} />
                <Image source={require('../../assets/authHeader.png')} style={{ width: 480, position: 'absolute', bottom: -190, right: -190 }} />
                
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name='ios-arrow-round-back' size={32} color='#fff' />
                </TouchableOpacity>

                <View style={{ position: 'absolute', top: 64, alignItems: 'center', width: '100%' }}>
                    <Text style={styles.greeting}>{`Olaa. \nCadastre-se Agora`}</Text>

                    <TouchableOpacity style={styles.avatar}>
                        <Ionicons 
                            name='ios-add' 
                            size={40}
                            color='#fff'
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        />
                    </TouchableOpacity>
                </View>

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