import { FlatList, StyleSheet, Text, View } from 'react-native';

const AllItems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList data={data} keyExtractor={item => item.id} renderItem={({item})=>(
        <View style={[styles.itemContainer, { backgroundColor: item.stock < 5 ? '#ffcccc' : '#d7f6bf' }]}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemText}>{item.stock}</Text>
        </View>
      )}/>
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
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
