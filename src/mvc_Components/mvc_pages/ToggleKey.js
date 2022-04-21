import React, { Component } from "react";
import "./ToggleKey.scss"

class ToggleSwitch extends Component {


    render() {
        return (
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="toggle-switch-checkbox"

                    id="toggleSwitch"


                />
                <label className="toggle-switch-label" htmlFor="toggleSwitch">
                    <span className="toggle-switch-inner" />
                    <span className="toggle-switch-switch" />
                </label>
            </div>
        );
    }
}

export default ToggleSwitch;
