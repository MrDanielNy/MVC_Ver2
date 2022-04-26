import React from 'react'
import { ThemeContext } from 'styled-components';
import { Button } from './styles'
import { useContext } from "react"
import "../mvc_pages/Modal_Accessibility.css"

function BlindToggler() {

    const { Blindtheme, BlindtoggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <Button className='accessibility_Setting_Btn'
                onClick={() => BlindtoggleTheme(
                    Blindtheme === "ok" ? "blind" : "ok")}>Blind
            </Button>
        </div>
    )
}

export default BlindToggler