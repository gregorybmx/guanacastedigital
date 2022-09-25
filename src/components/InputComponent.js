import React from "react";

const inputComponent = (props) => {
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

export default inputComponent;