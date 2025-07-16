import { View, Text, Image } from 'react-native'

const CategoryCard = ({ text, url }) => {
    return (
        <View
            className="w-[96px] h-[96px] flex flex-col items-center border border-transparent px-[14px] pt-4 rounded-2xl bg-white"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 20,
                elevation: 2,
            }}
        >
            <Image
                source={url}
                className="object-contain w-7 h-7 mb-5"
            />
            <Text className="text-center text-[#979797] leading-4 font-[500] text-sm text-wrap">
                {
                    text
                }
            </Text>
        </View>

    )
}

export default CategoryCard;