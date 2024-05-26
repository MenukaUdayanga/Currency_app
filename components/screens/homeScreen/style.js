import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    containerLight: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    containerDark: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#121212',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#000',
    },
    headerDark: {
        color: '#fff',
    },
    toggleButton: {
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: '#000',
        backgroundColor: '#fff',
    },
    inputDark: {
        color: '#fff',
        backgroundColor: '#333',
    },
    label: {
        marginVertical: 10,
        fontSize: 20,
        color: '#000',
    },
    labelDark: {
        color: '#fff',
    },
    btn:{
        marginTop:10
    }
});

export default styles;