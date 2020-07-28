import React from 'react';
import { TouchableOpacityProperties } from 'react-native';

import { Container, TextButton } from './styles';


interface ButtonProps extends TouchableOpacityProperties {
    children: string;
}


const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
        <Container {...rest}>
            <TextButton>{children}</TextButton>
        </Container>

);

export default Button;
