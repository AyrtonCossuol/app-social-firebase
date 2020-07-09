import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase';

import styles from './styles';

export default class HomeScreen extends React.Component {
    state = {
        email: '',
        displayName: ''
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName })
    };

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Olaa {this.state.email}</Text>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        );
    };
}