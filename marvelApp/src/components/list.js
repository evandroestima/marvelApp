import React from 'react';
import { Text, Image, SafeAreaView, View, StyleSheet } from 'react-native';


const List = (props) => {
    console.log(props)
    return (
        <>

            <SafeAreaView style={styles.containerItem}>
                {/* <Image style={styles.image} source={{ uri: `${props.thumbnail.path}.${props.thumbnail.extension}` }} />
                <Text style={styles.title}>{props.name}</Text> */}
            </SafeAreaView>
            <View style={{ flex: 1, height: 1, backgroundColor: '#D42026', marginLeft: -440, }} />
        </>
    )
}

const styles = StyleSheet.create({
    buscaMarvel: {
        color: "#D42026",
        opacity: 100,
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 12,
    },
    testeFrontEnd: {
        color: "#D42026",
        opacity: 100,
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "200",
        marginLeft: 4,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerGeral: {
        display: "flex",
        marginLeft: 30,
    },
    containerBusca: {
        display: "flex",
    },
    busca: {
        color: "#D42026",
        opacity: 100,
        fontSize: 15,
        fontFamily: "Roboto",
        fontWeight: "300",
    },
    input: {
        borderColor: "#D42026",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        maxWidth: 300,
        maxHeight: 40,
    },
    nameBar: {
        backgroundColor: "#D42026",
        color: "#fff",
        opacity: 100,
        fontSize: 15,
        fontFamily: "Roboto",
        fontWeight: "300",
        padding: 10,
        marginTop: 10,
        marginLeft: -30,
        marginBottom: 10,
    },
    containerLista: {
        display: "flex",
        marginTop: 10,
        marginBottom: 10,
    },
    containerItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 20,
        borderRadius: 10,
    },
    title: {
        color: "grey",
        opacity: 100,
        fontSize: 15,
        fontFamily: "Roboto",
        fontWeight: "300",
    },
    nextPage: {
        color: "#D42026",
        opacity: 100,
        fontSize: 15,
        fontFamily: "Roboto",
        fontWeight: "300",
        marginTop: 10,
        marginBottom: 10,
    }
});

export default List;