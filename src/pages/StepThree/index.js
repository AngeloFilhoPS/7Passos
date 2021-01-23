import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function StepThree({navigation}) {

  return (
    <View style={styles.viewMain}>

      <Text style={styles.mainTitle}>O AMOR{"\n"}de Deus é{"\n"}persistente</Text>
      <Text style={styles.godTitle}>DEUS   ⃤ ⬇</Text>
      <View style={styles.lineStyle} />
      <Text style={styles.peopleEmoji1}>👿👨👩</Text>
      <Text style={styles.peopleEmoji}>👨👩👨👩</Text>
      <Text style={styles.peopleEmoji}>👨👩👨👩👨👩👨👩</Text>
      <Text style={styles.peopleEmoji}>👨👩👨👩👨👩👨👩👨👩👨👩</Text>
      <Text style={styles.peopleEmoji}>👨👩👨👩👨👩👨👩👨👩👨👩👨👩👨👩</Text>
      <Text style={styles.peopleEmoji}>EU e VOCÊ</Text>

      <Text style={styles.verse}>João 3:16</Text>


      <TouchableOpacity style={styles.btnStart} onPress={() => { navigation.navigate('4º Passo')}}>
        <Text style={styles.txtStart}>Próximo</Text>
      </TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#409fff',

  },
  cruz: {
    width: 50,
    height: 50,
    marginTop: 100
  },
  mainTitle: {
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: ''
  }, peopleEmoji1: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: ''
  },
   peopleEmoji: {
    marginTop: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: ''
  },
  godTitle: {
    marginTop: 20,
    marginLeft: '10%',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: ''
  },
  verse: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  btnStart: {
    backgroundColor: '#000',
    borderWidth: 2,
    padding: 5,
    borderRadius: 50,
    marginTop: 20,
    height: '5%',
    width: '30%'
  },
  txtStart: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#409fff'
  }, lineStyle: {
    borderWidth: 2,
    width: '100%',
    borderColor: 'black',
    margin: 10,
  }

});

export default StepThree