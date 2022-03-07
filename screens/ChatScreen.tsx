import {View ,Text ,FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import NewMessageButton from '../components/NewMessageButton';

import ChatRooms from '../data/ChatRooms';

export default function ChatScreen() {
  return (
    <View>
      <FlatList
        style={{ width: '100%' }} // In order to display FlatList correctly
        data={ChatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton/> 
    </View>
  );
}

