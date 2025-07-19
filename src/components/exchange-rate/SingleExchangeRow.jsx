import { View, Text, Image } from 'react-native'

const SingleExchangeRow = ({ data }) => {

    return (
        <View
            className="w-full h-11 flex-row border-b border-b-[#ECECEC] pb-3 mb-5"
        >
            <View className="w-8/12 h-auto flex-row items-center gap-4">
                <Image
                    className="object-cover w-10 h-[27px] rounded-md aspect-auto"
                    source={data?.Flag}
                />
                <Text className="text-[#343434] text-base font-medium leading-6">
                    {
                        data?.country
                    }
                </Text>
            </View>

            <View className="flex-row w-4/12 justify-between">
                <Text className="text-[#343434] text-base font-medium leading-6">
                    {
                        data?.buy
                    }
                </Text>

                <Text className="text-[#343434] text-base font-medium leading-6">
                    {
                        data?.sell
                    }
                </Text>
            </View>
        </View>

    )
}

export default SingleExchangeRow;
