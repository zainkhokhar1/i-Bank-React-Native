import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../../style.js';
import { useNavigation } from '@react-navigation/native';

const Card = ({ text, url, para, redirect }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.shadow}
            className="h-[110px] w-full rounded-2xl bg-white flex-row justify-between p-4 mt-[10px]"
            onPress={() => navigation.navigate(redirect)}
        >

            {/* First to show the content */}
            <View className="w-6/12">
                <Text className="text-[#343434] font-semibold leading-6 text-base">{text}</Text>
                <Text className="text-[#979797] font-medium leading-4 text-xs mt-2">{para}</Text>
            </View>

            {/* second to show the image */}
            <View className="w-[100px] h-[80px]">
                <Image
                    source={url}
                    className="w-full h-full object-contain"
                />
            </View>

        </TouchableOpacity >
    )
}

export default Card;