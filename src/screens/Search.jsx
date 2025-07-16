import { View, Text, ScrollView } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Search/Card';

const Search = () => {
  const navigation = useNavigation();

  const data = [
    {
      text: 'Branch',
      url: {
        img: require('../../assets/images/Search/img-1.png')
      },
      para: 'Search for branch'
    },
    {
      text: 'Interest rate',
      url: {
        img: require('../../assets/images/Search/img-2.png')
      },
      para: 'Search for interest rate'
    },
    {
      text: 'Echange rate',
      url: {
        img: require('../../assets/images/Search/img-3.png')
      },
      para: 'Search for exchange rate'
    },
    {
      text: 'Exchange',
      url: {
        img: require('../../assets/images/Search/img-4.png')
      },
      para: 'Exchange amout of money'
    },
  ]

  return (
    <View className='flex-1 mt-10 bg-white'>
      {/* Return and title btn */}
      <View className="h-14 flex flex-row w-full items-center gap-4 px-6 mb-4">
        <Fontisto name="angle-left" size={16} color="#343434"
          onPress={() => navigation.goBack()}
        />
        <Text className="font-semibold leading-7 text-[#343434] text-xl">
          Sign Up
        </Text>
      </View>

      {/* Container to show the cards */}
      <ScrollView className="flex-1 p-6">
        {
          data.map((one, index) => (
            <Card
              key={one.text + index}
              text={one.text}
              para={one.para}
              url={one.url.img}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Search;