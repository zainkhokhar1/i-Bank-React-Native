import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';


const EnterCode = ({ route }) => {
    const navigation = useNavigation();

    const { number } = route.params;

    const [code, setCode] = useState('');

    const handleCode = () => {
        if (code.length == 4)
            navigation.navigate('EnterNewPassword')
    }

    return (
        <View className="flex-1 pt-10 px-6">

            {/* Header */}
            <View className="h-13 w-full flex-row items-center justify-start pt-3">
                <Fontisto name="angle-left" size={16} color="#343434"
                    onPress={() => navigation.goBack()}
                />
                <Text className="font-semibold text-xl leading-7 pl-4 text-[#343434]">Forgot password</Text>
            </View>

            {/* White Card Container */}
            <View
                className=" w-full min-h-[240px] rounded-2xl border border-transparent p-4 mt-6"
                style={{
                    backgroundColor: 'white',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.05,
                    shadowRadius: 20,
                    elevation: 2,
                }}
            >
                {/* Label */}
                <Text className="text-sm leading-4 font-semibold text-[#979797] pb-4">
                    Type a code
                </Text>

                {/* Input + Resend */}
                <View className="flex-row items-center mb-4">
                    <TextInput
                        value={code}
                        maxLength={4}
                        keyboardType="number-pad"
                        onChangeText={(text) => setCode(text.replace(/[^0-9]/g, ''))}
                        className="flex-1 h-12 px-3 bg-[#FAFAFC] text-[#343434] text-sm font-medium rounded-2xl border border-[#CBCBCB] leading-[150%] caret-[#343434]"
                        placeholder="Code"
                        placeholderTextColor="#CACACA"
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className="ml-3 h-12 px-5 rounded-2xl bg-[#3629B7] justify-center items-center">
                        <Text className="text-white font-medium leading-[150%] text-sm">Resend</Text>
                    </TouchableOpacity>
                </View>

                {/* Info Paragraph */}
                <View className="flex-row mb-1 flex-wrap leading-[150%]">
                    <Text className="text-[#898989] text-sm font-medium leading-[150%]">
                        We texted you a code to verify your phone number
                    </Text>
                    <Text className="text-[#5655B9] ml-[0.5px] text-sm font-semibold leading-[150%]">(92) {number?.slice(2)}</Text>
                </View>

                <Text className="text-[#898989] text-sm font-medium leading-[150%]">
                    This code will expire 10 minutes after this message. If you don’t get a message.
                </Text>

                {/* Change Password Button */}
                <TouchableOpacity
                    onPress={handleCode}
                    disabled={code.length !== 4}
                    activeOpacity={code.length === 4 ? 0.8 : 1}
                    className={`mt-8 h-[46px] rounded-2xl justify-center items-center ${code.length === 4 ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'
                        }`}

                >
                    <Text className="text-white font-medium text-base leading-6">Change password</Text>
                </TouchableOpacity>
            </View>

            {/* Change phone number text */}
            <View className="items-center mt-[68px]">
                <Text className="text-[#3629B7] font-semibold text-sm">Change your phone number</Text>
            </View>
        </View>
    );
};

export default EnterCode;
