import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function ButtonCalc({ title }) {
  return (
    <TouchableOpacity style={[styles.button]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

function ButtonBlue({ title }) {
  return (
    <TouchableOpacity style={[styles.button, styles.blue]}>
      <Text style={styles.textwhite}>{title}</Text>
    </TouchableOpacity>
  );
}

function ButtonGray({ title }) {
  return (
    <TouchableOpacity style={[styles.button, styles.gray]}>
      <Text style={styles.textwhite}>{title}</Text>
    </TouchableOpacity>
  );
}


export default function RootLayout() {
  return (
    <View style={styles.main}>

      <View>
        <Text>Resultado:</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <ButtonGray title="C" type="dark" />
          <ButtonGray title="+-" type="dark" />
          <ButtonGray title="%" type="dark" />
          <ButtonBlue title="÷" />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="7" />
          <ButtonCalc title="8" />
          <ButtonCalc title="9" />
          <ButtonBlue title="X" />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="4" />
          <ButtonCalc title="5" />
          <ButtonCalc title="6" />
          <ButtonBlue title="-" />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="1" />
          <ButtonCalc title="2" />
          <ButtonCalc title="3" />
          <ButtonBlue title="+" />
        </View>

        <View style={styles.row}>
          <ButtonCalc title="." />
          <ButtonCalc title="0" />
          <ButtonCalc title="⌫" />
          <ButtonBlue title="=" />
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
  }
});