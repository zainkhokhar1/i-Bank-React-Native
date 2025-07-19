import { View, Text } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import TopBar from '../../components/general/TopBar';
import Container from '../../components/exchange/Container';

const Exchange = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 pt-10">

      {/* Return and title btn */}
      <TopBar
        text={'Exchange'}
        textColor={'text-[#343434]'}
        iconColor={'#3434334'}
      />

      <Container />

    </View>
  )
}

export default Exchange;