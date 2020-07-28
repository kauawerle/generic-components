import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const TextButton = styled.Text`
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;


export const Container = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    border-radius: 13px;
    background: #000;
    margin-top: 20px;
    justify-content: center;
`;
