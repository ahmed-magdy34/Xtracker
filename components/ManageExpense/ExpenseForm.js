import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useContext, useState } from "react";
import Button from "../UI/Button";
import { ExpensesContext } from "../../store/expeses-constext";
import { getFormattedDate } from "../../uti/date";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm=({onCancel,onSubmit,submitButtonLabel,defaultValue})=>{
    const[inputs,setInputs]=useState({
        amount:{value:defaultValue? defaultValue.amount.toString():'',isValid:true},
        date:{value:defaultValue? getFormattedDate(defaultValue.date):'',isValid:true},
        description:{ value:defaultValue? defaultValue.description:'',isValid:true}
    })
    //////////////////////////////////
    const inputChangeHandler=(inputIdentifier,enteredValue)=>{
        setInputs((curInputs)=>{
            return{
                ...curInputs,
                [inputIdentifier]:{value:enteredValue,isValid:true}
            };
        })

    }

    const submitHandler=()=>{
        const expenseData={
            amount: +inputs.amount.value,
            date:new Date(inputs.date.value),
            description:inputs.description.value
        };
        const amountValid=!isNaN(expenseData.amount)&&expenseData.amount>0;
        const dateValid=expenseData.date.toString()!=='Invalid Date';
        const descriptionValid=expenseData.description.trim().length>0;
        if(!amountValid||!dateValid||!descriptionValid){
            setInputs((curInputs)=>{
                return{
                    amount:{value:curInputs.amount.value,isValid:amountValid},
                    date:{value:curInputs.date.value,isValid:dateValid},
                    description:{value:curInputs.description.value,isValid:descriptionValid}


                }
            })
            return;
        }
        onSubmit(expenseData)
       

    };
    const formIsInvalid=!inputs.amount.isValid||!inputs.date.isValid||!inputs.description.isValid;

    return(
        <View style={styles.container}>
            <Text style={styles.title}> YOUR EXPENSE</Text>
            <View style={styles.innerContainer}>
            <Input style={styles.rowInput} label='Amount' invalid={!inputs.amount.isValid} textInputConfig={{
               
               keyboardType:'decimal-pad',
               onChangeText:inputChangeHandler.bind(this,'amount'),
               value:inputs.amount.value,
               
           }} />
            <Input label='Date'
            invalid={!inputs.date.isValid}
             textInputConfig={{
               placeholder:'YYYY-MM-DD',
               maxLength:10,
               keyboardType:'decimal-pad',
               onChangeText:inputChangeHandler.bind(this,'date'),
               value:inputs.date.value,
               

               
           }} style={styles.rowInput}/>

            </View>
          
             <Input label='Description'   invalid={!inputs.description.isValid}  textInputConfig={{
                multiline: true,
                onChangeText:inputChangeHandler.bind(this,'description'),
                value:inputs.description.value
                
            }}/>
            {formIsInvalid?<Text style={styles.errorText}>Invalid Inputs</Text>:null}
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                    </Button>
            </View>
        </View>
    )

};
const styles=StyleSheet.create({
    container:{
        marginTop:32
      
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    rowInput:{
        flex:1
    },
    title:{
        fontSize:24,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:24
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        minWidth:120,
        marginHorizontal:8
    },
    errorText:{
        textAlign:'center',
        color:GlobalStyles.colors.error500,
        margin:8,
        fontSize:16,
        fontWeight:'bold'
    }
    
})

export default ExpenseForm;