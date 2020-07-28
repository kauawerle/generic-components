import styled from 'styled-components/native';


export const Holder = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    marginTop: 22px;
`;

export const ModalView = styled.View`
    margin: 20px;
    background-color: #fff;
    border-radius: 20px;
    padding: 35px
    align-items: center;
    shadow-color: #000;
    shadow-opacity: 0.25;
    elevation: 5;

`;

export const ModalText = styled.Text`
    margin-bottom: 15;
    textAlign: center;
`;

export const TextStyle = styled.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;

export const OpenButton = styled.TouchableOpacity`
    background-color: #F194FF;
    border-radius: 20px;
    padding: 10px;
    elevation: 2

`
