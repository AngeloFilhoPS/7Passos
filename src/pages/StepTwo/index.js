import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native'
import ModalVerse from '../../components/Modal'

function StepTwo({ navigation }) {
  const [visible, setVisible] = useState(false)


  return (

    <View style={styles.viewMain}>
      <ModalVerse
        visible={visible}
        setVisible={setVisible}
        verse={' "...pois todos pecaram e estão destituídos da glória de Deus,\n \n "Pois o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor." '}
      />


      <Text style={styles.mainTitle}>O pecado nos{"\n"}separou{"\n"}de</Text>
      <Text style={styles.godTitle}>DEUS   ⃤</Text>
      <View style={styles.lineStyle} />
      <Text style={styles.mainTitle}>👿👨💔👩</Text>
      <TouchableOpacity onPress={() => { setVisible(true) }}>
        <Text style={styles.verse}>Romanos 3:23; 6:23</Text>
      </TouchableOpacity>



      <TouchableOpacity style={styles.btnStart} onPress={() => { navigation.navigate('3º Passo') }}>
        <Text style={styles.txtStart}>Próximo</Text>
      </TouchableOpacity>
    </View>)
}
const styles = StyleSheet.create({
  verseModal: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  btnExit: {
    alignSelf: 'flex-end',
    marginBottom: 5
  },
  viewMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#409fff',

  }, modalView: {
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
  godTitle: {
    marginTop: 10,
    marginLeft: '10%',
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

export default StepTwo