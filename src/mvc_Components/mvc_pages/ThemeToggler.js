import React from 'react'
import { ThemeContext } from 'styled-components';
import { Button } from './styles'
import { useContext, useState } from "react"
import "../mvc_pages/Modal_Accessibility.css"
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function ThemeToggler() {

    let btnTxt = "";

    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log(typeof theme)


    if (theme === "light") {
        btnTxt = "Light"
    }
    else {
        btnTxt = "Dark"
    }
    const [btn, setBtn] = useState(btnTxt)
    console.log("Main theme is " + localStorage.getItem("theme"))
    return (
        <div>
            <Button className='accessibility_Setting_Btn'
                onClick={() => {
                    toggleTheme(
                        theme === "dark" ? "light" : "dark")
                    if (theme === "dark") {
                        setBtn("Dark")
                        localStorage.setItem("btnText", "Dark");
                    }
                    else {
                        setBtn("Light")
                        localStorage.setItem("btnText", "Light")
                    }
                    localStorage.setItem("buttonThemeSetting", theme)

                }

                }>{btn}</Button>
        </div>
    )
}

export default ThemeToggler