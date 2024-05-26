
import { StyleSheet } from 'react-native';
const pickerSelectStyles = darkMode => StyleSheet.create({
    inputIOS: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: darkMode ? '#fff' : '#000',
        backgroundColor: darkMode ? '#333' : '#fff',
    },
    inputAndroid: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        color: darkMode ? '#fff' : '#000',
        backgroundColor: darkMode ? '#333' : '#fff',
    },
});

export default pickerSelectStyles;