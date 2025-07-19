import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { styles } from '../../../style';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';

const currencyOptions = [
    { code: 'VND', name: 'Vietnamese Dong' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'USD', name: 'US Dollar' },
    { code: 'TWD', name: 'Taiwan Dollar' },
    { code: 'JMD', name: 'Jamaican Dollar' },
];


const InputContainer = () => {
    const [data, setData] = useState({
        from: '',
        to: '',
    });

    const [selectedCurrency, setSelectedCurrency] = useState({
        from: 'USD',
        to: 'USD'
    });

    const [modalVisible, setModalVisible] = useState(
        {
            from: false,
            to: false
        }
    );

    const handleSubmitData = () => {
        alert(JSON.stringify(data));
    }

    const handleChangeInput = (type, text) => {

        setData((prevData) => ({ ...prevData, [type]: text }))
    }

    // show popup function
    const handleShow = (type, value) => {
        setModalVisible((prev) => ({
            ...prev,
            [type]: value,
            selected: selectedCurrency[type],
        }));
    };

    return (
        <View className="pt-8 px-6 flex-1">

            {/* Shadow container */}
            <View
                style={styles.shadow}
                className="rounded-[30px] bg-white h-auto px-4 pt-6 pb-5 "
            >
                {/* Input one */}
                <View
                    className="h-12 w-full"
                >
                    <Text className="text-[#979797] font-semibold leading-4 text-sm mb-1">
                        From
                    </Text>

                    <View className="border border-[#BFBFBF] rounded-2xl px-3 placeholder:text-sm placeholder:font-medium placeholder:leading-[150%] flex-row">

                        <TextInput
                            onChangeText={(text) => { handleChangeInput('from', text) }}
                            placeholder='Amount'
                            className="w-8/12 caret-[#3629B7]"
                            keyboardType='numeric'
                        />

                        {/* User press here to change the currency */}
                        <TouchableOpacity
                            onPress={() => handleShow('from', !(modalVisible.from))}
                            activeOpacity={data.from ? 0.7 : 1}
                            className='flex-row items-center gap-4'>
                            <Text className="w-px h-11/12 my-auto  bg-[#BFBFBF]"></Text>
                            <Text className={`${data.from ? 'text-[#343434]' : 'text-[#CACACA]'} font-medium leading-6  `}>
                                {
                                    selectedCurrency.from
                                }
                            </Text>
                            <View className="ml-1">
                                <SimpleLineIcons name="arrow-up" size={14} color="#898989" />
                                <SimpleLineIcons name="arrow-down" size={14} color="#898989" />
                            </View>

                        </TouchableOpacity>

                    </View>
                </View>

                <View className="flex-row items-center justify-center w-full pt-10">
                    <Ionicons name="arrow-up" size={26} color="#3629B7" />
                    <Ionicons name="arrow-down" size={26} color="#FF4267" />
                </View>

                {/* input two */}
                <View
                    className="h-12 w-full"
                >
                    <Text className="text-[#979797] font-semibold leading-4 text-sm mb-1">
                        To
                    </Text>

                    <View className="border border-[#BFBFBF] rounded-2xl px-3 placeholder:text-sm placeholder:font-medium placeholder:leading-[150%] flex-row">

                        <TextInput
                            onChangeText={(text) => { handleChangeInput('to', text) }}
                            placeholder='Amount'
                            className="w-8/12 caret-[#3629B7]"
                            keyboardType='numeric'
                        />

                        <TouchableOpacity
                            onPress={() => handleShow('to', !(modalVisible.to))}
                            activeOpacity={data.to ? 0.7 : 1}
                            className='flex-row items-center gap-4'>
                            <Text className="w-px h-11/12 my-auto  bg-[#BFBFBF]"></Text>
                            <Text className={`${data.to ? 'text-[#343434]' : 'text-[#CACACA]'} font-medium leading-6  `}>
                                {
                                    selectedCurrency.to
                                }
                            </Text>
                            <View className="ml-1">
                                <SimpleLineIcons name="arrow-up" size={14} color="#898989" />
                                <SimpleLineIcons name="arrow-down" size={14} color="#898989" />
                            </View>

                        </TouchableOpacity>

                    </View>
                </View>

                {/* current curreny rate container */}
                {
                    (selectedCurrency.from && selectedCurrency.to) && <View className="flex-row w-full items-center justify-between pt-8">
                        <Text className="text-[#3629B7] text-sm font-medium leading-[150%]">
                            Currency rate
                        </Text>
                        <Text className="text-[#343434] font-medium text-sm leading-[150%]">
                            1 {selectedCurrency.from} = 10 {selectedCurrency.to}
                        </Text>
                    </View>
                }

                <TouchableOpacity
                    disabled={!(data.from && data.to)}
                    onPress={handleSubmitData}
                    activeOpacity={data.from && data.to ? 0.8 : 1}
                    className={`${data.from && data.to ? 'bg-[#3629B7]' : 'bg-[#F2F1F9]'} flex items-center justify-center w-full h-[46px] rounded-2xl mt-12`}>
                    <Text className="font-medium text-base text-white leading-6">
                        Exchange
                    </Text>
                </TouchableOpacity>
            </View>

            {/* modal for the from */}
            {
                modalVisible.from && <CustomModal setSelectedCurrency={setSelectedCurrency} setModalVisible={setModalVisible} modalVisible={modalVisible} type={"from"} />
            }

            {/* modal for the to */}
            {
                modalVisible.to && <CustomModal setSelectedCurrency={setSelectedCurrency} setModalVisible={setModalVisible} modalVisible={modalVisible} type={"to"} />
            }

        </View>
    )
};

const CustomModal = ({ setSelectedCurrency, type, setModalVisible, modalVisible }) => {
    const handleSelect = (item) => {
        setSelectedCurrency((prev) => ({
            ...prev,
            [type]: item.code,
        }));
        setModalVisible((prev) => ({
            ...prev,
            [type]: false,
        }));
    };

    return (
        <Modal
            visible={modalVisible[type]}
            animationType="fade"
            transparent={true}
            onRequestClose={() =>
                setModalVisible((prev) => ({
                    ...prev,
                    [type]: false,
                }))
            }
        >
            {/* Dimmed background */}
            <View className="flex-1 bg-[#797979]/50 relative items-center justify-center">
                {/* Modal box */}
                <View className="bg-white rounded-2xl absolute p-6 h-[280px] w-[340px]">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-[#343434] font-semibold mx-auto leading-6">Select the currency</Text>
                        <Pressable
                            onPress={() =>
                                setModalVisible((prev) => ({
                                    ...prev,
                                    [type]: false,
                                }))
                            }
                        >
                            <Ionicons name="close" size={20} color="#898989" />
                        </Pressable>
                    </View>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={currencyOptions}
                        keyExtractor={(item) => item.code}
                        renderItem={({ item }) => {
                            const isSelected = modalVisible.selected === item.code;
                            return (
                                <Pressable
                                    onPress={() => handleSelect(item)}
                                    className="flex-row justify-between items-center py-3"
                                >
                                    <Text className={`text-base ${isSelected ? 'text-[#3629B7] font-semibold ' : 'text-[#343434] font-medium'} leading-6`}>
                                        {item.code} ( {item.name} )
                                    </Text>
                                    {isSelected && <Ionicons name="checkmark" size={18} color="#3629B7" />}
                                </Pressable>
                            );
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
};




export default InputContainer;