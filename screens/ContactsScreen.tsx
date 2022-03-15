import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ContactListItem from '../components/ContactListItem';

import { listUsers } from '../src/graphql/queries';

export default function ContactsScreen() {

  const [users, setUsers] = useState([])


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await API.graphql(
          graphqlOperation(
            listUsers
          )
        )
        setUsers(userData.data.listUsers.items);
      } catch (e) {
        console.log(e);

      }
    }


    fetchUsers();
  }, [])

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

