import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function StepSeven({ navigation }) {

  return (
    <View style={styles.viewMain}>

      <Text style={styles.mainTitle}>
        Agora o sétimo passo{"\n"} deve ser dado{"\n"}por você.</Text>
      <Text style={styles.verse}>João 1:12/ Romanos 10:9</Text>
      <TouchableOpacity style={{marginTop:15,backgroundColor:'#87ceeb', padding:15, borderRadius:15, borderColor:'#fff' ,borderWidth:1}}>
        <Text style={styles.question}>
          Você precisa decidir agora!{"\n"} Você quer?</Text>
      </TouchableOpacity>
      <Image
        style={styles.jesus}
        source={{uri:'https://www.nicepng.com/png/detail/3-31225_free-icons-png-jesus-hug-png.png'}}
      />



      <TouchableOpacity style={styles.btnStart} onPress={() => { navigation.navigate('7 Passos') }}>
        <Text style={styles.txtStart}>Home</Text>
      </TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#409fff',

  },
  jesus: {
    width: '80%',
    height: '50%',
    marginTop: 15,
    borderRadius: 50
  },
  mainTitle: {
    marginTop: 20,
    fontSize: 25,
    marginHorizontal: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: ''
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#Fff',
    textAlign: 'center',
  },
  peopleEmoji1: {
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
    marginTop: 50,
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

export default StepSeven