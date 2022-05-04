import React, { useState, useEffect, useCallback, useRef } from 'react';
import "../mvc_pages/Modal_Accessibility.css"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { useSpring, animated } from 'react-spring';
//import Switch from './ToggleKey';
import { theme1, theme2 } from ".././mvc_pages/theme/AccessibilityThemes"
import baseTheme from './BaseTheme/Styles';
import { deepmerge } from "@mui/utils";

import {
    Button,
    Paper,
    Typography,
    Box,
    ThemeProvider,
    createTheme
} from "@mui/material";


const Background = styled.div`
   position: fixed;
    display: flex;
    align-items:center;
    height:100%;
    width:100%;
    left:10px
  
    z-index:2000;

    border-radius: 10px;
    top:150px;
    
    
`
const Accessibility_Wrapper = styled.div`
position:relative;
width:450px;
height:600px;
box-shadow: 0 5px 16px rgba(0,0,0,.4);
background:#fff;
display:flex;
flex-direction:row;
justify-content:center;

z-index:1000;
border-radius:20px;
margin-bottom:50px;
bottom:70px;
left:10px;
border-radius:2px green solid;

`
const Accessibility_Window_Content = styled.div`
display:flex;
flex-direction:column;
line-height:1.8;
color:black;

`



const CloseAccessibilitySettings = styled(MdClose)`
cursor:pointer;
position:absolute;
top:10px;
left:10px;
width:32px;
height:32px;
padding:0;
z-index=10;
color:black;
background-color:white;
border-radius:100px
`;


const ModalAccessibility = ({ showAccessibility, setShowAccessibility }) => {

    const accessibilitySetting = useRef();
    const closeAccessibilitySetting = e => {
        if (accessibilitySetting.current === e.target) {
            setShowAccessibility(false)
        }
    }
    // To close the accessibility windows using ESC key
    const escKey = useCallback(e => {
        if (e.key === "Escape" && showAccessibility) {
            console.log("Escape is pressed")
            setShowAccessibility(false)
        }
        else
            if (e.key === "Escape" && !showAccessibility) {
                setShowAccessibility(false)
            }

    }, [setShowAccessibility], [showAccessibility])
    useEffect(() => {
        document.addEventListener("keydown", escKey);
        return () => document.removeEventListener("keydown", escKey)
    })


    const [theme, setTheme] = useState(baseTheme);

    const handleSwitch = (whichTheme) => {
        const newTheme = deepmerge(theme, whichTheme);
        setTheme(createTheme(newTheme));
    };


    return (
        <>



        </>
    );
}

export default ModalAccessibility;
