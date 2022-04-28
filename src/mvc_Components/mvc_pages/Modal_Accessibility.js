import React, { useState, useEffect, useCallback, useRef } from 'react';
import "../mvc_pages/Modal_Accessibility.css"
import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { useSpring, animated } from 'react-spring';
import Switch from './ToggleKey';
import MultiSwitch from 'react-multi-switch-toggle'
import { ThemeProvider } from 'styled-components';
import { DivHeader, Button, greenTheme, redTheme, DarkTheme, LightThemeAccessibilitySettings, GeneralTheme_AccessibilityWindow } from './styles';
import ThemeToggler from './ThemeToggler';
import { ThemeContext } from 'styled-components';
import { useContext } from "react"
import "./ToggleKey.css"

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


const ModalAccessibility = ({ showAccessibility, setShowAccessibility, setChecked }) => {
    const themeStatus = useRef();
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
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { blindTheme, toggleBlindTheme } = useContext(ThemeContext);
    const { cognitiveTheme, toggleCognitiveTheme } = useContext(ThemeContext);

    return (
        <>
            {showAccessibility ? (
                <Background ref={accessibilitySetting} onClick={closeAccessibilitySetting}>

                    <Accessibility_Wrapper showAccessibility={showAccessibility}>

                        <Accessibility_Window_Content>

                            <div className='header'>
                                <ThemeProvider theme={theme === "light" ? greenTheme : DarkTheme}>
                                    <DivHeader className='modal_Header'>
                                        <h2  >Tillgänglighetsjusteringar </h2>
                                        <button className='reset_Settings_Btn'>Återställ inställningar</button>

                                    </DivHeader>
                                </ThemeProvider>

                                <div >
                                    <h3 className='accessibility-Settings_Header'>Välj tillgänglighetsprofil</h3>
                                </div>
                                <div className='settings_Container'>


                                    {/* <div className='options'>
                                        {" "}
                                        <div className="toggle-switch">
                                            <input ref={themeStatus} type="checkbox" className="checkbox"
                                                name={"gentle colors"} id={"gentle colors"} onClick={() => {


                                                    toggleTheme(
                                                        theme === "light" ? "dark" : "light")
                                                    localStorage.setItem("theme", theme)
                                                    // console.log(themeStatus.current.checked + " ()()()()")
                                                    localStorage.setItem("status", themeStatus.current.checked)
                                                    // console.log("Saved to local storage " + localStorage.getItem("status"))


                                                }} />
                                            <label className="label" htmlFor={"gentle colors"}>
                                                <span className="inner" />
                                                <span className="switch" />
                                            </label>
                                        </div>
                                        <label> Mörkt lägge </label>
                                        <p>Mörk eller ljus lägge</p>
                                    </div>


                                    <div className='options'>

                                        {" "}

                                        <div className="toggle-switch">
                                            <input type="checkbox" className="checkbox"
                                                name={"visually impaired"} id={"visually impaired"} onClick={() => {
                                                    toggleBlindTheme(
                                                        blindTheme === "light" ? "dark" : "light")
                                                }} />
                                            <label className="label" htmlFor={"visually impaired"}>
                                                <span className="inner" />
                                                <span className="switch" />
                                            </label>
                                        </div>
                                        <label> Synskadad </label>
                                        <p>För de flesta synnedsättningar</p>

                                    </div>

                                    <div className='options'>

                                        {" "}

                                        <div className="toggle-switch">
                                            <input type="checkbox" className="checkbox"
                                                name={"Cognitive"} id={"Cognitive"} onClick={() => {
                                                    toggleCognitiveTheme(
                                                        cognitiveTheme === "light" ? "dark" : "light")
                                                }} />
                                            <label className="label" htmlFor={"Cognitive"}>
                                                <span className="inner" />
                                                <span className="switch" />
                                            </label>
                                        </div>
                                        <label> Kognitiv funktionshinder</label>
                                        <p>Funktionsnedsätningar som autism, dyslexi och ...</p>

                                            </div>*/}

                                    <div className='accessibility_Setting_Btn_Container' >
                                        <ThemeContext.Provider value={{ theme, toggleTheme }}>
                                            <ThemeProvider theme={theme === "light" ? DarkTheme : LightThemeAccessibilitySettings}>
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
