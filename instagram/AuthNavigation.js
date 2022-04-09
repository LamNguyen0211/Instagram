// import React,{useState,useEffect} from 'react'
// import { View, Text } from 'react-native'
// import firebase from './firebase'
// import { SignedInStack, SignedOutStack } from './navigation'
// import { getAuth,onAuthStateChanged} from "firebase/auth";
// const Authnavigation = () => {
//     const[currentUser, setCurrentUser] = useState(null)
//     const userHandler = user => user ? setCurrentUser : setCurrentUser(null)
//     useEffect(
//         ()=>
//             onAuthStateChanged(getAuth(),user=>userHandler(user))

//     ,[])
     
//     return <>{currentUser ? <SignedInStack/>:<SignedOutStack/>}</>
// }

// export default Authnavigation
