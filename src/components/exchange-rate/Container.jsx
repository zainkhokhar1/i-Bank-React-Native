import { SafeAreaView } from "react-native";
import Header from "./Header";
import { FlatList } from "react-native";
import SingleExchangeRow from "./SingleExchangeRow";

const countriesData = [
    {
        country: 'Vietnam',
        buy: 1.407,
        sell: 1.706,
        Flag: require('../../../assets/images/Search/flags/10.png')
    },
    {
        country: 'Nicaragua',
        buy: 1.528,
        sell: 1.842,
        Flag: require('../../../assets/images/Search/flags/6.png')
    },
    {
        country: 'Korea',
        buy: 1.362,
        sell: 1.719,
        Flag: require('../../../assets/images/Search/flags/4.png')
    },
    {
        country: 'Russia',
        buy: 1.478,
        sell: 1.623,
        Flag: require('../../../assets/images/Search/flags/9.png')
    },
    {
        country: 'China',
        buy: 1.911,
        sell: 1.901,
        Flag: require('../../../assets/images/Search/flags/2.png')
    },
    {
        country: 'Portuguese',
        buy: 1.397,
        sell: 1.704,
        Flag: require('../../../assets/images/Search/flags/8.png')
    },
    {
        country: 'Korea',
        buy: 1.471,
        sell: 1.795,
        Flag: require('../../../assets/images/Search/flags/4.png')
    },
    {
        country: 'French',
        buy: 1.789,
        sell: 1.698,
        Flag: require('../../../assets/images/Search/flags/3.png')
    },
    {
        country: 'Nicaragua',
        buy: 1.509,
        sell: 1.842,
        Flag: require('../../../assets/images/Search/flags/6.png')
    },
    {
        country: 'China',
        buy: 1.499,
        sell: 1.769,
        Flag: require('../../../assets/images/Search/flags/2.png')
    },
    {
        country: 'Nicaragua',
        buy: 1.557,
        sell: 1.842,
        Flag: require('../../../assets/images/Search/flags/6.png')
    },
    {
        country: 'Korea',
        buy: 1.372,
        sell: 1.719,
        Flag: require('../../../assets/images/Search/flags/4.png')
    },
    {
        country: 'Russia',
        buy: 1.408,
        sell: 1.623,
        Flag: require('../../../assets/images/Search/flags/9.png')
    },
    {
        country: 'Korea',
        buy: 1.401,
        sell: 1.795,
        Flag: require('../../../assets/images/Search/flags/4.png')
    },
    {
        country: 'French',
        buy: 1.385,
        sell: 1.698,
        Flag: require('../../../assets/images/Search/flags/3.png')
    },
    {
        country: 'Nicaragua',
        buy: 1.503,
        sell: 1.842,
        Flag: require('../../../assets/images/Search/flags/6.png')
    },
];


const Container = () => {
    return (
        <SafeAreaView className="p-6 flex-1">

            {/* Header that is going to be stick on the top */}
            <Header />

            <FlatList
                showsVerticalScrollIndicator={false}
                className="my-8"
                data={countriesData}
                keyExtractor={(item) => item.country + item.buy}
                renderItem={(({ item }) => <SingleExchangeRow data={item} />)}
            />

        </SafeAreaView>
    )
}

export default Container;