
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import useColorScheme from '../../hooks/useColorScheme';
import Colors from "../../constants/Colors";

// Images

import { API, Auth, graphqlOperation } from "aws-amplify";
import { createChatRoom, createChatRoomUser } from "../../src/graphql/mutations";


export type ContactListItemProps = {
    user: User;
}



const ContactListItem = (props: ContactListItemProps) => {


    const colorScheme = useColorScheme()

    const { user } = props;

    const navigation = useNavigation(); // Hook that provide current navigation object



    const onClick = async () => {
        // Navigate to chatroom with this user
        // Create new ChatRoom with selected user from the Contacts
        try {

            // 1. Create new ChatRoom
            const newChatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom, {
                    input: {}
                })
            )

            if (!newChatRoomData.data) {
                console.log("failed to create new Chat room");
                return;
            }
            console.log(newChatRoomData);

            const newChatRoom = newChatRoomData.data.createChatRoom;

            // 2. Add 'user' to the Chat Room
            const newChatRoomUser = await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                    input: {
                        userID: user.id,
                        chatRoomID: newChatRoom.id,
                    }
                })
            )
            console.log(newChatRoomUser);

            // 3. Add authenticated user(current user) to Chat Room
            const userInfo = await Auth.currentAuthenticatedUser();
            const currentAuthUser = await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                    input: {
                        userID: userInfo.attributes.sub,
                        chatRoomID: newChatRoom.id,

                    }
                })
            )

            navigation.navigate('ChatRoom', {
                id: newChatRoom.id,
                name: "Hard Coded name"
            })

        } catch (error) {
            console.log(error);

        }
    }

    return (
        /* This TouchableWithoutFeedback work just with one child */
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>

                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={{ color: Colors[colorScheme].text, ...styles.username }}> {user.name} </Text>
                        <Text style={{ ...styles.status }}>{user.status}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
};

export default ContactListItem;