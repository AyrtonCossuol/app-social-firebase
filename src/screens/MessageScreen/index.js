import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class MessageScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Message Screen</Text>
            </View>
        );
    };
};