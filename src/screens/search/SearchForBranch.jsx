import { View, Text, Image } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import Map from '../../components/Search/Map';

const SearchForBranch = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 pt-10">

      {/* Return and title btn */}
      <View className="h-14 flex flex-row w-full items-center gap-4 px-6 mb-4">
        <Fontisto name="angle-left" size={16} color="#343434"
          onPress={() => navigation.goBack()}
        />
        <Text className="font-semibold leading-7 text-[#343434] text-xl">
          Branch
        </Text>
      </View>

      {/* First container to show the map */}
      <View className="flex-1">
        <Map />
      </View>

    </View>
  )
}

export default SearchForBranch;