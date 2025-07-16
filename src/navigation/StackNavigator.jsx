
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import EnterNumber from '../screens/forgot-password/EnterNumber';
import EnterCode from '../screens/forgot-password/EnterCode';
import EnterNewPassword from '../screens/change-password/EnterNewPassword';
import Success from '../screens/change-password/Success';
import TabNavigator from './TabNavigator.jsx';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="EnterNumber" component={EnterNumber} />
                <Stack.Screen name="EnterCode" component={EnterCode} />
                <Stack.Screen name="EnterNewPassword" component={EnterNewPassword} />
                <Stack.Screen name="Success" component={Success} />

                {/* Home using Tab Navigation */}
                <Stack.Screen name="Home" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
