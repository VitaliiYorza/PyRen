import React from 'react';
import { Text, View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) =>{
return(
    <View style = {styles.container}>
        <TextInput 
        value = {value}
        onChangeText = {setValue}
        placeholder = {placeholder}
        style = {styles.input}
        secureTextEntry= {secureTextEntry}
        />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius:5,
        paddingHorizontal: 15,
        marginVertical: 5,
        justifyContent: 'center',
    },
    input:{
    },
})
export default CustomInput;