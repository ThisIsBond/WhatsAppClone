
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import useColorScheme from '../../hooks/useColorScheme';
import Colors from "../../constants/Colors";

// Images
import money from '../../assets/images/money.jpg'


export type ContactListItemProps = {
    user: User;
}



const ContactListItem = (props: ContactListItemProps) => {


    const colorScheme = useColorScheme()

    const { user } = props;

    const navigation = useNavigation(); // Hook that provide current navigation object



    const onClick = () => {
        // Navigate to chatroom with this user
    }

    return (
        /* This TouchableWithoutFeedback work just with one child */
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>

                <View style={styles.leftContainer}>
                    <Image source={money} style={styles.avatar} />

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