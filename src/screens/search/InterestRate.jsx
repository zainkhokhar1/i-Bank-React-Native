import { View, Text } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Interest-rate/Container';
import TopBar from '../../components/general/TopBar';

const InterestRate = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 pt-10">

      {/* Return and title btn */}
      <TopBar
        text={'Interest rate'}
        textColor={'text-[#343434]'}
        iconColor={'#343434'}
      />

      <Container />

    </View>
  )
}

export default InterestRate;