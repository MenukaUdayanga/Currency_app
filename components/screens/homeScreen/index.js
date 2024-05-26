import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView, StatusBar, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import pickerSelectStyles from './pickerSelectStyles'
import ConvertButton from '../../shared/convertButton';
import TextContent from '../../constant/Text';

const Home = () => {
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [targetCurrencyRate, setTargetCurrencyRate] = useState(null);
  const [baseCurrencyRate, setBaseCurrencyRate] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    const selectedBaseCurrency = currencies.find(currency => currency.value === baseCurrency);
    if (selectedBaseCurrency) {
      setBaseCurrencyRate(selectedBaseCurrency.rate);
    }

    const selectedTargetCurrency = currencies.find(currency => currency.value === targetCurrency);
    if (selectedTargetCurrency) {
      setTargetCurrencyRate(selectedTargetCurrency.rate);
    }
  }, [baseCurrency, targetCurrency, currencies]);

  const fetchCurrencies = async () => {
    try {
      const response = await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=86c0d137ef6421df5f4c5480c4d2e963');
      const currencyCodes = Object.keys(response.data.rates);
      const currencyOptions = currencyCodes.map(code => ({ label: code, value: code, rate: response.data.rates[code] }));
      setCurrencies(currencyOptions);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const convertAmount = () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }

    const converted = (amount / baseCurrencyRate) * targetCurrencyRate;
    setConvertedAmount(converted.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={darkMode ? styles.containerDark : styles.containerLight}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <View style={styles.headerContainer}>
        <Text style={[styles.header, darkMode && styles.headerDark]}>{TextContent.header1}</Text>
        <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleButton}>
          <Icon name={darkMode ? "toggle-off" : "toggle-on"} size={40} color={darkMode ? "#fff" : "#000"} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={[styles.input, darkMode && styles.inputDark]}
        placeholder="Enter amount"
        placeholderTextColor={darkMode ? "#888" : "#aaa"}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Text style={[styles.label, darkMode && styles.labelDark]}>{TextContent.bCurrency}</Text>
      <RNPickerSelect
        onValueChange={setBaseCurrency}
        items={currencies}
        value={baseCurrency}
        style={pickerSelectStyles(darkMode)}
      />
      
      <Text style={[styles.label, darkMode && styles.labelDark]}>{TextContent.tCurrency}</Text>
      <RNPickerSelect
        onValueChange={setTargetCurrency}
        items={currencies}
        value={targetCurrency}
        style={pickerSelectStyles(darkMode)}
      />
      
      <ConvertButton buttonText="Convert" onPress={convertAmount}/>
      
      {convertedAmount !== null && <Text style={[styles.label, darkMode && styles.labelDark]}> {amount} {baseCurrency} = {convertedAmount} {targetCurrency}</Text>}
    </ScrollView>
  );
};




export default Home;
