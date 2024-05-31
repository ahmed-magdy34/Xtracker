import { createContext, useReducer } from "react";
const Dummy_Expenses=[
    {
        id:'e1',
        description:'A Pair Of Shoes',
        amount:59.99,
        date:new Date('2023-8-29')
    },
    {
        id:'e2',
        description:'A Pair Of Trousers',
        amount:89.59,
        date:new Date('2024-5-20')
    },
    {
        id:'e3',
        description:'New Laptop',
        amount:600.09,
        date:new Date('2024-2-1')
    },
    {
        id:'e4',
        description:'Harry Potter Book',
        amount:14.55,
        date:new Date('2024-2-12')
    },
    {
        id:'e5',
        description:'A Pair Of Socks',
        amount:2.50,
        date:new Date('2023-8-29')
    },
    {
        id:'e6',
        description:'Chinese Food',
        amount:12.60,
        date:new Date('2024-5-20')
    },
]

export const ExpensesContext=createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description,amount,date})=>{}
});
const expensesReducer=(state,action)=>{
    switch(action.type){
        case'ADD':
        const id=new Date().toString()+Math.random().toString();
        return[{...action.payload,id:id}, ...state]
        case 'DELETE':
           return state.filter((expense)=>expense.id!==action.payload)
        case 'UPDATE' :
            const updatableExpenseIndex=state.findIndex((expense)=>expense.id===action.payload.id);
            const updatableExpense=state[updatableExpenseIndex];
            const updatedItem={...updatableExpense,...action.payload.data};
            const updatedExpense=[...state];
            updatedExpense[updatableExpenseIndex]=updatedItem;
            return updatedExpense;
         default:
            return state;      
    }

}

const ExpensesContextProvider=({children})=>{
  const [expensesState,dispatch]   =useReducer(expensesReducer,Dummy_Expenses);
  const addExpense=(expenseData)=>{
    dispatch({type:'ADD',payload:expenseData})

  };
  const deleteExpense=(id)=>{
    dispatch({type:'DELETE',payload:id})
  };
  const updateExpense=(id,expenseData)=>{
    dispatch({type:'UPDATE',payload:{id:id,data:expenseData}})

  };
  const value={
    expenses:expensesState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense,
  }
    return<ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>

};
export default ExpensesContextProvider;