import { View, Image, Text } from 'react-native'

const Card = () => {
    return (
        <View className="relative flex-1 mt-12 items-center mb-8">

            <View className="bg-[#5655B9] rounded-[10px] w-10/12 h-[165px] relative z-0"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.05,
                    shadowRadius: 20,
                    elevation: 2,
                }}
            >
            </View>

            <View className="bg-[#FF4267] rounded-[10px] w-11/12 h-[165px] z-10 absolute bottom-3"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.05,
                    shadowRadius: 20,
                    elevation: 2,
                }}
            >
            </View>

            <View className="bg-[#1573FF] rounded-[10px] w-full h-[165px] z-10 absolute bottom-6 overflow-hidden"
                style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.05,
                    shadowRadius: 20,
                    elevation: 2,
                }}
            >
                {/* first circle on the right */}
                <View className="h-[185px] w-[191px] absolute rounded-full -right-[90px] -top-[80px]">
                    <Image
                        source={
                            require('../../../assets/right-circle.png')
                        }
                        className="h-full w-full object-contain"

                    />
                </View>

                {/* second circle on the right */}
                <View className="h-[340px] w-[350px] absolute rounded-full -left-[140px] -top-[60px]">
                    <Image
                        source={
                            require('../../../assets/left-circle.png')
                        }
                        className="h-full w-full object-contain"

                    />
                </View>

                <Text className="text-white text-2xl relative top-5 left-5">
                    Muhammad Zain ...
                </Text>

                <Text className="text-white text-sm font-medium leading-4 relative top-[30px] left-5">
                    Amazon Platinium
                </Text>

                <Text className="text-white text-sm leading-6 font-medium relative top-[45px] left-5">
                    4756 **** **** 9018
                </Text>

                <Text className="text-white relative top-[52px] left-5 text-xl font-semibold leading-7">
                    $3.469.52
                </Text>

                <Image
                    source={
                        require('../../../assets/visa.png')
                    }
                    className="w-[47px] h-[16px] absolute bottom-6 right-6"
                />

            </View>

        </View>
    )
}

export default Card