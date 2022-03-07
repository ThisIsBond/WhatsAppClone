import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { View, Text } from "../Themed";
import styles from "./styles";

const InputBox = () => {

    const [message, setMessage] = useState(''); //storing user inputted message 

    const onMicrophonePress = () => {
        console.warn('Microphone Pressed');

    }

    const onSendPress = () => {
        console.warn(`Sending -> ${message}`);
        setMessage('') // Clearing state after sending message
    }


    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 style={styles.icon} name='laugh-beam' size={24} color='grey' />
                <TextInput
                    style={styles.textInput}
                    value={message}
                    onChangeText={setMessage}
                    placeholder={'Type a message'}
                    multiline
                    maxHeight={80}
                    scrollEnabled={true}
                />
                <Entypo style={styles.icon} name='attachment' size={24} color='grey' />
                {
                    !message && <Fontisto style={styles.icon} name='camera' size={24} color='grey' />
                }
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {
                        !message
                            ? <MaterialCommunityIcons name='microphone' size={28} color='white' />
                            : <MaterialIcons name='send' size={20} color='white' />

                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;