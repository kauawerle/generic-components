import React from 'react';
import { Holder, Box, Title, Inputs, Link, LinkText } from './styled';
import { Alert } from 'react-native'

import Button from '../../components/Button/Button';
import AlertComponent from '../../components/Alert/Alert';

const Home = () => {


    function AlertPush() {
       return <AlertComponent></AlertComponent>

    }

    return (
        <Holder>
            <Box>
                <Title>Acesse sua conta</Title>
                <Inputs placeholder="digite seu E-mail" />
                <Inputs placeholder="digite sua senha" />
                <Button onPress={AlertPush}>Entrar</Button>

                <Link onPress={AlertPush}>
                    <LinkText>Esqueci a senha</LinkText>
                </Link>
            </Box>
        </Holder>
    )
}

export default Home;
