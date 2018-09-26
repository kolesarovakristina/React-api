import styled from 'styled-components';

export const Wrapper = styled.div`
width: 25%;
position: absolute;
top: 0; left: 0; right: 0; bottom: 0;
margin: auto;
height: 70%;
`;

export const Input = styled.input`
width: calc(100%);
display:inline-block;
height: 35px;
font-size: 15px;
background-color: #fff;
color:  rgb(64, 64, 64);
outline: none;
display: block;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
text-indent: 10px;
    
`;
export const StyledText = styled.div`
text-align:center;
width: calc(100%);
padding-bottom:20px;
`;

export const Title = styled.div`
font-style: italic;
color: rgb(64, 64, 64);
font-size:25px;
font-weight:bold;
`;
export const Subtitle = styled.div`
font-style: italic;
color: rgb(64, 64, 64);
font-size:20px;
font-weight:bold;
`;
export const StyledButtonWrapper = styled.div`
padding-top:15px;
padding-bottom:20px;
`;

export const Button = styled.button`
width: calc(100%);
height: 40px;
font-size: 14px;
background-color:#262626;
color: #fff;
letter-spacing: 1px;
text-transform: uppercase;
font-weight: bold;
letter-spacing: 1px;
margin-top: 10px; 
border-width:0px;
border:none;
outline: none;
display: block;
border-radius: 5px;
cursor: pointer;
`;

export const Image = styled.img`
padding-bottom: 5px;
display: block;
margin-left: auto;
margin-right: auto;
`;
