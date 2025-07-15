import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState } from 'react';

const EnterNumber = () => {

    const [numberEntered, setNumberEntered] = useState('+92');

    return (
        <View className="pt-10 px-6">

            {/* go back container */}
            <View className="h-13 w-full flex-row items-center justify-start pt-3">
                <Fontisto name="angle-left" size={16} color="#343434" />
                <Text className="font-semibold text-xl leading-7 pl-4 text-[#343434]">Forgot password</Text>
            </View>

            {/* Input and button container */}
            <View className=" w-full min-h-[240px] rounded-2xl border border-transparent p-4 mt-6"
                style={{
                    shadowColor: 'rgba(54, 41, 183, 0.1)',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 20,
                    elevation: 5,
                }}
            >
                <Text className="text-sm leading-4 font-semibold text-[#979797] pb-4">
                    Type your phone number
                </Text>

                <TextInput
                    value={numberEntered}
                    keyboardType="number-pad"
                    onChangeText={(text) => {
                        const number = text.replace(/[^0-9]/g, '');
                        setNumberEntered(number);
                    }}
                    className="border-[0.5px] text-[#343434] text-sm font-medium leading-[150%] border-[#E8E8E8] h-12 rounded-2xl bg-[#FAFAFC] px-3"
                    placeholder='(+92)'
                    placeholderTextColor={'#CACACA'}
                />

                <Text className="text-[#343434] font-medium text-sm w-9/12 my-6 leading-[150%]">
                    We texted you a code to verify your phone number
                </Text>

                {/* Button */}

                <TouchableOpacity
                    activeOpacity={((numberEntered.length == 12) && (numberEntered.slice(0, 2) == '92')) ? 0.8 : 1}
                    className={`flex items-center justify-center w-full h-[46px] rounded-2xl ${((numberEntered.length == 12) && (numberEntered.slice(0, 2) == '92')) ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'}`}>
                    <Text className="font-medium text-base text-white leading-6">
                        Send
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
};

// 40

export default EnterNumber;