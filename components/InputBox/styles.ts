import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {

        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'transparent', //by default android puts white as a background color
        //  justifyContent:'space-between'
        alignItems:'center'
    },
    mainContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1, // apart from static input in buttonCont.. this will occupy remaining space( Smart Auto-Alignment ) 
        alignItems:'center',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon:{
        // top:3, Don't use static aligns if possible
        marginHorizontal: 5,
        justifyContent:'center'
    },
    buttonContainer: {
        backgroundColor: '#0C6157',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles