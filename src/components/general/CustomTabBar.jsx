
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomTabBar({ state, descriptors, navigation }) {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                paddingBottom: insets.bottom,
                height: 58 + insets.bottom,
            }}
            className="flex-row bg-white gap-10 px-3 border-t-[2px] border-transparent border-t-[#ccc]"
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                // Icon mapping by route name
                const iconMap = {
                    Home: { library: Ionicons, name: isFocused ? 'home' : 'home-outline' },
                    Search: { library: Ionicons, name: isFocused ? 'search' : 'search-outline' },
                    Message: { library: AntDesign, name: 'mail' },
                    Profile: { library: Ionicons, name: isFocused ? 'person' : 'person-outline' },
                    Settings: { library: Ionicons, name: isFocused ? 'settings' : 'settings-outline' },
                };

                const iconConfig = iconMap[route.name] || {};
                const IconComponent = iconConfig.library || Ionicons;
                const iconName = iconConfig.name || 'help';

                return (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={route.key}
                        accessibilityRole="button"
                        onPress={onPress}
                        className={`flex-row justify-center px-3 h-11 items-center gap-2 ${isFocused ? 'bg-[#3629B7]' : ''
                            } mt-4 rounded-full`}
                    >
                        <IconComponent
                            name={iconName}
                            size={isFocused ? 20 : 24}
                            color={isFocused ? '#fff' : '#898989'}
                        />

                        {isFocused && (
                            <Text
                                style={{
                                    color: '#fff',
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 12,
                                    lineHeight: 16,
                                }}
                            >
                                {label}
                            </Text>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
