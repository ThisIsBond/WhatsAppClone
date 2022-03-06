import { View, Text, FlatList, ImageBackground } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats'
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png'

const ChatRoomScreen = () => {

  const route = useRoute(); // This hook provide route params to enter into user specified ChatRoom form ChatRoomsList 

  console.log(route.params); // to understand the useRoute Hook


  return (
    <ImageBackground style={{ width: '100%', height: '100%' }} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted // Order the FlatList and invert the whole render of FlatList 
      />
    </ImageBackground>

  );
}

export default ChatRoomScreen;