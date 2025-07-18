
import MapView, { Marker, Polyline } from 'react-native-maps';
import { addresses } from '../../../data';
import { mapCustomStyle } from '../../../style';
import { Image, Text } from 'react-native';
import { useEffect, useRef } from 'react';
import { useSelectedMapStore } from '../../../store/useSelectedMapStore';
import getDistanceBetween from '../../utils/getDistanceBetween';
import getMidPoint from '../../utils/getMidPoint';
import useGetUserLocation from '../../utils/GetUserLocation';

let distanceInKm;
let midPoint;

const Map = () => {

    const mapRef = useRef(null);

    // Getting the current user location
    const { currentUserLocations } = useGetUserLocation();

    const selectedBranch = useSelectedMapStore((state) => state.selectedPosition);

    // resets the map view to get both the locations in view
    useEffect(() => {
        if (selectedBranch && mapRef.current) {
            mapRef.current.fitToCoordinates(
                [
                    {
                        latitude: currentUserLocations.latitude,
                        longitude: currentUserLocations.longitude,
                    },
                    {
                        latitude: selectedBranch.latitude,
                        longitude: selectedBranch.longitude,
                    },
                ],
                {
                    edgePadding: { top: 40, right: 40, bottom: 40, left: 40 },
                    animated: true,
                }
            );
        }
    }, [selectedBranch, currentUserLocations]);


    if (selectedBranch) {
        // conversion
        distanceInKm = getDistanceBetween(currentUserLocations, selectedBranch);

        // midpoint calculation
        midPoint = {
            latitude: getMidPoint(currentUserLocations.latitude, selectedBranch.latitude),
            longitude: getMidPoint(currentUserLocations.longitude, selectedBranch.longitude)
        };
    }

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
            ref={mapRef}
        >

            {/* GPS Marker */}
            <Marker coordinate={{
                latitude: currentUserLocations.latitude,
                longitude: currentUserLocations.longitude,
            }}
                title="Your Location"
                anchor={{ x: 0.2, y: 0.2 }}
            >
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
                    anchor={{ x: 0.3, y: 0.3 }}
                >
                    <Image
                        source={require('../../../assets/images/Search/Address.png')}
                        style={{ width: 24, height: 24 }}
                        resizeMode="contain"
                    />
                </Marker>
            ))}

            {selectedBranch && (
                <Polyline
                    coordinates={[currentUserLocations, selectedBranch]}
                    strokeColor="#FB6B18"
                    strokeWidth={3}
                    lineDashPattern={[10, 10]}
                />
            )}

            {
                midPoint && <Marker coordinate={midPoint} anchor={{ x: 0.5, y: 1 }}>
                    <Text className="text-[#343434] font-semibold text-sm w-14">
                        {
                            distanceInKm
                        } km
                    </Text>
                </Marker>
            }

        </MapView>
    )

}

export default Map;