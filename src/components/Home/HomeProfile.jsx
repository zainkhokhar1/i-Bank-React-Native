import { View, Text, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeProfile = () => {
    return (
        <View className="flex-row items-center px-6 ">
            {/* profile container */}
            <View className="h-[50px] w-[50px] rounded-full overflow-hidden bg-white">
                <Image
                    source={
                        require('../../../assets/profile.jpg')
                    }
                    className="h-full w-full object-cover"
                />
            </View>

            {/* Welcome Text */}
            <Text className="pl-4 text-white text-base font-medium leading-6 pr-24">
                Hi, Muhammad
            </Text>

            {/* Icon container in the last */}
            <View className="flex-1 items-center justify-center relative">
                {/* icon */}
                <Ionicons name="notifications" size={28} color="white" />
                <Text className="absolute -top-[4px] right-[14px] w-[16px] h-[16px] text-center text-white  bg-[#FF4267] rounded-full text-[10px] font-medium leading-4">
                    3
                </Text>
            </View>
        </View>
    )
}

export default HomeProfile