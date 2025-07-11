/**
 * minha resposta
 * export default function gerarNumerosMegaSena(qtde) {
    let numerosSorteados = Array(qtde);

    for (let index = 1; index <= qtde; index++) {
        if (numerosSorteados.length === 0) {
            const numeroSorteado = Math.floor(Math.random() * (999 - index) + index);
            numerosSorteados.push(numeroSorteado);
        } else {
            numerosSorteados.push(gerarNumeroQueNaoExistaNoArray(index, numerosSorteados));
        }
    }

    console.log(numerosSorteados);
    return numerosSorteados;
}

function gerarNumeroQueNaoExistaNoArray(index, arrayDeNumerosSorteados) {
    const numeroSorteado = Math.floor(Math.random() * (999 - index) + index);
    return arrayDeNumerosSorteados.includes(numeroSorteado) ? gerarNumeroQueNaoExistaNoArray(index, arrayDeNumerosSorteados) : numeroSorteado;
}
 */
//resposta do professor
export default function gerarNumerosMegaSena(qtde) {
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
