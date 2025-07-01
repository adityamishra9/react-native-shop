import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Create = () => {

  const [itemName, setitemName] = useState('');
  const [stock, setstock] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder=" Item Name"
        placeholderTextColor={'#999'}
        value={itemName}
        style={styles.textInput}
        onChangeText={(item)=> setitemName(item)}
      />
      <TextInput 
        placeholder=" Enter stock amount"
        placeholderTextColor={'#999'}
        value={stock}
        style={styles.textInput}
        onChangeText={(item)=> setstock(item)}
      />

      <Pressable style={styles.btnContainer}>
        <Text style={styles.btnText}>Add item in Stock</Text>
      </Pressable>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderWidth: 1.5,
    borderColor: '#ccc',
    width: '100%',
    padding: 10,
    borderRadius: 7,
  },

  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#cabfeeff',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#cabfeeff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },

  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
})