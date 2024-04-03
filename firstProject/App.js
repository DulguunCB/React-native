import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  TextInput
} from "react-native";

export default function App() {
  const handle = () => console.log("daragdlaa");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style = {styles.input} placeholder="Input"/>
      <Text style={styles.text} onPress={handle}>
        A
      </Text>
      <Text style={styles.text}>Aghkjgh</Text>
      <TouchableHighlight>
        <Image
          style={styles.img}
          source={{
            uri: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D",
          }}
        />
      </TouchableHighlight>

      <Image style={styles.img} source={require("./assets/icon.png")} />
      <StatusBar style="auto" />
      <Button
        onPress={handle}
        title="Button"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
  },
  text: {
    color: "red",
  },
  img: {
    width: 100,
    height: 100,
  },
  input: {
    width:300,
    height:30,
    borderWidth: 1,
    padding: 10,
  }
});
