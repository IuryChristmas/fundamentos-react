import React from "react";

export default props => {
    const cb = props.clickFilho
    const gerarIdade = () => Math.floor(Math.random() * (20) + 50)
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => cb('Iury', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}