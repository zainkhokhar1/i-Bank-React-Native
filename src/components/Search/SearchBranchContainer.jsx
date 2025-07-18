import { View, Text, SafeAreaView } from 'react-native'
import { styles } from '../../../style';
import { TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import SingleBranchShow from './SingleBranchShow.jsx';
import { addresses } from '../../../data.js';

const SearchBranchContainer = () => {
  const [searchInput, setSearchInput] = useState('');
  const [address, setAddress] = useState(addresses);

  const handleInput = (text) => {
    setSearchInput(text);
  }

  useEffect(() => {
    // update the data shown accordingly
    let result = addresses.filter((single) => {
      return single.title.toLowerCase().includes(searchInput.toLocaleLowerCase())
    })
    setAddress(result)
  }, [searchInput])

  return (
    <SafeAreaView className="bg-white flex-1 rounded-tl-[30px] rounded-tr-[30px] p-6"
      style={styles.shadow}
    >

      {/* Search input for the Bank */}
      <View className="w-full flex-row items-center justify-between relative">

        <View
          className="flex-row items-center relative"
        >

          <Ionicons name='search-outline'
            className="absolute left-2"
            size={16}
            color={'#444444'} />
          <TextInput
            value={searchInput}
            onChangeText={handleInput}
            placeholderTextColor={'#898989'}
            className="caret-[#343434] pr-9 pl-8 h-12 rounded-2xl border border-[#BFBFBF] flex-1"
            placeholder='Search for Bank'
          />
        </View>

        {/* icon cross */}
        <Entypo name="cross" size={24} color="#D1D1D1"
          className="absolute right-2"
          onPress={() => setSearchInput('')}
        />

      </View>

      {/* Container to show the branches */}
      <FlatList
        className="mt-8 mb-7"
        data={address}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.name + item?.distance}
        renderItem={({ item }) => <SingleBranchShow item={item} />}
      />

    </SafeAreaView>
  )
}

export default SearchBranchContainer;