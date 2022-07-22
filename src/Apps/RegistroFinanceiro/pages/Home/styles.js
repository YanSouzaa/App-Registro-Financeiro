import styled from 'styled-components/native';

export const Background = styled.View`
 flex:1;
 background-color: #131313;
`;

export const Container = styled.View`
    margin-left: 15px;
    margin-bottom: 25px;
    justify-content: center;
    align-items: center;
`;

export const Nome = styled.Text`
    font-size: 19px;
    color: #FFF;
    margin-bottom: 20px;
`;

export const Saldo = styled.Text`
margin-top: 5px;
font-size: 30px;
color: #FFF;
font-weight: bold;
`;

export const Title = styled.Text`
margin-left: 5px;
color: #fff;
margin-bottom: 10px;
margin-top: 10px;

`;

export const Area = styled.View`
flex-direction: row;
margin-left: 15px;
align-items: center;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
    
})`
    padding-top: 10px;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
   
`;


