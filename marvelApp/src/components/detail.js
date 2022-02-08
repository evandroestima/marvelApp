import React from 'react';
import { Text, Image, SafeAreaView, View, StyleSheet } from 'react-native';

const Details = (props) => {
    console.log(props)
    return (
        <>
            <SafeAreaView style={styles.containerItem}>
                <Image style={styles.image} source={{ uri: `${props.thumbnail.path}.${props.thumbnail.extension}` }} />
                <Text style={styles.title}>{props.name}</Text>
            </SafeAreaView>
            <View style={{ flex: 1, height: 1, backgroundColor: '#D42026', marginLeft: -440, }} />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 12,
    },
});

export default Details;