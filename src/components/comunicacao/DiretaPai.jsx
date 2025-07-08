import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Bernardo" idade={20} nerd={true} />
            <DiretaFilho nome="Maria" idade={17} nerd={false} />
        </div>
    )
}