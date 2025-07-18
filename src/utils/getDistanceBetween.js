
import { getDistance } from 'geolib';

const getDistanceBetween = (p1, p2) => {
    let distanceInMeters = getDistance(p1, p2);
    let distanceInKm = (distanceInMeters / 1000).toFixed(2);
    return distanceInKm;
}

export default getDistanceBetween;