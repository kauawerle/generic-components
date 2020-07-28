import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacityProperties,
    View
} from "react-native";

import { Holder, ModalView, ModalText, TextStyle, OpenButton } from './styled';

const AlertComponent: React.FC = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Holder>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <Holder>
                    <ModalView>
                        <ModalText >Hello World!</ModalText>

                        <OpenButton
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <TextStyle>Hide Modal</TextStyle>
                        </OpenButton>
                    </ModalView>
                </Holder>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <TextStyle>Show Modal</TextStyle>
            </TouchableHighlight>
        </Holder>
    )

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});


export default AlertComponent;
