import React, { useState, useEffect, useCallback, useRef } from 'react';
import "../mvc_pages/Modal_Accessibility.css"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { useSpring, animated } from 'react-spring';
import Switch from './ToggleKey';
import MultiSwitch from 'react-multi-switch-toggle'
import { ThemeProvider } from 'styled-components';
import { DivHeader, Button, greenTheme, redTheme, DarkTheme, LightTheme, GeneralTheme_AccessibilityWindow } from './styles';
import ThemeToggler from './ThemeToggler';
import { ThemeContext } from 'styled-components';
import BlindToggler from './Blind';
import NavPane from '../Nav_pane';


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
    const gentleColors = useRef();
    const [value, setValue] = useState(false);
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

    const [theme, toggleTheme] = useState("light");
    return (
        <>
            {showAccessibility ? (
                <Background ref={accessibilitySetting} onClick={closeAccessibilitySetting}>

                    <Accessibility_Wrapper showAccessibility={showAccessibility}>

                        <Accessibility_Window_Content>

                            <div className='header'>
                                <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                                    <DivHeader className='modal_Header'>
                                        <h2  >Tillgänglighetsjusteringar </h2>
                                        <button className='reset_Settings_Btn'>Återställ inställningar</button>

                                    </DivHeader>
                                </ThemeProvider>

                                <div >
                                    <h3 className='accessibility-Settings_Header'>Välj tillgänglighetsprofil</h3>
                                </div>
                                <div className='settings_Container'>


                                    <div className='options'><Switch label="gentle colors" />  <label> Blida färger</label>
                                        <p>Reducerar färg</p>
                                    </div>

                                    <div className='options'>  <Switch label="visually impaired" /><label> Synskadad </label>
                                        <p>För de flesta synnedsättningar</p></div>
                                    <div className='options'>  <Switch label="Cognitive" /><label> Kognitiv funktionshinder</label>
                                        <p>Funktionsnedsätningar som autism, dyslexi och ... </p></div>

                                    <div className='options'>  <Switch label="keyboard" /><label> Tangetbordnavigering</label>
                                        <p>Använd tangetbord att surfa i webbsidan </p></div>

                                    <div className='options'>  <Switch label="readingTitles" /><label> Läser titlar och texter</label>
                                        <p>Hör en titel eller en text genom att klicka på den</p></div>

                                    <div className='accessibility_Setting_Btn_Container' >
                                        <ThemeContext.Provider value={{ theme, toggleTheme }}>
                                            <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                                                <ThemeToggler />

                                            </ThemeProvider>
                                        </ThemeContext.Provider>


                                        <button className='accessibility_Setting_Btn'>Hög Kontrast</button>
                                        <button className='accessibility_Setting_Btn'>Mörk Kontrast</button>
                                        <button className='accessibility_Setting_Btn'>Stor svart markör</button>
                                        <button className='accessibility_Setting_Btn'>Stor vit markör</button>
                                        <button className='accessibility_Setting_Btn'>Läsguide</button>

                                    </div>
                                </div>

                            </div>


                        </Accessibility_Window_Content>
                        <CloseAccessibilitySettings aria-label='stäng tillgänglighetsinställningarna' onClick={() => setShowAccessibility(prev => !prev)} />

                    </Accessibility_Wrapper>

                </Background >

            ) : null
            }

        </>

    );
}

export default ModalAccessibility;
