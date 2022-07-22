import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { Container, Tipo, IconView, TipoText, ValorText, DescricaoView, DescricaoText, ViewData, DataText } from './styles';

export default function HistoricoList({ data, valor, deleteItem }) {
    return (
        
        <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
            <Container>
                <Tipo>
                    <IconView tipo={data.tipo}>
                        <Icon
                            name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            color="#fff"
                            size={20} />
                        <TipoText>{data.tipo}</TipoText>
                    </IconView>
                    <DescricaoView>
                        <DescricaoText>Descrição: {data.descricao}</DescricaoText>
                    </DescricaoView>
                </Tipo>
                <ViewData>
                    <DataText>
                        {data.date}
                    </DataText>
                    <ValorText>
                        R$ {data.valor}
                    </ValorText>
                </ViewData>
            </Container>
        </TouchableWithoutFeedback>
        
    );
}