
import styled from 'styled-components';


export const DarkTheme = {
    backgroundColor: '#272727',
    color: 'white',
};

export const LightTheme = {
    backgroundColor: 'blue',
    color: 'white',
};
export const greenTheme = {
    backgroundColor: 'green',
    color: 'white',
};

export const redTheme = {
    backgroundColor: 'red',
    color: '#272727',
};
export const Button = styled.button`

 height: 100px;
    width: 100px;
    margin: 10px;
    padding: 2px;
    border: 0;
    background-color:${(props) => props.theme.backgroundColor}; 
   color:${(props) => props.theme.color};
    borderRadius: 10px;

`;
export const DivHeader = styled.div`
background-color:${(props) => props.theme.backgroundColor}; 

color:${(props) => props.theme.color};

`
