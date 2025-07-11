import React, { useState } from "react";
import gerarNumerosMegaSena from "./geradorDeNumeros";
import "./Mega.css";

export default props => {
    /*
    minha solução obs: o fill peguei da dica do professor
    const [numerosSorteados, setNumerosSorteados] = useState(Array(6).fill(0))
    const [quantidade, setQuantidade] = useState(7)

    function quantidadeNumerosSorteados(e) {
        setQuantidade(+e.target.value)
    }

    function realizarSorteio() {
        setNumerosSorteados(gerarNumerosMegaSena(quantidade))
    }

    return (
        <div className="Mega">
            <h2>Sorteio Número Mega Sena</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <label htmlFor="numerosSorteados">Defina a quantidade de números a serem sorteados: </label>
                <input id="numerosSorteados" value={quantidade} type="number" onChange={quantidadeNumerosSorteados} />
                <button onClick={realizarSorteio}>Sortear</button>
                <h3>Números sorteados</h3>
                <span>{numerosSorteados.join(' ')}</span>
            </div>
        </div>
    )
    */

    //solução professor
    function gerarNumerosMegaSena(qtde) {
        let numerosSorteados = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroQueNaoExistaNoArray(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2);
        return numerosSorteados;
    }

    function gerarNumeroQueNaoExistaNoArray(min, max, arrayDeNumerosSorteados) {
        const numeroSorteado = Math.floor(Math.random() * (max - min) + min);
        return arrayDeNumerosSorteados.includes(numeroSorteado) ? gerarNumeroQueNaoExistaNoArray(min, max, arrayDeNumerosSorteados) : numeroSorteado;
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumerosMegaSena(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="numerosSorteados">Qtde de Números</label>
                <input id="numerosSorteados" value={qtde} type="number" 
                min="6"
                max="15"
                onChange={(e) => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumerosMegaSena(+e.target.value))
                }}/>

            </div>
            <button onClick={_ => setNumeros(gerarNumerosMegaSena(qtde))}>Gerar Números</button>
        </div>
    )
}