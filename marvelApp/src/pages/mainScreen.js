import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    FlatList,
    View,
    Image,
    TouchableOpacity,
    Modal,
} from 'react-native';
import api from '../services/api';
import apiKey from '../services/config/apiKey';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainScreen = ({ navigation }) => {
    const [fullData, setFullData] = useState([]);
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [name, setName] = useState('');
    const [initialIndex, setInitialIndex] = useState(0);
    const [finalIndex, setFinalIndex] = useState(4);
    const [modalVisible, setModalVisible] = useState(false);
    const [pagesCount, setPagesCount] = useState(0);

    async function getData() {
        await api.get('/v1/public/characters', {
            params: {
                ...apiKey,
                limit: 30,
                nameStartsWith: name,
            },
        }).then(response => {
            setFullData(response.data.data.results);
            const slicedArray = response.data.data.results.slice(initialIndex, finalIndex);
            setData(slicedArray);
            const pages = Math.ceil(response.data.data.total / 4);
            setPagesCount(pages);
        }
        );
    }

    const handleRefresh = async () => {
        setRefreshing(false);
        await getData()
    }

    const handleName = async (text) => {
        if (text.length > 0) {
            setName(text);
            await getData()
        }
        else {
            setData([]);
        }
    }

    const handleNextPage = () => {

        if (!(initialIndex >= fullData.length) && !(finalIndex > fullData.length)) {
            setInitialIndex(initialIndex + 4);
            setFinalIndex(finalIndex + 4);
            setData(fullData.slice(initialIndex, finalIndex));
        }

    }

    const handleLastPage = () => {

        if (!(initialIndex <= 3)) {
            setInitialIndex(initialIndex - 4);
            setFinalIndex(finalIndex - 4);
            setData(fullData.slice(initialIndex, finalIndex));
        }

    }

    var rows = [];
    for (var i = 0; i < pagesCount; i++) {
        rows.push(i + 1);
    }

    return (
        <>
            <SafeAreaView style={styles.containerGeral}>
                <SafeAreaView style={styles.titleContainer}>
                    <Text style={styles.buscaMarvel} >BUSCA MARVEL</Text>
                    <Text style={styles.testeFrontEnd}>TESTE FRONT-END</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.containerBusca}>
                    <Text style={styles.busca}>Nome do personagem</Text>
                    <TextInput style={styles.input} placeholder="Digite o nome do personagem" onChangeText={text => handleName(text)} />
                </SafeAreaView>
                <Text style={styles.nameBar}> NOME </Text>
                <SafeAreaView style={styles.containerLista}>

                    <FlatList
                        data={data}
                        refreshing={refreshing}
                        pagingEnabled={true}
                        onRefresh={handleRefresh}
                        renderItem={({ item }) => {

                            return (
                                <>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
                                                <SafeAreaView>
                                                    <Image style={styles.image} source={{ uri: `${item?.thumbnail.path}.${item?.thumbnail.extension}` }} />
                                                    <Text style={styles.modalText}>{item?.name}</Text>
                                                    <Text style={styles.modalText}>{item?.description}</Text>
                                                </SafeAreaView>
                                            </View>
                                        </View>
                                    </Modal>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('Details', {
                                            name: item?.name,
                                            description: item?.description,
                                            thumbnail: item?.thumbnail,
                                        });
                                    }} >
                                        <SafeAreaView style={styles.containerItem}>
                                            <Image style={styles.image} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                                            <Text style={styles.title}>{item.name}</Text>
                                        </SafeAreaView>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#D42026', }} />
                                    </TouchableOpacity>
                                </>
                            )
                        }
                        }

                        keyExtractor={item => item.id}
                    />

                    {fullData.length > 0 ? (
                        <View style={styles.containerBotoes}>
                            <TouchableOpacity>
                                <Icon name={"arrow-left"} size={60} style={styles.nextPage} onPress={handleLastPage} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.pagesCount}>{rows}</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon name={"arrow-right"} size={60} style={styles.nextPage} onPress={handleNextPage} />
                            </TouchableOpacity>
                        </View>) : null}

                </SafeAreaView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    pagesCount: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D42026',
        textAlign: 'center',
    },
    pageNumber: {
        borderRadius: 50,
        width: 60,
        height: 60,
        padding: 10,
        background: "#d42026",
        border: "3px solid #000",
        color: "#000",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
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
        marginTop: 12,
        marginLeft: -30,
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
        width: 60,
        height: 60,
        marginRight: 20,
        borderRadius: 40,
        marginBottom: 18,
        marginTop: 18,
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
    },
    containerBotoes: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
});

export default MainScreen;
