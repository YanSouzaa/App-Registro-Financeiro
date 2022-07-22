import styled from 'styled-components/native'

export const Container = styled.View`
flex:1;
background-color: #131313;
align-items: center;

`;
export const Nome = styled.Text`
text-align: center;
font-size: 28px;
margin-top: 25px;
margin-bottom: 25px;
color:#fff
`;
export const NewLink = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #ab0000;
height: 45px;
width: 90%;
border-radius: 7px;
margin-top: 10px;
`;
export const NewText = styled.Text`
font-size: 18px;
color:#fff;
font-weight: bold;
`;
export const Logout = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: rgba(171, 0, 0,0.20);
height: 35px;
width: 40%;
border-radius: 7px;
margin-top: 20px;
`;
export const LogoutText = styled.Text`
font-size: 18px;
color:#fff;
font-weight: bold;
`;

