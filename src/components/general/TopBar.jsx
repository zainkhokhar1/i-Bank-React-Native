import { View, Text } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native'

const TopBar = ({ text, textColor, iconColor }) => {
    const navigation = useNavigation();
    return (
        <View className="h-14 flex flex-row w-full items-center gap-4 px-6 mb-4">
            <Fontisto name="angle-left" size={16} color={iconColor}
                onPress={() => navigation.goBack()}
            />
            <Text className={`font-semibold leading-7 ${textColor} text-xl`}>
                {
                    text
                }
            </Text>
        </View>
    )
}

export default TopBar;