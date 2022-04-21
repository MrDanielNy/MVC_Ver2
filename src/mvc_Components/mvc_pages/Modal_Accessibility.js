import React, { useState, useEffect, useCallback, useRef } from 'react';
import "../mvc_pages/Modal_Accessibility.css"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { useSpring, animated } from 'react-spring';
import ToggleSwitch from './ToggleKey';
import MultiSwitch from 'react-multi-switch-toggle'

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
bottom:30px;
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

    return (
        <>

            {showAccessibility ? (
                <Background ref={accessibilitySetting} onClick={closeAccessibilitySetting}>

                    <Accessibility_Wrapper showAccessibility={showAccessibility}>

                        <Accessibility_Window_Content>

                            <div className='header'>
                                <div className='modal_Header'>
                                    <h2  >Tillgänglighetsjusteringar </h2>
                                    <button className='reset_Settings_Btn'>Återställ inställningar</button>

                                </div>
                                <div >
                                    <h3 className='accessibility-Settings_Header'>Välj tillgänglighetsprofil</h3>
                                </div>
                                <div className='settings_Container'>



                                    <h5>Mörkt kontrast <ToggleSwitch name="Kon" /></h5>
                                    <h5>Mörkt kontrast <ToggleSwitch name="Kiiiiir" onClick={() => { console.log("Kirr") }} /></h5>
                                </div>
                            </div>

                        </Accessibility_Window_Content>
                        <CloseAccessibilitySettings aria-label='stäng tillgänglighetsinställningarna' onClick={() => setShowAccessibility(prev => !prev)} />

                    </Accessibility_Wrapper>

                </Background >

            ) : null}

        </>
    );
}

export default ModalAccessibility;
