import { View, Text, Image } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import Map from '../../components/Search/Map';
import SearchBranchContainer from '../../components/Search/SearchBranchContainer';
import TopBar from '../../components/general/TopBar';

const SearchForBranch = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 pt-10">

      {/* Return and title btn */}
      <TopBar text={'Branch'} iconColor={'#343434'} textColor={'text-[#343434]'} />

      {/* First container to show the map */}
      <View className="flex-1">
        <Map />

        {/* Search for branch section */}
        <SearchBranchContainer />
      </View>

    </View>
  )
}

export default SearchForBranch;