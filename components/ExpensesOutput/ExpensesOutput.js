import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";


const ExpensesOutput=({expenses,expensesPeriod,fallBackText})=>{
    let content= <Text style={styles.infoText}>{fallBackText}</Text>
    if(expenses.length >0){
        content= <ExpensesList expenses={expenses}/>
    }
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
           
          {content}

        </View>
    )

}


const styles=StyleSheet.create({
    container:{
        paddingHorizontal:24,
        backgroundColor:'white',
        flex:1,
        paddingTop:24,
        paddingBottom:0
    },
    infoText:{
        color:'white',
        fontSize:16,
        marginTop:32,
        textAlign:"center"
    }
})
export default ExpensesOutput;