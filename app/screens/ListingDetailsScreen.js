import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';


function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red Jacket for Sale!</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>
                <ListItem 
                image={{uri: "https://picsum.photos/200/300"}}
                title="Name Here"
                subTitle="5 Listings"
                />
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    price: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;