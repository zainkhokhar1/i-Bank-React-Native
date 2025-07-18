import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelectedMapStore } from '../../../store/useSelectedMapStore.js';
import useGetUserLocation from '../../utils/GetUserLocation.jsx';
import getDistanceBetween from '../../utils/getDistanceBetween.js';

const SingleBranchShow = ({ item }) => {

    const setSelectedPosition = useSelectedMapStore((state) => state.setSelectedPosition);
    const selectedBranch = useSelectedMapStore((state) => state.selectedPosition);

    // getting the current user location 
    const { currentUserLocations } = useGetUserLocation();

    // function to set the positions to show on the map
    const handleShowPosition = () => {
        const position = {
            latitude: item.latitude,
            longitude: item.longitude
        };

        setSelectedPosition(position);
    };

    return (
        <TouchableOpacity className={`${(selectedBranch?.latitude === item.latitude && selectedBranch.longitude == item.longitude) ? 'opacity-50' : 'opacity-100'} h-12 w-full flex-row justify-between items-end pb-2 border-b border-b-[#ECEBEB]`}
            // to show click properly
            activeOpacity={0.6}
            onPress={handleShowPosition}
        >

            <View className="flex-row gap-3">
                {/* Image to be shown first here*/}
                <Image
                    className="size-5"
                    source={
                        require('../../../assets/images/Search/Address.png')
                    }
                />
                <Text className="text-base leading-6 font-medium text-[#343434]">{item?.title}</Text>
            </View>
            <Text className="text-[#979797] text-xs leading-4">
                {
                    getDistanceBetween(
                        currentUserLocations,
                        {
                            latitude: item?.latitude,
                            longitude: item?.longitude

                        }
                    )}
                &nbsp; Km
            </Text>
        </TouchableOpacity>
    )
}

export default SingleBranchShow;