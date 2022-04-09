import { signOut,getAuth } from 'firebase/auth'
import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
// const handleSignOut = async() =>{
//     try{
//         signOut(getAuth())
//         console.log('Sign Out successfully!')
//     } catch(error){
//         console.log('error')
//     }}
const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                <Image style={styles.logo}   source={require('../../assets/logo.png')}></Image>
            </TouchableOpacity>
            
            <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                <Image style={styles.icon}   source={{uri:'https://img.icons8.com/fluency-systems-regular/60/000000/plus-2-math.png'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon}   source={{uri:'https://img.icons8.com/fluency-systems-regular/60/000000/like--v1.png'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText} >11</Text>
                </View>
                <Image style={styles.icon}   source={{uri:'https://img.icons8.com/fluency-systems-regular/60/000000/facebook-messenger.png'}}></Image>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
        backgroundColor:'white'
    },
    iconsContainer:{
        flexDirection:'row'

    },
    logo:{
        width:100,
        height:50,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain',
        
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600'
    }

})
export default Header
