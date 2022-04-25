import React, { useState, useEffect, useCallback, useRef } from 'react';
import "../mvc_pages/Modal_Accessibility.css"

import { MdClose } from "react-icons/md"
import { useSpring, animated } from 'react-spring';
import Switch from './ToggleKey';
import MultiSwitch from 'react-multi-switch-toggle'

import styled from "styled-components";
import _ from 'lodash';
import { useTheme } from '../../theme/useTheme';
import { getFromLS } from '../../utils/storage';

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


const ModalAccessibility = (props) => {
    const gentleColors = useRef();
    const [value, setValue] = useState(false);
    const accessibilitySetting = useRef();
    console.log("props are ----> " + props)
    const closeAccessibilitySetting = e => {
        if (accessibilitySetting.current === e.target) {
            props.setShowAccessibility(false)
        }
    }
    // To close the accessibility windows using ESC key
    const escKey = useCallback(e => {
        if (e.key === "Escape" && props.showAccessibility) {
            console.log("Escape is pressed")
            props.setShowAccessibility(false)
        }
        else
            if (e.key === "Escape" && !props.showAccessibility) {
                props.setShowAccessibility(false)
            }

    }, [props.setShowAccessibility], [props.showAccessibility])
    useEffect(() => {
        document.addEventListener("keydown", escKey);
        return () => document.removeEventListener("keydown", escKey)
    })



    const themesFromStore = getFromLS('all-themes');
    const [data, setData] = useState(themesFromStore.data);
    const [themes, setThemes] = useState([]);
    const { setMode } = useTheme();

    const themeSwitcher = selectedTheme => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

    useEffect(() => {
        setThemes(_.keys(data));
    }, [data]);

    useEffect(() => {
        props.newTheme &&
            updateThemeCard(props.newTheme);
    }, [props.newTheme])

    const updateThemeCard = theme => {
        const key = _.keys(theme)[0];
        const updated = { ...data, [key]: theme[key] };
        setData(updated);
    }


    const ThemeCard = props => {
        return (


            <button className='accessibility_Setting_Btn' onClick={(theme) => themeSwitcher(props.theme)}
                style={{
                    backgroundColor: `${data[_.camelCase(props.theme.name)].colors.button.background}`,
                    color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
                    fontFamily: `${data[_.camelCase(props.theme.name)].font}`
                }}>
                {props.theme.name}
            </button>

        )
    }




    return (
        <>
            {

                props.showAccessibility ? (
                    <Background ref={accessibilitySetting} onClick={closeAccessibilitySetting}>

                        <Accessibility_Wrapper showAccessibility={props.showAccessibility}>

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


                                        <div className='options'><Switch refColor="gentleColors" label="gentle colors" />  <label> Blida färger</label>
                                            <p>Reducerar färg</p>
                                        </div>

                                        <div className='options'>  <Switch refVisually="visually" label="visually impaired" /><label> Synskadad </label>
                                            <p>För de flesta synnedsättningar</p></div>
                                        <div className='options'>  <Switch label="Cognitive" /><label> Kognitiv funktionshinder</label>
                                            <p>Funktionsnedsätningar som autism, dyslexi och ... </p></div>

                                        <div className='options'>  <Switch label="keyboard" /><label> Tangetbordnavigering</label>
                                            <p>Använd tangetbord att surfa i webbsidan </p></div>

                                        <div className='options'>  <Switch label="readingTitles" /><label> Läser titlar och texter</label>
                                            <p>Hör en titel eller en text genom att klicka på den</p></div>

                                        <div className='accessibility_Setting_Btn_Container' >



                                            {
                                                themes.length > 0 &&
                                                themes.map(theme => (
                                                    <ThemeCard theme={data[theme]} key={data[theme].id} />
                                                ))
                                            }



                                            <button className='accessibility_Setting_Btn'>Mörk Kontrast</button>
                                            <button className='accessibility_Setting_Btn'>Stor svart markör</button>
                                            <button className='accessibility_Setting_Btn'>Stor vit markör</button>
                                            <button className='accessibility_Setting_Btn'>Läsguide</button>

                                        </div>




                                    </div>
                                </div>

                            </Accessibility_Window_Content>
                            <CloseAccessibilitySettings aria-label='stäng tillgänglighetsinställningarna' onClick={() => props.setShowAccessibility(prev => !prev)} />

                        </Accessibility_Wrapper>

                    </Background >

                ) : null
            }

        </>
    );
}

export default ModalAccessibility;
