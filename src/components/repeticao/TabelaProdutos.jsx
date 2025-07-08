import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props => {

    const produtosList = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2)}</td>
            </tr>
        )
    })

    return (
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço(R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosList}
                </tbody>
            </table>
        </div>
    )
}