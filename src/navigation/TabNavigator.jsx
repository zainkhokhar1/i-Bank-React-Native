import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

import Search from "../screens/Search";
import Message from "../screens/Message";
import Settings from "../screens/Settings";
import CustomTabBar from "../components/general/CustomTabBar";


// Create the tab navigator
const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animationEnabled: true
            }}
            // using custom tab bar
            tabBar={(props) => <CustomTabBar {...props} />}
        >

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Settings" component={Settings} />

        </Tab.Navigator>
    )
}