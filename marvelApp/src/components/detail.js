import React from 'react';
import { Text, Image, SafeAreaView, View, StyleSheet } from 'react-native';

const Details = ({ route, navigation }) => {

    const { name, description, thumbnail } = route.params;

    const { path, extension } = thumbnail;

    return (
        <>
            <SafeAreaView style={styles.containerItem}>
                <Image style={styles.image} source={{ uri: `${path}.${extension}` }} />
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description} > {description} </Text>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d42026',
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: -50,
    },
    title: {
        fontSize: 30,
        fontFamily: "Roboto",
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 12,
    },
});

export default Details;