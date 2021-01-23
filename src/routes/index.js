import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../pages/Home";
import StepOne from "../pages/StepOne";
import StepTwo from '../pages/StepTwo';
import StepThree from '../pages/StepThree';
import StepFour from '../pages/StepFour';


const Stack = createStackNavigator();

function Routes(){
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='7 Passos' component={Home}/>
            <Stack.Screen name="1º Passo" component={StepOne}/>
            <Stack.Screen name="2º Passo" component={StepTwo}/>
            <Stack.Screen name="3º Passo" component={StepThree}/>
            <Stack.Screen name="4º Passo" component={StepFour}/>


        </Stack.Navigator>
    </NavigationContainer>
)

}
export default Routes;