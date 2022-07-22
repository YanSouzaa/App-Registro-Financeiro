import styled from "styled-components/native";

export const Background = styled.View`
flex:1;
background-color: #131313;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.70)'
})`
background: rgba(0,0,0,0.20);
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
font-size: 21px;
font-weight: bold;
color: #fff;
`;