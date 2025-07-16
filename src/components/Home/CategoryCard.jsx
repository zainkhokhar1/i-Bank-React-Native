import { View, Text, Image } from 'react-native'
import { styles } from '../../../style';

const CategoryCard = ({ text, url }) => {
    return (
        <View
            className="w-[96px] h-[96px] flex flex-col items-center border border-transparent px-[14px] pt-4 rounded-2xl bg-white"
            style={styles.shadow}
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