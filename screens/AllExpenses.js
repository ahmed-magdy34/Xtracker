import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expeses-constext";

const AllExpenses=()=>{
    const expensesCtx=useContext(ExpensesContext)
    return(
        <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallBackText="NO Expenses yet!!"/>
    )

}
export default AllExpenses;