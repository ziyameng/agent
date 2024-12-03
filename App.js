import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [highlightFirstPayTransfer, setHighlightFirstPayTransfer] = useState(false);

  const handleColorChange = () => {
    setHighlightFirstPayTransfer((prevState) => !prevState); // Toggle highlighting the first "Pay & Transfer" button
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>11:11</Text>
        <View style={styles.headerRow}>
          <Text style={styles.greeting}>Good morning Bob</Text>
          <View style={styles.icons}>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>44</Text>
            </View>
            {/* Top-right button */}
            <TouchableOpacity style={styles.colorToggleButton} onPress={handleColorChange}>
              <Text style={styles.colorToggleText}>Guidance Mode</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Summary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Everyday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Save & Invest</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Current accounts</Text>

        {/* First Account Card */}
        <View style={styles.accountCard}>
          <Text style={styles.accountName}>Classic</Text>
          <Text style={styles.accountNumber}>12-34-56 / 12345678</Text>
          <Text style={styles.balance}>£5,000.50</Text>
          <View style={styles.cardButtons}>
            {/* Highlight this button when toggled */}
            <TouchableOpacity
              style={[
                styles.cardButton,
                {
                  backgroundColor: highlightFirstPayTransfer ? '#FF0000' : '#4CAF50',
                },
              ]}
            >
              <Text style={styles.cardButtonText}>Pay & transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.cardButtonText}>Regular payments</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Second Account Card */}
        <View style={styles.accountCard}>
          <Text style={styles.accountName}>Classic</Text>
          <Text style={styles.accountNumber}>12-34-56 / 12345679</Text>
          <Text style={styles.balance}>£512.64</Text>
          <View style={styles.cardButtons}>
            <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.cardButtonText}>Pay & transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.cardButtonText}>Regular payments</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Info Section */}
        <View style={styles.infoCard}>
          <Image source={require('./coins.png')} style={styles.infoImage} />
          <Text style={styles.infoTitle}>Your money - past, present and future</Text>
          <Text style={styles.infoText}>
            Plan ahead for upcoming bills and spot spending trends to keep your balance on track.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Cards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 10,
  },
  notificationText: {
    color: '#fff',
    fontSize: 12,
  },
  colorToggleButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  colorToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
  },
  mainContent: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accountCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountNumber: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  infoText: {
    textAlign: 'center',
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#333',
  },
});
