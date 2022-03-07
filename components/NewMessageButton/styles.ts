import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightGreen.tint,
        width:50,
        height:50,
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute', // can overlap upon the view and won't move from specified position.
        end: 20, 
        bottom: 20
    },
});

export default styles