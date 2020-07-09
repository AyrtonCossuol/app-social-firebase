import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Olaa meu Rei. \nSeja Bem Vindo`}</Text>

                <View style={styles.errorMessage}>
                    <Text >Error</Text>
                </View>

                <View>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput style={styles.input} autoCapitalize='none' />
                    </View>
                </View>
            </View>
        );
    };
}