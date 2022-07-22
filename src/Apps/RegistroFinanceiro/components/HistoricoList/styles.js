import styled from 'styled-components/native'

export const Container = styled.View`
margin-bottom: 5px;
padding: 10px;
box-shadow: 2px 2px rgba(0,0,0,0.40);
background-color: #dcdcdc;
border-radius: 10px;
margin-left:3px;
margin-right:3px;
`;
export const Tipo = styled.View`
flex-direction: row;
`;
export const IconView = styled.View`
flex-direction: row;
background-color:${props => props.tipo === 'despesa' ? 'red' : '#049301'};
padding-bottom: 3px;
padding-top: 3px;
padding-left: 8px;
padding-right: 8px;
border-radius: 5px;
align-items: center;
`;
export const TipoText = styled.Text`
color:#fff;
font-size: 16px;
font-style: italic;
`;
export const ValorText = styled.Text`
color:#222;
font-size: 22px;
font-weight: bold;
`;
export const DescricaoView = styled.View`
align-items:flex-start;
margin-left: 10px;
width: 190px;
height: 60px;
`;
export const ViewData = styled.View`
margin-top: 10px;
flex-direction: row;
justify-content: space-between;
`;
export const DescricaoText = styled.Text`
text-align: center;
color:#000;
`;
export const DataText = styled.Text`
margin-top: 5px;
color:#000;
font-size: 17px;
`;
