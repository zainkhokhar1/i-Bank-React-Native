import { Text, ScrollView, Image } from 'react-native'
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from '../components/Home/Card';

const Home = () => {
    return (
        <View className="bg-[#3629B7] flex-1 pt-10">

            {/* Container for the profile section */}
            <View className="flex-row items-center px-6 ">
                {/* profile container */}
                <View className="h-[50px] w-[50px] rounded-full overflow-hidden bg-white">
                    <Image
                        source={
                            require('../../assets/profile.jpg')
                        }
                        className="h-full w-full object-cover"
                    />
                </View>

                {/* Welcome Text */}
                <Text className="pl-4 text-white text-base font-medium leading-6 pr-24">
                    Hi, Push Puttichai
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

            {/* Container to show the main content. */}
            <ScrollView className="bg-white flex-1 rounded-tl-[30px] rounded-tr-[30px] px-6 mt-6">

                {/* Card to show */}
                <Card />

            </ScrollView>

        </View>
    )
}

export default Home;