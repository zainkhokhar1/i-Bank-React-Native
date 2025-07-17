
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import EnterNumber from '../screens/forgot-password/EnterNumber';
import EnterCode from '../screens/forgot-password/EnterCode';
import EnterNewPassword from '../screens/change-password/EnterNewPassword';
import Success from '../screens/change-password/Success';
import TabNavigator from './TabNavigator.jsx';
import Exchange from '../screens/search/Exchange.jsx';
import InterestRate from '../screens/search/InterestRate.jsx';
import ExchangeRate from '../screens/search/ExchangeRate.jsx';
import SearchForBranch from '../screens/search/SearchForBranch.jsx';

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

                {/* Search screens */}
                <Stack.Screen name='Exchange' component={Exchange} />
                <Stack.Screen name='InterestRate' component={InterestRate} />
                <Stack.Screen name='ExchangeRate' component={ExchangeRate} />
                <Stack.Screen name='SearchForBranch' component={SearchForBranch} />

                {/* Home using Tab Navigation */}
                <Stack.Screen name="HomeStack" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
