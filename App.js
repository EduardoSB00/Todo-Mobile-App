import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard} from 'react-native';
import Header from './components/Header';
import List from './components/List';

export default function App() {

  function handleDismiss(){
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={styles.container}>
        <Header/>
        <List/>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
   
  },
});
