import styled from 'styled-components/native';

export const  Holder = styled.View`
    width: 100%;
    height: 100%;
    background: #c4c4c4;
`;

export const Box = styled.View`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 80%;
    margin-left: 20px;
`;

export const Inputs = styled.TextInput`
    width: 90%;
    height: 37px;
    border-radius: 13px;
    background: #d4d4d4;
    font-size: 13px;
    margin-top: 20px;
`;



export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Link = styled.TouchableOpacity`
width:60%;
height: 40px;
    background: transparent;
    display: flex;
    padding: 10px;
`;

export const LinkText = styled.Text`
    font-size: 14px;
`;
