import React,{useState} from 'react'
import { View,Image, Text,StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
const postFooterIcons=[
    {
        name:'Like',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/000000/like--v1.png',
        likedImageUrl:'https://img.icons8.com/fluency-systems-regular/90/fa314a/like--v1.png'
    },
    {
        name:'Comment',
        imageUrl:'https://img.icons8.com/material-outlined/60/000000/speech.png',
    },
    {
        name:'Share',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/000000/paper-plane.png',
    },
    {
        name:'Save',
        imageUrl:'https://img.icons8.com/external-bearicons-gradient-bearicons/64/000000/external-Save-social-media-bearicons-gradient-bearicons.png'
    }
]
const Post = ({post}) => {
    
    return (
        <View style={{marginBottom:30}}>
            <Divider width={1} orientation='vertical' color='black' />
            <PostHeader post = {post}/> 
            <Postimage post = {post}/> 
            <View style={{marginHorizontal:15, marginTop:10}}>
                <PostFooter />
                <Likes post = {post}/>
                <Caption post = {post}/>
                <CommentsSection post = {post}/>
                <Comments post = {post}/>
            </View>          
        </View>
    )
}
const PostHeader = ({post}) =>(
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5,alignItems:'center',}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity><Image source={{uri: post.profile_picture}} style={styles.story}/></TouchableOpacity>
            <Text style={{color:'black',marginLeft:5, fontWeight:'700'}}>{post.user}</Text>
        </View>
        <TouchableOpacity><Text style={{color:'black',fontWeight:'900'}}>...</Text></TouchableOpacity>
    </View> 
)
const Postimage=({post}) => (
    <View style={{width:'100%',height:450}}>
        <Image
        source={{uri: post.imageUrl}}
        style={{height:'100%',resizeMode:'cover'}}
    />
    </View>
)
const PostFooter = () =>(
    
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}
            />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
            <Icon 
                imgStyle={[styles.footerIcon,styles.shareIcon,
                ]}
                imgUrl={postFooterIcons[2].imageUrl}
                
            />
        </View>
        <View>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/>
        </View>
    </View>
)
const Icon = ({imgStyle,imgUrl})=>(
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri:imgUrl}}/>
    </TouchableOpacity>
)
const Likes = ({post})=>(
    <View style={{flexDirection:'row',marginTop:4}}>
        <Text style={{color:'black',fontWeight:'600'}}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
    
)
const Caption = ({post}) =>(
    <View style={{marginTop:5}}>
        <Text style={{color:'black'}}>
            <Text style={{fontWeight:'bold'}}> {post.user}: </Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
    
)
const CommentsSection = ({post}) =>(
    <View style={{marginTop:5}}>
        {!!post.comments.length && (
        <Text style={{color:'gray'}}>
            View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {''}
            {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
        )}
    </View>
    
)
const Comments =({post}) =>(
    <>
        {post.comments.map((comment,index)=>(
            <View key={index} style={{flexDirection:'row',marginTop:5}}>
                <Text style={{color:'black'}}>
                    <Text style={{fontWeight:'bold'}}>{comment.user}:</Text> {''}
                     {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:'#ff8501',
    },
    footerIcon:{
        width:33,
        height:33,
    },
    leftFooterIconsContainer:{
        flexDirection:'row',
        width:'32%',
        justifyContent:'space-between'

    },
    shareIcon:{
        transform:[{rotate:'10deg'}],
        marginTop:1
    }

})
export default Post
