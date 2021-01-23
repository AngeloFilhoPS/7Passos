import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../pages/Home";
import StepOne from "../pages/StepOne";
import StepTwo from '../pages/StepTwo';


const Stack = createStackNavigator();

function Routes(){
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='7 Passos' component={Home}/>
            <Stack.Screen name="1º Passo" component={StepOne}/>
            <Stack.Screen name="2º Passo" component={StepTwo}/>

        </Stack.Navigator>
    </NavigationContainer>
)

}
export default Routes;