import React from "react";

const InputComponent = (props) => {   
    return (
        <input
            type={props.type}
            className={props.className}
            placeholder={props.placeholder}
            data-toggle='tooltip'
            title={props.tooltiptext}
        />
    );
}

export default InputComponent;