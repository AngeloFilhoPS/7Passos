import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import ModalVerse from '../../components/Modal'


function StepSix({ navigation }) {
  const [visible, setVisible] = useState(false)


  return (
    <View style={styles.viewMain}>
      <ModalVerse
        visible={visible}
        setVisible={setVisible}
        verse={' "E, se o Espírito daquele que ressuscitou Jesus dentre os mortos habita em vocês, aquele que ressuscitou a Cristo dentre os mortos também dará vida a seus corpos mortais, por meio do seu Espírito, que habita em vocês." '}
      />

      <Text style={styles.mainTitle}>
        Jesus destruiu{"\n"} a morte quando{"\n"}ressuscitou.</Text>

      <Image
        style={styles.jesus}
        source={{ uri: 'https://i1.wp.com/pastoralmaranata.org.br/wp-content/uploads/2017/03/Pascoa-Jesus.png?fit=295%2C386' }}
      />

      <TouchableOpacity onPress={() => { setVisible(true) }}>
        <Text style={styles.verse}>Romanos 8:11</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btnStart} onPress={() => { navigation.navigate('7º Passo') }}>
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
  jesus: {
    width: '80%',
    height: '40%',
    marginTop: 15,
    resizeMode: 'contain',
    borderRadius: 60,
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

export default StepSix