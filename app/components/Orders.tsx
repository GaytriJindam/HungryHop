import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

type Order = {
  id: number;
  items: string[];
  total: number;
  date: string;
};

// Mock data for orders
const mockOrders: Order[] = [
  {
    id: 1,
    items: ['Margherita Pizza', 'Caesar Salad'],
    total: 21.98,
    date: '2024-12-20',
  },
  {
    id: 2,
    items: ['Spaghetti Carbonara'],
    total: 14.99,
    date: '2024-12-18',
  },
  {
    id: 3,
    items: ['Cheeseburger', 'Fries'],
    total: 15.99,
    date: '2024-12-15',
  },
];

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching orders from an API
    const fetchOrders = async () => {
      setTimeout(() => {
        setOrders(mockOrders);
        setLoading(false);
      }, 1000); // Simulate 1-second delay
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#ff6347" />
        <Text style={styles.loaderText}>Loading orders...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderDate}>Date: {item.date}</Text>
            <Text style={styles.orderItems}>Items: {item.items.join(', ')}</Text>
            <Text style={styles.orderTotal}>Total: ${item.total.toFixed(2)}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  orderCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  orderItems: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});
