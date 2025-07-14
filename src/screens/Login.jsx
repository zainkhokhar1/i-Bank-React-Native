import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { ScrollView } from 'react-native';

const Login = () => {

    const [hide, setHide] = useState(true);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleInputs = (field, text) => {
        setData(prevData => (
            {
                ...prevData,
                [field]: text
            }
        ));
    }

    const handleSubmitData = () => {
        if (!(data.email && data.password)) return;
        alert(JSON.stringify(data));
    }

    return (
        <View
            className="bg-[#3629B7] flex-1 pt-10"
        >

            {/* Return and title btn */}
            <View className="h-10 flex flex-row w-full items-center gap-4 px-6 mb-4">
                <Fontisto name="angle-left" size={16} color="white" />
                <Text className="semibold text-white text-xl">
                    Sign in
                </Text>
            </View>

            {/* Main container */}

            <ScrollView className="bg-white flex-1 rounded-tl-[30px] rounded-tr-[30px]">

                {/* Inner container */}
                <View className="pt-6 pl-6">
                    <Text className="text-[#3629B7] font-semibold text-2xl leading-7">
                        Welcome Back
                    </Text>

                    <Text className="text-[#343434] font-medium leading-4 text-sm pt-1">
                        Hello there, sign in to continue
                    </Text>

                </View>

                {/* Illustration container */}
                <View className="w-fit mx-20 my-10 items-center">
                    <Image
                        source={require('../../assets/login-image.png')}
                        className="object-contain w-[220px] h-[170px]"
                    />
                </View>

                {/* Input fields container */}
                <View className="flex-1 px-6 ">

                    <View className="gap-5">

                        <TextInput inputMode='email'
                            value={data.email}
                            onChangeText={(text) => { handleInputs('email', text) }}
                            placeholderTextColor={'#CACACA'}
                            className=" text-medium text-base border-[#CBCBCB] border-[1px] h-14 w-full rounded-2xl px-3"
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
                                className="text-base h-14 w-10/12 px-3"
                                placeholder='Enter Password'
                            />
                            {/* icon shown here */}

                            <Feather name={hide ? 'eye-off' : 'eye'}
                                className="absolute right-[15px] top-[14px]"
                                size={22} color='#B4B4BC'
                                onPress={() => setHide(!hide)}
                            />
                        </View>

                    </View>

                    <Text
                        style={{ textAlign: 'right' }} //because nativeWind not working for this one
                        className="text-[#CACACA] font-medium text-sm pt-1">
                        Forgot your password ?
                    </Text>

                    {/* Sign in btn */}
                    <TouchableOpacity
                        onPress={handleSubmitData}
                        activeOpacity={data.email && data.password ? 0.8 : 1}
                        className={`${data.email && data.password ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'} flex items-center justify-center w-full h-[46px] rounded-2xl mt-10 mb-6`}>
                        < Text className="font-medium text-base text-white leading-6">
                            Sign in
                        </Text>
                    </TouchableOpacity>

                    {/* FingerPrint container */}
                    <View className="w-fit items-center">
                        <Image
                            source={require('../../assets/Fingerprint.png')}
                            className="object-contain w-[64px] h-[64px]"
                        />
                    </View>

                    {/* Signup Container */}
                    <View className="flex items-center justify-center flex-row gap-[11px] mt-6 mb-12">
                        <Text className="text-sm text-[#343434]">
                            Don't have an account?
                        </Text>
                        <Text className="text-[#3629B7] font-semibold text-sm leading-4">
                            Sign Up
                        </Text>
                    </View>

                </View>



            </ScrollView>

        </View >
    )
}

export default Login;