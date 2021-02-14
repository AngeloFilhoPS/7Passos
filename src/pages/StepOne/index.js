import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native'
import ModalVerse from '../../components/Modal'

function StepOne({ navigation }) {
  const [visible, setVisible] = useState(false)

  return (

    <View style={styles.viewMain}>
      
      
      <ModalVerse
        visible={visible}
        setVisible={setVisible}
        verse={' "Criou Deus o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou." '}
      />

      <Text style={styles.mainTitle}>Deus criou{"\n"}o homem para{"\n"}AMÁ-LO</Text>

      <Text style={styles.mainTitle}>👨💕👩</Text>

      <TouchableOpacity onPress={() => { setVisible(true) }}>
        <Text style={styles.verse}>Gênesis 1:27</Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.btnStart} onPress={() => { navigation.navigate('2º Passo') }}>
        <Text style={styles.txtStart}>Próximo</Text>
      </TouchableOpacity>
    </View >)
}
const styles = StyleSheet.create({
  btnExit: {
    alignSelf: 'flex-end',
    marginBottom: 5
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  modalView: {
    marginTop: '50%',
    alignSelf: 'center',
    height: '25%',
    width: '60%',
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
    paddingTop: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000'
  },
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
  },
  verse: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  verseModal: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15
  },
  btnStart: {
    backgroundColor: '#000',
    borderWidth: 2,
    padding: 5,
    borderRadius: 50,
    marginTop: 100,
    height: '5%',
    width: '30%'
  },
  txtStart: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#409fff'
  }

});

export default StepOne