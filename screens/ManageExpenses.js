import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expeses-constext";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpenses=({route,navigation})=>{
    //////////////////////////Variables////
    const expenseCtx= useContext(ExpensesContext);
    const editedExpenseId=route.params?.expenseId;
    const isEditing=!!editedExpenseId;
    const selectedExpense=expenseCtx.expenses.find((expense)=>expense.id===editedExpenseId)
    ////////////////////////////
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:isEditing ? 'Edit Expense':'Add Expense',
        })

    },[navigation,isEditing]);
    const deletePressHandler=()=>{
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    };
    const cancelHandler=()=>{
        navigation.goBack();

    };
    const confirmHandler=(expenseData)=>{
        if(isEditing){
            expenseCtx.updateExpense(editedExpenseId,expenseData);
        }else{
            expenseCtx.addExpense(expenseData);
        }
        navigation.goBack();

    };
   
    return(
       
       
        <View style={styles.container}>
             <ExpenseForm 
             submitButtonLabel={isEditing?"Update":"Add"} 
             onCancel={cancelHandler} 
             onSubmit={confirmHandler}
             defaultValue={selectedExpense}
             />
            
            {isEditing&&(
                <View style={styles.deleteContainer}>
            <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deletePressHandler}/>
            </View>
            )}
        </View>
    )

};

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:"grey"
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:'center'

    },
   
})

export default ManageExpenses;