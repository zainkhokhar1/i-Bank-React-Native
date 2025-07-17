

const useGetUserLoca = () => {

    useEffect(() => {

        const getUserLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrors('Permission to location was not granted');
            return;
        }
        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            setCurrentUserLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    }

        getUserLocation();
    }, []);

    return { currentUserLocation, errors };

}

export default useGetUserLoca;