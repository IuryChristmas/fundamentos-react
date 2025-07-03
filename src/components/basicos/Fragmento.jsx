import React from "react"

export default function Fragmento(props) {
    //vc pode usar assim tbm <></> mas dessa forma não pode ter parametros
    return (
        <React.Fragment>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )
}