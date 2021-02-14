import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
} from 'react-native'

function ModalVerse(props) {

    return (
        <Modal
            animationType='slide'
            visible={props.visible}
            transparent={true}
            onRequestClose={() => {
                props.setVisible(!props.visible);
            }}
        >
            <View style={styles.modalView}>
                <TouchableOpacity hitSlop={{ top: 10, bottom: 20, left: 20, right: 20 }} style={styles.btnExit} onPress={() => { props.setVisible(false) }}>
                    <Text style={styles.btnTxt}>X</Text>
                </TouchableOpacity>
                <Text style={styles.verseModal}>{props.verse}</Text>
            </View>
        </Modal>
    )
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
        height: '28%',
        width: '90%',
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

export default ModalVerse