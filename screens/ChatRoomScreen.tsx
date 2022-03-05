import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const ChatRoomScreen = () => {

  const route = useRoute(); // This hook provide route params to enter into user specified ChatRoom form ChatRoomsList 

  console.log(route.params); // to understand the useRoute Hook
  

  return (
    <View>
      <Text>CharRoom</Text>
    </View>
  )
}

export default ChatRoomScreen;