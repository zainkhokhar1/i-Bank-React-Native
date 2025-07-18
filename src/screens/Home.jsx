import { Text, ScrollView, Image } from 'react-native'
import { View } from 'react-native';
import Card from '../components/Home/Card';
import CategoryCard from '../components/Home/CategoryCard';
import HomeProfile from '../components/Home/HomeProfile';

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
            <HomeProfile />

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