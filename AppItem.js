import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Database from "./Database";
import AppList from "./AppList";

export default function AppItem(props) {
    async function handleEditPress() {
        const item = await Database.getItem(props.id);
        props.navigation.navigate("AppForm", item);
    }

    async function handleDeletePress() {
        Alert.alert("Excluir", "Tem certeza que deseja excluir este item?", [
            {
                text: "Cancelar",
                onPress: () => console.log("Cancelado"),
                style: "cancel"
            },
            {
                text: "Sim",
                onPress: async () => {
                    await Database.deletarItem(props.id);
                    
                    props.onItemDeleted("AppList", item);
                }
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDeletePress}
                >
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditPress} 
                >
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: '#166c75',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    }
});
