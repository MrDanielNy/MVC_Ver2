import React, { useState, useEffect, useCallback, useRef } from 'react';
import "../mvc_pages/Modal_Accessibility.css"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { useSpring, animated } from 'react-spring';

const Background = styled.div`
   position: fixed;
    display: flex;
    align-items:center;
    height:100%;
    width:100%;
    left:10px
  
z-index:2000;

    border-radius: 10px;
    top:200px;
    
`
const Accessibility_Wrapper = styled.div`
position:relative;
width:350px;
height:600px;
box-shadow: 0 5px 16px rgba(0,0,0,.4);
background:#fff;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
z-index:1000;
border-radius:10px;
margin-bottom:50px;
bottom:30px;
left:10px;
`
const Accessibility_Window_Content = styled.div`
display:flex;
flex-direction:row;


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
`;


const ModalAccessibility = ({ showAccessibility, setShowAccessibility }) => {

    const accessibilitySetting = useRef();

    return (
        <>
            {showAccessibility ? (
                <Background>

                    <Accessibility_Wrapper showAccessibility={showAccessibility}>

                        <Accessibility_Window_Content>

                            <h1  >accessibility settings </h1>

                        </Accessibility_Window_Content>
                        <CloseAccessibilitySettings aria-label='stäng tillgänglighetsinställningarna' onClick={() => setShowAccessibility(prev => !prev)} />

                    </Accessibility_Wrapper>

                </Background >

            ) : null}

        </>
    );
}

export default ModalAccessibility;
