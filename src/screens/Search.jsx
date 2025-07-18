import { View, Text, ScrollView } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Search/Card';
import TopBar from '../components/general/TopBar';

const Search = () => {
  const navigation = useNavigation();

  const data = [
    {
      text: 'Branch',
      url: {
        img: require('../../assets/images/Search/img-1.png')
      },
      para: 'Search for branch',
      redirect: "SearchForBranch"
    },
    {
      text: 'Interest rate',
      url: {
        img: require('../../assets/images/Search/img-2.png')
      },
      para: 'Search for interest rate',
      redirect: "InterestRate"
    },
    {
      text: 'Echange rate',
      url: {
        img: require('../../assets/images/Search/img-3.png')
      },
      para: 'Search for exchange rate',
      redirect: "ExchangeRate"
    },
    {
      text: 'Exchange',
      url: {
        img: require('../../assets/images/Search/img-4.png')
      },
      para: 'Exchange amout of money',
      redirect: "Exchange"
    },
  ]

  return (
    <View className='flex-1 mt-10 bg-white'>
      {/* Return and title btn */}
      {/* Header */}
      <TopBar text={'Search'} textColor={'text-[#343434]'} iconColor={'#343434'} />

      {/* Container to show the cards */}
      <ScrollView className="flex-1 p-6">
        {
          data.map((one, index) => (
            <Card
              key={one.text + index}
              text={one.text}
              para={one.para}
              url={one.url.img}
              redirect={one.redirect}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Search;