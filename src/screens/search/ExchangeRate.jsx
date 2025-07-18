import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import TopBar from '../../components/general/TopBar';

const ExchangeRate = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 pt-10">

      {/* Return and title btn */}
      <TopBar text={'Exchange Rate'} />

    </View>
  )
}

export default ExchangeRate;