import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Create = ({ data, setdata }) => {
  const [itemName, setitemName] = useState('');
  const [stock, setstock] = useState('');
  const [isEdit, setisEdit] = useState(false);

  const handlerOfAddItem = () => {
    if (itemName.trim() === '' || stock.trim() === '') {
      alert('Please enter both item name and stock amount');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: itemName,
      stock: parseInt(stock, 10),
      unit: 'kg',
    };

    setdata(prevData => [...prevData, newItem]);
    setitemName('');
    setstock('');
    setisEdit(false);
  };

  const deleteItem = id => {
    setdata(prevData => prevData.filter(item => item.id !== id));
  };
  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder=" Item Name"
          placeholderTextColor={'#999'}
          value={itemName}
          style={styles.textInput}
          onChangeText={item => setitemName(item)}
        />
        <TextInput
          placeholder=" Enter stock amount"
          placeholderTextColor={'#999'}
          value={stock}
          style={styles.textInput}
          onChangeText={item => setstock(item)}
        />

        <Pressable
          style={styles.btnContainer}
          onPress={() => handlerOfAddItem()}
        >
          <Text style={styles.btnText}>Add item in Stock</Text>
        </Pressable>
        <Text style={{ textAlign: 'center', fontSize: 18, color: '#999' }}>
          No items in stock
        </Text>
      </View>
    );
  }

  const editItem = id => {
    setisEdit(true);
    const itemToEdit = data.find(item => item.id === id);
    if (itemToEdit) {
      setitemName(itemToEdit.name);
      setstock(itemToEdit.stock.toString());
      setdata(prevData => prevData.filter(item => item.id !== id));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder=" Item Name"
        placeholderTextColor={'#999'}
        value={itemName}
        style={styles.textInput}
        onChangeText={item => setitemName(item)}
      />
      <TextInput
        placeholder=" Enter stock amount"
        placeholderTextColor={'#999'}
        value={stock}
        style={styles.textInput}
        onChangeText={item => setstock(item)}
      />

      <Pressable style={styles.btnContainer} onPress={() => handlerOfAddItem()}>
        <Text style={styles.btnText}>{isEdit ? 'Edit Item' : 'Add item in Stock'}</Text>
      </Pressable>

      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Items in Stock</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 5 ? '#ffcccc' : '#d7f6bf' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Text style={[styles.itemText, { marginRight: '20' }]}>
                  {item.stock}
                </Text>
                <Pressable onPress={() => editItem(item.id)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItem(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    padding: '4%',
    gap: 10,
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
    width: '100%',
  },

  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },

  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },

  itemText: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});
