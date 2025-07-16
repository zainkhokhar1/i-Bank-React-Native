import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../style';

const EnterNumber = () => {

    const navigation = useNavigation();

    const [numberEntered, setNumberEntered] = useState('+92');

    return (
        <View className="flex-1 pt-10 px-6">

            {/* Header */}
            <View className="h-13 w-full flex-row items-center justify-start pt-3">
                <Fontisto name="angle-left" size={16} color="#343434"
                    onPress={() => navigation.goBack()}
                />
                <Text className="font-semibold text-xl leading-7 pl-4 text-[#343434]">Forgot password</Text>
            </View>

            {/* Input and button container */}
            <View className=" w-full min-h-[240px] bg-white rounded-2xl border border-transparent p-4 mt-6"
                style={styles.shadow}
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
                    className="border-[0.5px] text-[#343434] text-sm font-medium leading-[150%] border-[#E8E8E8] h-12 rounded-2xl bg-[#FAFAFC] px-3 caret-[#343434]"
                    placeholder='(+92)'
                    placeholderTextColor={'#CACACA'}
                />

                <Text className="text-[#343434] font-medium text-sm w-9/12 my-6 leading-[150%]">
                    We texted you a code to verify your phone number
                </Text>

                {/* Button */}

                <TouchableOpacity
                    disabled={!((numberEntered.length == 12) && (numberEntered.slice(0, 2) == '92'))}
                    activeOpacity={((numberEntered.length == 12) && (numberEntered.slice(0, 2) == '92')) ? 0.8 : 1}
                    className={`flex items-center justify-center w-full h-[46px] rounded-2xl ${((numberEntered.length == 12) && (numberEntered.slice(0, 2) == '92')) ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'}`}

                    onPress={() => navigation.navigate('EnterCode', { number: numberEntered })}
                >
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