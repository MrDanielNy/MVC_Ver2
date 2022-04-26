import React from 'react'
import { ThemeContext } from 'styled-components';
import { Button } from './styles'
import { useContext } from "react"
import "../mvc_pages/Modal_Accessibility.css"

function ThemeToggler() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <Button className='accessibility_Setting_Btn'
                onClick={() => {
                    toggleTheme(
                        theme === "light" ? "dark" : "light")
                    window.$myTheme = theme
                }

                }>Dark/Light</Button>
        </div>
    )
}

export default ThemeToggler