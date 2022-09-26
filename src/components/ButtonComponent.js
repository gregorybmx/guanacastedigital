import React from 'react'

const ButtonComponent = (props) => {
    return (
        <button
            type={props.type}
            className={props.className}>
            {props.content}
        </button>
    )
}

export default ButtonComponent