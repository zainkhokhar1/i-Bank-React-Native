import { View } from 'react-native'
import TopBar from '../../components/general/TopBar';
import Container from '../../components/exchange-rate/Container';

const ExchangeRate = () => {
  return (
    <View className="flex-1 pt-10">

      {/* Return and title btn */}
      <TopBar text={'Exchange Rate'} />

      <Container />

    </View>
  )
}

export default ExchangeRate;