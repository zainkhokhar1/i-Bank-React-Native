
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    }
});

export const mapCustomStyle = [  // Greyscale style
    {
        elementType: 'geometry',
        stylers: [{ color: '#F5F5F5' }],
    },
    {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
    },
    {
        featureType: 'streets',
        stylers: [{ color: '#C9C9C9' }],
    },
];