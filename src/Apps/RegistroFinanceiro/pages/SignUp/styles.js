import styled from 'styled-components/native'


export const Background = styled.View`
flex:1;
background-color: #131313;

`;
export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;

`;
export const Logo = styled.Image`
margin-bottom: 15px;

`;
export const AreaInput = styled.View`
flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor:'rgba(255,255,255,0.70)'
})`
background: rgba(0,0,0,0.60);
width: 90%;
font-size: 17px;
color:#fff;
margin-bottom: 15px;
padding: 10px;
border-radius: 7px;
`;
export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #ab0000;
    height: 45px;
    width: 90%;
    border-radius: 7px;
    margin-top: 10px;
`;
export const SubmitText = styled.Text`
    font-size: 20px;
    color: #131313;

`;
export const Link = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: rgba(171, 0, 0,0.20);
    height: 35px;
    width: 40%;
    border-radius: 7px;
    margin-top: 20px;
`;
export const LinkText = styled.Text`
    color:rgba(255,255,255,0.70)
`;
