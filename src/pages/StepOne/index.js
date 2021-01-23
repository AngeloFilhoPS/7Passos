import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function StepOne({navigation}) {
 
  return (
    <View style={styles.viewMain}>

      <Text style={styles.mainTitle}>Deus criou{"\n"}o homem para{"\n"}AMÁ-LO</Text>

      <Text style={styles.mainTitle}>👨💕👩</Text>
      <Text style={styles.verse}>Gênesis 1:27</Text>

    
      <TouchableOpacity style={styles.btnStart} onPress={()=>{navigation.navigate('2º Passo')}}>
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
  cruz:{
    width:50,
    height:50,
    marginTop:100
  },
  mainTitle: {
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    color:'#FFFFFF',
    textAlign:'center',
    fontFamily:''
  },
  verse: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color:'#FFFFFF',
    textAlign:'center',
  },
  btnStart: {
    backgroundColor: '#000',
    borderWidth: 2,
    padding: 5,
    borderRadius: 50,
    marginTop:100,
    height:'5%',
    width:'30%'
  },
  txtStart: {
    textAlign: 'center',
    fontWeight:'bold',
    color:'#409fff'
  }

});

export default StepOne