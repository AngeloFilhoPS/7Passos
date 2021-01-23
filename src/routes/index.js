import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../pages/Home";
import StepOne from "../pages/StepOne";


const Stack = createStackNavigator();

function Routes(){
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='7 Passos' component={Home}/>
            <Stack.Screen name="Passo 1" component={StepOne}/>
        </Stack.Navigator>
    </NavigationContainer>
)

}
export default Routes;