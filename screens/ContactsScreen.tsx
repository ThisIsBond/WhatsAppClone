import {View ,Text ,FlatList, StyleSheet } from 'react-native';
import ContactListItem from '../components/ContactListItem';

import users from '../data/Users';

export default function ContactsScreen() {
  return (
    <View>
      <FlatList
        style={{ width: '100%' }} // In order to display FlatList correctly
        data={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      /> 
    </View>
  );
}

