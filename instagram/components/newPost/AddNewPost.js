import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import PostUploader from './PostUploader'

const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <PostUploader navigation={navigation}/>
    </View>
)
    

const Header = ({navigation}) =>(
    <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
                source={{uri:'https://img.icons8.com/ios-glyphs/90/000000/back.png'}}
                style={{width:30,height:30}}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>NEW POST</Text> 
            <Text></Text>
        </View>
)
const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    headerText:{
        color:'black',
        fontWeight:'700',
        fontSize:20,
        marginLeft:23
    },
})

export default AddNewPost
