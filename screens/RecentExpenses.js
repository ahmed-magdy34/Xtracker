import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expeses-constext";
import { getDateMinusDays } from "../uti/date";

const RecentExpenses=()=>{
    const expensesCtx=useContext(ExpensesContext);
    const recentExpenses=expensesCtx.expenses.filter((expense)=>{
        const today=new Date();
        const date7DaysAgo=getDateMinusDays(today,7);
        return expense.date > date7DaysAgo;
    })
    return(
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="last 7 days" fallBackText="You haven't spent in a while!!"/>
    )

}
export default RecentExpenses;