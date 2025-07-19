import { View, Image, ScrollView } from 'react-native'
import InputContainer from './InputContainer';

const Container = () => {
    return (
        <ScrollView className="flex-1 mb-10">
            <View className="flex-1 p-6 items-center">
                <Image
                    className="h-[210px] w-[327px] object-contain"
                    source={
                        require('../../../assets/images/Search/exchange-image.png')
                    }
                />
            </View>

            <InputContainer />


        </ScrollView>
    )
}

export default Container;