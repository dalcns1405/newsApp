import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:10,
        margin:10,
        borderRadius:10

    },
    image:{
        height:Dimensions.get("window").height / 4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:10

    },
    title:{
        fontWeight:"bold",
        fontSize:20,

    },
    description:{
        marginTop:10

    },
    author:{
        textAlign:"right",
        fontStyle:"italic",
        paddingTop: 4,

    }


})