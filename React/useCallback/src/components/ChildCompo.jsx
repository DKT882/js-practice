import React from 'react'

const ChildCompo = React.memo(
    (props) => {
    console.log('child component rendered')
    return (
        <div>
            <button
                onClick={props.handleClick}
            >{props.title}</button>
        </div>
    )
}
)

export default ChildCompo
