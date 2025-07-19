import { View, Text } from 'react-native'

const Header = () => {
    return (
        <View className="flex-row items-center justify-between w-full">
            <Text className="w-8/12 text-[#989898] text-base font-semibold leading-6">
                Country
            </Text>

            <View className="flex-row w-4/12 justify-between">
                <Text className="text-[#989898] text-base font-semibold leading-6">
                    Buy
                </Text>

                <Text className="text-[#989898] text-base font-semibold leading-6">
                    Sell
                </Text>
            </View>

        </View>
    )
}

export default Header;