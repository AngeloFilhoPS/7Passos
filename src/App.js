import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function App() {
  function teste() {
    console.warn('oi')
  }
  return (
    <View style={styles.viewMain}>

      <Text style={styles.mainTitle}>7{"\n"}Passos{"\n"}Para a {"\n"}Vida{"\n"}Eterna</Text>
      <Image
        style={styles.cruz}
        source={require('../src/img/cruz.png')}
      />
      <TouchableOpacity style={styles.btnStart} onPress={teste}>
        <Text style={styles.txtStart}>Toque{"\n"}para começar</Text>
      </TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#94D1CE',

  },
  cruz:{
    width:50,
    height:50,
    marginTop:100
  },
  mainTitle: {
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    color:'#A94343',
    textAlign:'center',
    fontFamily:''
  },
  btnStart: {
    backgroundColor: '#E87D00',
    borderWidth: 2,
    padding: 12,
    borderRadius: 15,
    marginTop:100,
    height:'10%',
    width:'30%'
  },
  txtStart: {
    textAlign: 'center',
    fontWeight:'bold'

  }

});

export default App