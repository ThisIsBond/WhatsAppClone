//Working with all the messages inside the chat room.

import React from 'react';
import { Message } from '../../types';
import { Text, View } from "react-native";
import moment from 'moment';
import styles from './styles';

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {

    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white', // Conditional styling
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                {
                   !isMyMessage() && <Text style={styles.name}>{message.user.name}</Text> // Conditional rendering (If && operator returns false then other condition won't execute)
                }
                <Text style={styles.message}>{message.content}</Text>
                {/* below function shows the time difference between current time & message send time(mentioned in data)  */}
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;