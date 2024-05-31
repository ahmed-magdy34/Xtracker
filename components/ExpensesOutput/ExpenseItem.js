import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import {getFormattedDate} from "../../uti/date";
import { useNavigation } from "@react-navigation/native";
const ExpenseItem=({id,description,amount,date})=>{
    const navigation=useNavigation();
    const expensePressHandler=()=>{
        navigation.navigate('ManageExpenses',{
            expenseId : id
        })

    }
    return(
        <Pressable android_ripple={{color:'grey'}} onPress={expensePressHandler}>
            <View style={styles.expenseItem}>
                <View>
                <Text style={[styles.textBase,styles.description]}> {description}</Text>
               
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
               
                <View style={styles.amountContainer}>
                <Text style={styles.amount}> ${amount.toFixed(2)}</Text>
                </View>

            </View>
        </Pressable>
    )

}

const styles=StyleSheet.create({
    expenseItem:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500

    },
    textBase:{
        color:GlobalStyles.colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold',
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,


    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold',
    }
})


export default ExpenseItem;