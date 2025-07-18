import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';
import TopBar from '../components/general/TopBar';

const Signup = () => {

    const navigation = useNavigation();


    const [isChecked, setIsChecked] = useState(false);
    const [hide, setHide] = useState(true);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputs = (field, text) => {
        setData(prevData => ({
            ...prevData,
            [field]: text
        }));
    };

    const handleSubmitData = () => {
        if (!(data.name && data.email && data.password && isChecked)) return;
        navigation.navigate('Home');
    };

    return (
        <View className="bg-[#3629B7] flex-1 pt-10">

            {/* Return and title btn */}
            <TopBar text={'Sign up'} iconColor={'white'} textColor={'text-[#fff]'} />

            {/* Main container */}
            <ScrollView className="bg-white flex-1 rounded-tl-[30px] rounded-tr-[30px]">
                {/* Inner container */}
                <View className="pt-6 pl-6">
                    <Text className="text-[#3629B7] font-semibold text-2xl leading-7">
                        Welcome to us,
                    </Text>
                    <Text className="text-[#343434] font-medium leading-4 text-sm pt-1">
                        Hello there, create New account
                    </Text>
                </View>

                {/* Illustration container */}
                <View className="w-fit mx-20 my-8 items-center">
                    <Image
                        source={require('../../assets/signup.png')}
                        className="object-contain w-[220px] h-[170px]"
                    />
                </View>

                {/* Input fields container */}
                <View className="flex-1 px-6 ">
                    <View className="gap-5">
                        <TextInput
                            value={data.name}
                            onChangeText={(text) => { handleInputs('name', text) }}
                            placeholderTextColor={'#CACACA'}
                            className="text-medium text-base border-[#CBCBCB] border-[1px] h-14 w-full rounded-2xl px-3 caret-[#343434]"
                            placeholder='Enter Name'
                        />
                        <TextInput
                            inputMode='email'
                            value={data.email}
                            onChangeText={(text) => { handleInputs('email', text) }}
                            placeholderTextColor={'#CACACA'}
                            className="text-medium text-base border-[#CBCBCB] border-[1px] h-14 w-full rounded-2xl px-3 caret-[#343434]"
                            placeholder='Enter Email'
                        />
                        <View className="relative w-full h-auto border-[#CBCBCB] border-[1px] rounded-2xl">
                            <TextInput
                                value={data.password}
                                onChangeText={(text) => { handleInputs('password', text) }}
                                secureTextEntry={hide}
                                autoCorrect={false}
                                placeholderTextColor={'#CACACA'}
                                autoCapitalize='none'
                                className="text-base h-14 w-10/12 px-3 caret-[#343434]"
                                placeholder='Enter Password'
                            />
                            <Feather name={hide ? 'eye-off' : 'eye'}
                                className="absolute right-[15px] top-[14px]"
                                size={22} color='#B4B4BC'
                                onPress={() => setHide(!hide)}
                            />
                        </View>

                        <View className="flex flex-row ">

                            {/* when checked  #3629B7 */}
                            <BouncyCheckbox
                                className="w-fit -mt-4 -mr-2"
                                iconImageStyle={{ borderColor: '#3629B7' }}
                                iconStyle={{
                                    borderRadius: 4,
                                    borderWidth: isChecked ? 3 : 1,
                                    borderColor: isChecked ? '#3629B7' : '#BFBFBF',
                                }}
                                innerIconStyle={{
                                    borderWidth: isChecked ? 3 : 1,
                                    borderRadius: 4,
                                    borderColor: isChecked ? '#3629B7' : '#BFBFBF',
                                }}
                                fillColor="#3629B7"
                                size={20}
                                onPress={(isChecked) => { setIsChecked(isChecked) }}
                            />
                            <View className="w-fit">
                                <Text className="text-[#343434] text-sm">
                                    By creating an account your agree
                                    to our
                                </Text>
                                <Text className="text-[#3629B7] font-semibold">
                                    Term and Condtions
                                </Text>
                            </View>
                        </View>

                    </View>

                    {/* Sign up btn */}
                    <TouchableOpacity
                        disabled={!(data.name && data.email && data.password)}
                        onPress={handleSubmitData}
                        activeOpacity={data.name && data.email && data.password && isChecked ? 0.8 : 1}
                        className={`${data.name && data.email && data.password && isChecked ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'} flex items-center justify-center w-full h-[46px] rounded-2xl mt-10 mb-6`}>
                        <Text className="font-medium text-base text-white leading-6">
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    {/* Login Container */}
                    <View className="flex items-center justify-center flex-row gap-[11px] mt-6 mb-12">
                        <Text className="text-sm text-[#343434]">
                            Have an account?
                        </Text>
                        <Text className="text-[#3629B7] font-semibold text-sm leading-4"
                            onPress={() => navigation.navigate('Login')}
                        >
                            Sign In
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Signup;