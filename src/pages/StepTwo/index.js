import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function StepTwo() {

  return (
    <View style={styles.viewMain}>

      <Text style={styles.mainTitle}>O pecado nos{"\n"}separou{"\n"}de</Text>
      <Text style={styles.godTitle}>DEUS   ⃤</Text>
      <View style={styles.lineStyle} />
      <Text style={styles.mainTitle}>👿👨💔👩</Text>
      <Text style={styles.verse}>Romanos 3:23; 6:23</Text>


      <TouchableOpacity style={styles.btnStart} onPress={() => { }}>
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
  },
  godTitle: {
    marginTop: 10,
    marginLeft:'10%',
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
    width:'100%',
    borderColor: 'black',
    margin: 10,
  }

});

export default StepTwo