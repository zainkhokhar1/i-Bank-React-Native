import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const useGetUserLocation = () => {
    const [currentUserLocations, setCurrentUserLocations] = useState({
        latitude: 33.7150,
        longitude: 73.0662,
    });

    useEffect(() => {

        const getUserLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            let { coords } = await Location.getCurrentPositionAsync();

            if (coords) {
                setCurrentUserLocations({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            }
        }

        getUserLocation();
    }, []);

    return { currentUserLocations };

}

export default useGetUserLocation;