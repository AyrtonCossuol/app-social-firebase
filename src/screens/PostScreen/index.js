import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class PostScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Post Screen</Text>
            </View>
        );
    };
};