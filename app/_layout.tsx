import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


function ButtonCalc({ title, onPress }) {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

function ButtonBlue({ title, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, styles.blue]} onPress={onPress}>
      <Text style={styles.textwhite}>{title}</Text>
    </TouchableOpacity>
  );
}

function ButtonGray({ title, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, styles.gray]} onPress={onPress}>
      <Text style={styles.textwhite}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function RootLayout() {
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  function handleBackspace() {
    if (currentValue.length === 1) {
      setCurrentValue('0');
      return;
    }

    const newValue = currentValue.slice(0, -1);

    if (newValue === '-' || newValue === '') {
      setCurrentValue('0');
    } else {
      setCurrentValue(newValue);
    }
  }

  function handleNumber(value) {
    if (value === '.' && currentValue.includes('.')) return;

    if(currentValue ==='0'){
      setCurrentValue(value);
    }else{
      setCurrentValue(currentValue + value);
    }
  }

  function handleOperator(op) {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('0');
  }

  function handleCalculate() {
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case 'X':
        result = prev * curr;
        break;
      case '÷':
        result = prev / curr;
        break;
      default:
        return;
    }

    setCurrentValue(String(result));
    setOperator(null);
    setPreviousValue(null);
  }

  function handleClear() {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
  }

  function handleToggleSign() {
    const numero = parseFloat(currentValue);
    const invertido = numero * -1;

    setCurrentValue(invertido.toString());

  }

  function handleSqrt() {
    const value = parseFloat(currentValue);
    if (value < 0) return;
    setCurrentValue(String(Math.sqrt(value)));
  }

  return (

    <View style={styles.main}>

      <View>
        <TextInput
          style={styles.input}
          value={currentValue}
          editable={false} />
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <ButtonGray title="C" onPress={handleClear} />
          <ButtonGray title="+-" onPress={handleToggleSign} />
          <ButtonGray title="√" onPress={handleSqrt} />
          <ButtonBlue title="÷" onPress={() => handleOperator('÷')} />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="7" onPress={() => handleNumber('7')} />
          <ButtonCalc title="8" onPress={() => handleNumber('8')} />
          <ButtonCalc title="9" onPress={() => handleNumber('9')} />
          <ButtonBlue title="X" onPress={() => handleOperator('X')} />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="4" onPress={() => handleNumber('4')} />
          <ButtonCalc title="5" onPress={() => handleNumber('5')} />
          <ButtonCalc title="6" onPress={() => handleNumber('6')} />
          <ButtonBlue title="-" onPress={() => handleOperator('-')} />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="1" onPress={() => handleNumber('1')} />
          <ButtonCalc title="2" onPress={() => handleNumber('2')} />
          <ButtonCalc title="3" onPress={() => handleNumber('3')} />
          <ButtonBlue title="+" onPress={() => handleOperator('+')} />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="." onPress={() => handleNumber('.')} />
          <ButtonCalc title="0" onPress={() => handleNumber('0')} />
          <ButtonCalc title="⌫" onPress={handleBackspace} />
          <ButtonBlue title="=" onPress={handleCalculate} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: "50vh",
    alignItems: 'center',
    backgroundColor: "#EDEFEF",
  },

  content: {
    margin: 55
  },

  row: {
    flexDirection: 'row',
    margin: 5,
    gap: 10,
  },

  button: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  gray: {
    backgroundColor: "#444550",
  },

  blue: {
    backgroundColor: "#4448F4",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  textwhite: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    backgroundColor: 'white',
    fontSize: 40,
    width: 300,
    textAlign: 'right',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8
  }
});