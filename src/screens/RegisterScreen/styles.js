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

    error: {
        color: '#e9446a',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
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
    },

    button: {
        marginHorizontal: 30,
        backgroundColor: '#e9446a',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
});