import React,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo-no-bg.png';
import CustomInput from '../../components/custominput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
const SingIn = () =>{
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSingIn  = () => {
        console.warn("Sing In");
    }
    const onForgotPassword  = () => {
        console.warn("ForgotPasswordPressed");
    }

    const onSingInFacebook  = () => {
        console.warn("onSingInFacebook");
    }
    const onSingInGoogle  = () => {
        console.warn("onSingInGoogle");
    }
    const onSingInApple  = () => {
        console.warn("onSingInApple");
    }
    const onSingUp  = () => {
        console.warn("Sing Up");
    }
return(
    <ScrollView showsVerticalScrollIndicator={true}>
    <View style = {styles.root}>
        <Image source={Logo} style ={[styles.logo,{height:height * 0.5}]} resizeMode='contain'></Image>


        <CustomInput placeholder="Username" value  = {username} setValue={setUsername}/>
        <CustomInput 
        placeholder="Password" 
        value  = {password} 
        setValue={setPassword} 
        secureTextEntry // same that secureTextEntry = {true}
        />
        <CustomButton text = "Sing in" onPress={onSingIn}/>
        <CustomButton text = "Forgot password?" onPress={onForgotPassword} type  ={"TERTIARY"}/>
        <CustomButton text = "Sing in with Facebook" onPress={onSingInFacebook} bgColor={"#E7EAF4"} fgColor={"#4765A9"}/>
        <CustomButton text = "Sing in with Google" onPress={onSingInGoogle} bgColor={"#FAE9EA"} fgColor={"#DD4D44"}/>
        <CustomButton text = "Sing in with Apple" onPress={onSingInApple} bgColor={"#e3e3e3"} fgColor={"#363636"}/>
        <CustomButton text = "Don't have an account? Create one" onPress={onSingUp} type  ={"TERTIARY"}/>
    </View> 
    </ScrollView>
)
}

const  styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },


    logo: {
        width: '70%',
        maxHeight: 350,
        maxWidth: 300,
    }
})
export default SingIn;