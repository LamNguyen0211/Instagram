import React,{useState} from 'react'
import { View, Text,TextInput,StyleSheet, Pressable,TouchableOpacity,Alert } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Validator  from 'email-validator'
import { getAuth, createUserWithEmailAndPassword,db } from "firebase/auth";
import firebase from '../../firebase'
const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        username:Yup.string().required().min(2,'A username is required'),
        password:Yup.string().required().min(6,'Your password has to have at least 6 characters')
    })
    const onSignup = async(email,password) =>{
        try {   
            await createUserWithEmailAndPassword(getAuth(),email,password)
            console.log('firebase sign up successful',email,password)
        } catch (error) {
            Alert.alert('My Lord...',error.message)
        }
    }
    return (
        <View style={styles.wrapper}>
            <Formik
            initialValues={{email:'',username:'',password:''}}
            onSubmit={(values) => {
                onSignup(values.email,values.password)
            }}
            validationSchema={SignupFormSchema}
            validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (        
            <>
                <View style={[styles.inputField,
                {
                    borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'
                    
                }   
                ]}>
                    <TextInput
                    placeholderTextColor='#444'
                    placeholder='Phone number, username, email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    values={values.email}
                />          
                </View>
                <View style={[styles.inputField,
                {
                    borderColor: 1 > values.username.length || values.username.length >= 2 ? '#ccc' : 'red'
                    
                }
                ]}>
                    <TextInput
                    placeholderTextColor='#444'
                    placeholder='Username'
                    autoCapitalize='none'
                    textContentType='username'
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    values={values.username}
                />          
                </View>
                <View style={[styles.inputField,
                {
                    borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red'
                }
                
                ]}>
                    <TextInput
                    placeholderTextColor='#444'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    values={values.password}
                />
                </View>
            
                <Pressable
                 titleSize={20} 
                 style={styles.button(isValid)} 
                 onPress={handleSubmit}
                 disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <View style={styles.signupContainer}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color:'#6BB0F5'}}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </> 
            )}
            </Formik>
        </View>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        marginTop:80
    },
    inputField:{
        borderRadius:4,
        padding:12,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1
    },
    button:(isValid)=>({
        backgroundColor:isValid ?'#0096F6' :'#9ACAF7', 
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4
    }),
    buttonText:{
        fontWeight:'600',
        color:'#fff',
        fontSize:20
    },
    signupContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:50
    }
})

export default SignupForm
