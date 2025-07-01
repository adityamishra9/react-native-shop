import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AllItems from './AllItems';
import LowStock from './LowStock';
import Create from './Create';

const HomeScreen = () => {
  const [view, setview] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={() => setview(0)}>
          <Text style={styles.btnText}>All Items</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setview(1)}>
          <Text style={styles.btnText}>Low Stock</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setview(2)}>
          <Text style={styles.btnText}>Create</Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems />}
      {view === 1 && <LowStock/>}
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
