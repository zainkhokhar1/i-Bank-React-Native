import { View, Image, Text, TouchableOpacity } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

const Success = () => {
    return (
        <View className="flex-1 pt-10 px-6 items-center justify-start">

            {/* Header */}
            <View className="h-13 w-full flex-row items-center justify-start pt-3">
                <Fontisto name="angle-left" className="pt-1" size={16} color="#343434" />
            </View>

            {/* Image container */}
            <View className="p-6 items-center justify-center pb-8">
                <Image
                    source={require('../../../assets/success-Password.png')}
                    className="object-contain w-[330px] h-[216px]"
                />
            </View>

            {/* Text and Button container */}
            <View className="flex-1">

                <Text className="text-[#3629B7] font-semibold text-lg leading-6 pb-6 text-center">
                    Change password successfully!
                </Text>

                <Text className="text-[#343434] text-sm font-medium leading-[150%] pb-8 text-center">
                    You have successfully change password.
                    Please use the new password when Sign in.
                </Text>

                {/* Ok btn */}
                <TouchableOpacity
                    activeOpacity={0.8}
                    className={`bg-[#3629B7] flex items-center justify-center min-w-full h-[46px] rounded-2xl mb-6`}>
                    <Text className="font-medium text-base text-white leading-6">
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Success;