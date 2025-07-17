
import MapView, { Marker } from 'react-native-maps';
import { addresses } from '../../../data';
import { mapCustomStyle } from '../../../style';
import { Image } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const Map = () => {

    const [currentUserLocations, setCurrentUserLocations] = useState({
        latitude: 33.7150,
        longitude: 73.0662,
    });

    useEffect(() => {

        const getUserLocations = async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    alert('error while getting your current location');
                    return;
                }
                let location = await Location.getCurrentPositionAsync();
                if (location?.coords) {
                    setCurrentUserLocations({
                        latitude: location?.coords?.latitude,
                        longitude: location?.coords?.longitude,
                    });
                }
            }
            catch (e) {
                alert('Error while fetching your location');
            }
        }
        getUserLocations();
    }, []);

    return (

        <MapView
            style={{ width: '100%', height: 325 }}
            region={{
                latitude: currentUserLocations.latitude,
                longitude: currentUserLocations.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            customMapStyle={mapCustomStyle}
        >

            {/* GPS Marker */}
            <Marker coordinate={{
                latitude: currentUserLocations.latitude,
                longitude: currentUserLocations.longitude,
            }} title="Your Location">
                <Image
                    source={require('../../../assets/images/Search/GPS.png')}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                />
            </Marker>

            {/* Address Marker */}
            {addresses.map((location) => (
                <Marker
                    key={location.id}
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                    title={location.title}
                    description={location.description}
                >
                    <Image
                        source={require('../../../assets/images/Search/Address.png')}
                        style={{ width: 24, height: 24 }}
                        resizeMode="contain"
                    />
                </Marker>
            ))}

        </MapView>
    )

}

export default Map;