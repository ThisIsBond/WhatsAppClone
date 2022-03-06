import moment from "moment";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import useColorScheme from '../../hooks/useColorScheme';
import Colors from "../../constants/Colors";

// Images
import money from '../../assets/images/money.jpg'


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {

    
    const colorScheme = useColorScheme()

    const { chatRoom } = props;

    const navigation = useNavigation(); // Hook that provide current navigation object

    const user = chatRoom.users[1];

    const onClick = () => {

        // Below hooks provide specified data while navigation(We have used that data in navigation/index.tsx file in custom header for ChatRoomScreen.tsx screen) 
        navigation.navigate('ChatRoom', {
            id: chatRoom.id, 
            name: user.name 
        })
    }

    return (
         /* This TouchableWithoutFeedback work just with one child */
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>

                <View style={styles.leftContainer}>
                    <Image source={money} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={{ color: Colors[colorScheme].text ,...styles.username}}> {user.name} </Text>
                        <Text style={{ ...styles.lastMessage }}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")} {/* Format date using moment library */}
                </Text>
            </View>
        </TouchableWithoutFeedback>

    )
};

export default ChatListItem;