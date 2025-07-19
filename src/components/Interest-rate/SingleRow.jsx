import { View, Text } from 'react-native';

const SingleRow = ({ item }) => {
    return (
        <View
            className="w-full h-9 flex-row border-b border-b-[#ECECEC] pb-3 mb-5"
        >
            <Text className="w-8/12 text-[#343434] text-base font-medium leading-6">
                {
                    item?.InterestKind
                }
            </Text>

            <View className="flex-row w-4/12 justify-between">
                <Text className="text-[#343434] text-base font-medium leading-6">
                    {
                        (item?.Deposit / 1000000).toString().slice(0, 4)
                    }m
                </Text>

                <Text className="text-[#3629B7] text-base font-medium leading-6">
                    {
                        item?.Rate.toString()
                    }%
                </Text>
            </View>
        </View>
    )
}

export default SingleRow;