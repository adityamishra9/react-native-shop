import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AllItems from './AllItems';
import Create from './Create';

const data=[
    {id:1, name:'Wheat', stock: 5, unit: 'kg'},
    {id:2, name:'Pulse', stock: 2, unit: 'kg'},
    {id:3, name:'Grain', stock: 8, unit: 'kg'},
    {id:4, name:'Corn', stock: 1, unit: 'kg'},
    {id:5, name:'Rice', stock: 9, unit: 'kg'},
    {id:6, name:'Basmati Rice', stock: 4, unit: 'kg'},
    {id:7, name:'Pasta', stock: 12, unit: 'kg'},
    {id:8, name:'Powder', stock: 51, unit: 'kg'},
]

const HomeScreen = () => {
  const [view, setview] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.btn, view === 0 ? { backgroundColor: 'green' } : null]}
          onPress={() => setview(0)}
        >
          <Text
            style={[styles.btnText, view === 0 ? { color: 'white' } : null]}
          >
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[styles.btn, view === 1 ? { backgroundColor: 'green' } : null]}
          onPress={() => setview(1)}
        >
          <Text
            style={[styles.btnText, view === 1 ? { color: 'white' } : null]}
          >
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[styles.btn, view === 2 ? { backgroundColor: 'green' } : null]}
          onPress={() => setview(2)}
        >
          <Text
            style={[styles.btnText, view === 2 ? { color: 'white' } : null]}
          >
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data}/>}
      {view === 1 && <AllItems data={data.filter((item)=>item.stock<5)}/>}
      {view === 2 && <Create />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: '4%',
    marginTop: '15%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    
  },

  btn: {
    paddingVertical: '3.5',
    paddingHorizontal: '10',
    borderWidth: 0.8,
    borderRadius: 50,
    bordercolor: 'green',
  },

  btnText: {
    fontSize: 12,
    color: 'green',
  },
});
