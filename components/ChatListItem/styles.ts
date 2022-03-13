import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10
    },
    leftContainer: {
        flexDirection: 'row'
    },
    midContainer:{
        justifyContent: 'space-around'
    },
    avatar: {
        width: 56,
        height: 56,
        marginRight: 10,
        borderRadius: 50 // makes image round
    },
    chatAvatar: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 50 // makes image round
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey'
    },
    time: {
        fontSize: 14,
        color: 'grey'
    },
    menuDropDown:{
        color: 'grey'
    }
});

export default styles;