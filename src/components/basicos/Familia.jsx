import React, { cloneElement } from 'react'

export default props => {
    return (
        <div>
            {
                /*uma forma de fazer React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                }) abaixo terá outra forma de ser feito, de uma maneira mais simplificada*/
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i})
                })                    
            }
        </div>
    )
}