import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

const EnterNewPassword = () => {
  const [hide, setHide] = useState({
    one: true,
    two: true
  });

  const [data, setData] = useState({
    passwordOne: '',
    passwordTwo: ''
  });

  const handleInputs = (field, text) => {
    setData(prevData => ({
      ...prevData,
      [field]: text
    }));
  };

  const handleHide = (field, boolVal) => {
    setHide(prevData => ({
      ...prevData,
      [field]: boolVal
    }));
  };

  const handleSubmitData = () => {
    ((data.passwordOne.length === data.passwordTwo.length) && data.passwordOne !== '')
    alert(JSON.stringify(data));
  };


  return (
    <View className="flex-1 pt-10 px-6">

      {/* Header */}
      <View className="h-13 w-full flex-row items-center justify-start pt-3">
        <Fontisto name="angle-left" size={16} color="#343434" />
        <Text className="font-semibold text-xl leading-7 pl-4 text-[#343434]">Change password</Text>
      </View>

      {/* Card section for new password */}
      <View className=" w-full min-h-[240px] max-h-fit rounded-2xl border border-transparent p-4 mt-6"
        style={{
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.05,
          shadowRadius: 20,
          elevation: 2,
        }}>

        {/* Input fields container */}
        <View >

          <Text className="text-sm leading-4 font-semibold text-[#979797] pb-2">
            Type your phone number
          </Text>

          <View className="relative w-full h-auto border-[#CBCBCB] border-[1px] rounded-2xl">
            <TextInput
              value={data.passwordOne}
              onChangeText={(text) => { handleInputs('passwordOne', text) }}
              secureTextEntry={hide.one}
              autoCorrect={false}
              placeholderTextColor={'#CACACA'}
              autoCapitalize='none'
              className="text-sm font-semibold h-14 w-10/12 px-3 caret-[#343434] text-[#343434]"
              placeholder='Enter new Password'
            />
            <Feather name={hide.one ? 'eye-off' : 'eye'}
              className="absolute right-[15px] top-[14px]"
              size={22} color='#B4B4BC'
              onPress={() => { handleHide('one', !hide.one) }}
            />
          </View>

          <Text className="text-sm leading-4 font-semibold text-[#979797] pb-2 mt-5">
            Cofirm password
          </Text>
          <View className="relative w-full h-auto border-[#CBCBCB] border-[1px] rounded-2xl">
            <TextInput
              value={data.password}
              onChangeText={(text) => { handleInputs('passwordTwo', text) }}
              secureTextEntry={hide.two}
              autoCorrect={false}
              placeholderTextColor={'#CACACA'}
              autoCapitalize='none'
              className="text-sm font-semibold h-14 w-10/12 px-3 caret-[#343434] text-[#343434]"
              placeholder='Confirm new Password'
            />
            <Feather name={hide.two ? 'eye-off' : 'eye'}
              className="absolute right-[15px] top-[14px]"
              size={22} color='#B4B4BC'
              onPress={() => { handleHide('two', !hide.two) }}
            />
          </View>

          {/* Sign up btn */}
          <TouchableOpacity
            disabled={!((data.passwordOne.length === data.passwordTwo.length) && data.passwordOne != '')}
            onPress={handleSubmitData}
            activeOpacity={((data.passwordOne.length === data.passwordTwo.length) && data.passwordOne !== '') ? 0.8 : 1}
            className={`${((data.passwordOne.length === data.passwordTwo.length) && data.passwordOne !== '') ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'} flex items-center justify-center w-full h-[46px] rounded-2xl mt-16 mb-6`}>
            <Text className="font-medium text-base text-white leading-6">
              Change password
            </Text>
          </TouchableOpacity>

        </View>


      </View>
    </View>
  )
}

export default EnterNewPassword;