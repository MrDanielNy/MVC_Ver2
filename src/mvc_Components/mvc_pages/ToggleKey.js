import "./ToggleKey.css"

const Switch = ({ label }) => {
    return (
        <>

            {" "}
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>


        </>
    );
};

export default Switch;