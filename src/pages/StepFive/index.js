import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import ModalVerse from '../../components/Modal'


function StepFive({ navigation }) {
  const [visible, setVisible] = useState(false)


  return (
    <View style={styles.viewMain}>
      <ModalVerse
        visible={visible}
        setVisible={setVisible}
        verse={' "Pois o que primeiramente lhes transmiti foi o que recebi: que Cristo morreu pelos nossos pecados, segundo as Escrituras,\n\n "Mas Deus demonstra seu amor por nós: Cristo morreu em nosso favor quando ainda éramos pecadores." '}
      />

      <Text style={styles.mainTitle}> Jesus morreu{"\n"}para pagar{"\n"}a nossa dívida</Text>

      <Image
        style={styles.jesus}
        source={{ uri: 'https://www.lifepng.com/wp-content/uploads/2020/09/Cross-Jesus-Illustration-png-hd.png' }}
      />
      <TouchableOpacity onPress={() => { setVisible(true) }}>
        <Text style={styles.verse}>I Coríntios 15:3/ Romanos 5:8</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.btnStart} onPress={() => { navigation.navigate('6º Passo') }}>
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
    width: '70%',
    height: '40%',
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

export default StepFive