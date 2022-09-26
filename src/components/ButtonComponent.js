import React from 'react'

const ButtonComponent = (props) => {
    return (
        <button
            type={props.type}
            className={props.className}
            disabled={props.disable}>
            {props.content}
        </button>
    )
}

export default ButtonComponent