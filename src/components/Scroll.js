import React from 'react'


const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border: '2px solid darkblue', height: '480px'}}>
            {props.children}
        </div>
    )
}

export default Scroll