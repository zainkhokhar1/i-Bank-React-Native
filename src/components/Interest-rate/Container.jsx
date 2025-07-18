import { View, FlatList } from 'react-native'
import Header from './Header';
import { interestData } from '../../../data';
import SingleRow from './SingleRow';
import { SafeAreaView } from 'react-native';

const Container = () => {
    return (
        <SafeAreaView className="p-6 flex-1">

            {/* Header that is going to be stick on the top */}
            <Header />

            <FlatList
                className="my-8"
                showsVerticalScrollIndicator={false}
                data={interestData}
                renderItem={({ item }) => <SingleRow item={item} />}
                keyExtractor={(item) => item.Deposit + item.Rate}
            />

        </SafeAreaView>
    )
}

export default Container;