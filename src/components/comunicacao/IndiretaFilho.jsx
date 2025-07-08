import React from "react";

export default props => {
    const cb = props.clickFilho

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => cb('Iury', 30, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}