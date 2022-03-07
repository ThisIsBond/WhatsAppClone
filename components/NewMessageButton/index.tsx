import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import styles from "./styles";
import { View } from "../Themed";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";



const NewMessageButton = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Contacts")
            }}>
                <MaterialCommunityIcons name='message-reply-text' size={28} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageButton