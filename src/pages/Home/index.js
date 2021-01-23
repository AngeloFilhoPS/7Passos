import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function Home({navigation}) {
  
  return (
    <View style={styles.viewMain}>

      <Text style={styles.mainTitle}>7{"\n"}Passos{"\n"}Para a {"\n"}Vida{"\n"}Eterna</Text>
      <Image
        style={styles.cruz}
        source={require('../../img/passo.png')}
      />
      <TouchableOpacity style={styles.btnStart} onPress={()=>{navigation.navigate('1º Passo')}}>
        <Text style={styles.txtStart}>Toque{"\n"}para começar</Text>
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
  btnStart: {
    backgroundColor: '#000',
    borderWidth: 2,
    padding: 12,
    borderRadius: 50,
    marginTop:100,
    height:'10%',
    width:'30%'
  },
  txtStart: {
    textAlign: 'center',
    fontWeight:'bold',
    color:'#409fff'
  }

});

export default Home