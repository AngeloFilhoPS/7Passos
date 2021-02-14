import React,{useState} from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import ModalVerse from '../../components/Modal'

function StepFour({ navigation }) {
  const [visible, setVisible] = useState(false)


  return (
    <View style={styles.viewMain}>
      <ModalVerse
        visible={visible}
        setVisible={setVisible}
        verse={' "Aquele que é a Palavra tornou-se carne e viveu entre nós. Vimos a sua glória, glória como do Unigênito vindo do Pai, cheio de graça e de verdade." '}
      />

      <Text style={styles.mainTitle}>Deus veio ao mundo{"\n"}em forma de{"\n"}JESUS</Text>
      <Text style={styles.godTitle}>DEUS   ⃤ ⬇</Text>
      <View style={styles.lineStyle} />

      <Image
        style={styles.jesus}
        source={{ uri: 'https://www.mixadesivos.com.br/simulador/69295f5f6bd7d1a08da4919b5bb95bff/1_21_181121034809_adesivo-de-parede-jesus-cristo.png' }}
      />

      <TouchableOpacity onPress={() => { setVisible(true) }}>
        <Text style={styles.verse}>João 1:14</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btnStart} onPress={() => { navigation.navigate('5º Passo') }}>
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
    width: '30%',
    height: '30%',
    marginTop: 15
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

export default StepFour