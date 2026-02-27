import { Button, StyleSheet, Text, View } from 'react-native';


export default function RootLayout() {

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
    }
  })

  return (
    <View>
      <View>
        <Text>Calculadora: </Text>
      </View>

      <View style={styles.row}>
        <Button title="C" />
        <Button title="+-" />
        <Button title="%" />
        <Button title="÷" />
      </View>

      <View style={styles.row}>
        <Button title="7" />
        <Button title="8 " />
        <Button title="9" />
        <Button title="X" />
      </View>

      <View style={styles.row}>
        <Button title="4" />
        <Button title="5" />
        <Button title="6" />
        <Button title="-" />
      </View>

      <View style={styles.row}>
        <Button title="1" />
        <Button title="2" />
        <Button title="3" />
        <Button title="+" />
      </View>

      <View style={styles.row}>
        <Button title="." />
        <Button title="0" />
        <Button title="⌫" />
        <Button title="=" />
      </View> 
    </View>  
  );
}
