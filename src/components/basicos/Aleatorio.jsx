export default function Aleatorio(props) {
    const { min, max} = props;
    const resultadoAleatorio =  Math.floor(Math.random() * (max - min) + min)
    
    return (
        <div>
            <h2>Sorteio de número aleatório entre dois valores</h2>
            <p>O sorteio será entre {min} e {max}</p>
            <p>O resultado foi: <strong>{resultadoAleatorio}</strong></p>
        </div>
    )
}