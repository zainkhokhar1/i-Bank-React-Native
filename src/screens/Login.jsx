
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';

import Toast from 'react-native-root-toast';


const Login = () => {
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const [hide, setHide] = useState(true);
    const [data, setData] = useState({ email: '', password: '' });
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    }, []);

    const handleInputs = (field, text) => {
        setData(prevData => ({ ...prevData, [field]: text }));
    };

    const handleSubmitData = () => {
        if (!(data.email && data.password)) return;
        navigation.navigate('Home');
    };

    const handleBioMetricAuth = async () => {
        // const hasHardware = await LocalAuthentication.hasHardwareAsync();
        if (!isBiometricSupported) {
            Toast.show('Biometric not supported on this device', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
            });
            return;
        }

        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if (!isEnrolled) {
            Toast.show('No biometric record found', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
            });
            return;
        }

        const biometricAuth = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login to iBank with biometrics",
            disableDeviceFallback: true,
        });

        if (biometricAuth.success) {
            navigation.navigate('Home');
            Toast.show('Authentication Successfull', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
            });
        } else {
            Toast.show('Authentication failed', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
            });
        }
    };

    return (
        <View className="bg-[#3629B7] flex-1 pt-10">
            <View className="h-10 flex flex-row w-full items-center gap-4 px-6 mb-4">
                <Fontisto name="angle-left" size={16} color="white" onPress={() => navigation.goBack()} />
                <Text className="semibold text-white text-xl">Sign in</Text>
            </View>

            <ScrollView className="bg-white flex-1 rounded-tl-[30px] rounded-tr-[30px]">
                <View className="pt-6 pl-6">
                    <Text className="text-[#3629B7] font-semibold text-2xl leading-7">Welcome Back</Text>
                    <Text className="text-[#343434] font-medium leading-4 text-sm pt-1">
                        Hello there, sign in to continue
                    </Text>
                </View>

                <View className="w-fit mx-20 my-10 items-center">
                    <Image
                        source={require('../../assets/login-image.png')}
                        className="object-contain w-[220px] h-[170px]"
                    />
                </View>

                <View className="flex-1 px-6 ">
                    <View className="gap-5">
                        <TextInput
                            inputMode="email"
                            value={data.email}
                            onChangeText={(text) => handleInputs('email', text)}
                            placeholderTextColor="#CACACA"
                            className="text-medium text-base border-[#CBCBCB] border-[1px] h-14 w-full rounded-2xl px-3 caret-[#343434]"
                            placeholder="Enter Email"
                        />
                        <View className="relative w-full h-auto border-[#CBCBCB] border-[1px] rounded-2xl">
                            <TextInput
                                value={data.password}
                                onChangeText={(text) => handleInputs('password', text)}
                                secureTextEntry={hide}
                                autoCorrect={false}
                                autoCapitalize="none"
                                placeholderTextColor="#CACACA"
                                className="text-base h-14 w-10/12 px-3 caret-[#343434]"
                                placeholder="Enter Password"
                            />
                            <Feather
                                name={hide ? 'eye-off' : 'eye'}
                                className="absolute right-[15px] top-[14px]"
                                size={22}
                                color="#B4B4BC"
                                onPress={() => setHide(!hide)}
                            />
                        </View>
                    </View>

                    <Text
                        className="text-[#3629B7]/80 font-medium text-sm pt-2 text-right"
                        onPress={() => navigation.navigate('EnterNumber')}
                    >
                        Forgot your password ?
                    </Text>

                    <TouchableOpacity
                        disabled={!(data.email && data.password)}
                        onPress={handleSubmitData}
                        activeOpacity={data.email && data.password ? 0.8 : 1}
                        className={`${data.email && data.password ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'} flex items-center justify-center w-full h-[46px] rounded-2xl mt-10 mb-6`}
                    >
                        <Text className="font-medium text-base text-white leading-6">Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-fit items-center" onPress={handleBioMetricAuth}>
                        <Image
                            source={require('../../assets/Fingerprint.png')}
                            className="object-contain w-[64px] h-[64px]"
                        />
                    </TouchableOpacity>

                    <View className="flex items-center justify-center flex-row gap-[11px] mt-6 mb-12">
                        <Text className="text-sm text-[#343434]">Don't have an account?</Text>
                        <Text
                            className="text-[#3629B7] font-semibold text-sm leading-4"
                            onPress={() => navigation.navigate('Signup')}
                        >
                            Sign Up
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Login;
