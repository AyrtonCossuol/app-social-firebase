import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    }, 

    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },

    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },

    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },

    inputTitle: {
        color: '#8a8f9e',
        fontSize: 10,
        textTransform: 'uppercase'
    },

    input: {
        borderBottomColor: '#8a8f9e',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161f3d'
    }
})