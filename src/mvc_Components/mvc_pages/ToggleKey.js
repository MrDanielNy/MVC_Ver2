import "./ToggleKey.css"
import { useContext } from "react"
import { ThemeContext } from 'styled-components';

const Switch = ({ label }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (

        <>

            {" "}
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} onClick={() => {
                        toggleTheme(
                            theme === "light" ? "dark" : "light")
                    }} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>


        </>
    );
};

export default Switch;