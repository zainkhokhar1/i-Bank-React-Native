import { Text, ScrollView, Image } from 'react-native'
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from '../components/Home/Card';
import CategoryCard from '../components/Home/CategoryCard';

const Home = () => {

    const data = [
        {
            text: 'Account and Card',
            url: {
                img: require('../../assets/one-card.png')
            }
        },
        {
            text: 'Transfer',
            url: {
                img: require('../../assets/second-card.png')
            },
        },
        {
            text: 'Withdraw',
            url: {
                img: require('../../assets/third-card.png')
            },
        },
        {
            text: 'Mobile prepaid',
            url: {
                img: require('../../assets/fourth-card.png')
            },
        },
        {
            text: 'Pay the bill',
            url: {
                img: require('../../assets/fifth-card.png')
            },
        },
        {
            text: 'Save online',
            url: {
                img: require('../../assets/sixth-card.png')
            },
        },
        {
            text: 'Credit card',
            url: {
                img: require('../../assets/seventh-card.png')
            },
        },
        {
            text: 'Transaction report',
            url: {
                img: require('../../assets/eight-card.png')
            },
        },
        {
            text: 'Beneficiary',
            url: {
                img: require('../../assets/nine-card.png')
            },
        },

    ]
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

            {/* Container to show the main content. */}
            <ScrollView className="bg-white flex-1 rounded-tl-[30px] rounded-tr-[30px] px-6 mt-6">

                {/* Card to show */}
                <Card />

                {/* Container to show the categories */}
                <View className="flex-wrap flex-row flex-1 gap-3">
                    {
                        data.map((singleCard, index) => {
                            return <CategoryCard
                                key={singleCard.text + index}
                                text={singleCard.text} url={singleCard.url.img} />
                        })
                    }
                </View>

            </ScrollView>

        </View>
    )
}

export default Home;