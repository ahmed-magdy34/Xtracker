import { FlatList, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpenseItem from "./ExpenseItem";
const renderItem=(itemData)=>{
    return(
       <ExpenseItem {...itemData.item}/>
    )

}

const ExpensesList=({expenses})=>{
    return(
        <FlatList 
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}

        />
    )

}
const styles=StyleSheet.create({
    container:{
        justifyContent:'space-between',
       
        borderRadius:6,
        borderWidth:1,
        margin:16,
        alignItems:'center',
        backgroundColor:GlobalStyles.colors.primary50
    },
    text:{
        
        fontSize:16,
        padding:8
    }
})

export default ExpensesList;