import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../pages/Home";
import StepOne from "../pages/StepOne";
import StepTwo from '../pages/StepTwo';
import StepThree from '../pages/StepThree';
import StepFour from '../pages/StepFour';
import StepFive from '../pages/StepFive';
import StepSix from '../pages/StepSix';
import StepSeven from '../pages/StepSeven';


const Stack = createStackNavigator();

function Routes() {
    const styles = {
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={ styles} name='7 Passos' component={Home} />
                <Stack.Screen options={ styles} name="1º Passo" component={StepOne} />
                <Stack.Screen options={ styles} name="2º Passo" component={StepTwo} />
                <Stack.Screen options={ styles} name="3º Passo" component={StepThree} />
                <Stack.Screen options={ styles} name="4º Passo" component={StepFour} />
                <Stack.Screen options={ styles} name="5º Passo" component={StepFive} />
                <Stack.Screen options={ styles} name="6º Passo" component={StepSix} />
                <Stack.Screen options={ styles} name="7º Passo" component={StepSeven} />

            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Routes;