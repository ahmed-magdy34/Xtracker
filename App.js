import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import { useNavigation } from '@react-navigation/native';
import ExpensesContextProvider from './store/expeses-constext';
const Stack=createNativeStackNavigator();
const BottomTabs=createBottomTabNavigator();

const ExpensesOverview=()=>{
  const navigation=useNavigation();

  const iconPress=()=>{
    navigation.navigate('ManageExpenses')
    
  }
  return<BottomTabs.Navigator screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.primary100,
    headerRight:({tintColor})=>(
      <IconButton icon="add" size={24} color={tintColor} onPress={iconPress}/>
    )

  }}> 
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
      title:'Recent Expenses',
      tabBarLabel:'Recent',
      tabBarIcon:({size,color})=><Ionicons name='hourglass' size={size} color="white"/>,
    }}/>
    <BottomTabs.Screen name='AllExpenses' component={AllExpenses} options={{
      title:'All Expenses',
      tabBarLabel:'All Expenses',
      tabBarIcon:({size,color})=><Ionicons name='calendar' size={size} color="white"/>
    }}/>
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
     
      <StatusBar style="light" />
      <ExpensesContextProvider>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
          headerTintColor:"white"
        }}>
          <Stack.Screen name='ExpensesOverView' component={ExpensesOverview} options={{headerShown:false}}/>
          <Stack.Screen name='ManageExpenses' component={ManageExpenses} options={{
            presentation:'modal'
          }}/>
        </Stack.Navigator>

      </NavigationContainer>
          </ExpensesContextProvider>

  
    </>
  );
}


