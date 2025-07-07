import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Fragmento from './components/basicos/Fragmento'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

export default _ =>
  <div className='App'>
    <h1>Fundamentos React</h1>
    <div className='Cards'>
      <Card titulo="#07 - Exercicio Repetição" color="#FF6B7D">
        <TabelaProdutos />
      </Card>
      
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Christmas">
          <FamiliaMembro nome="Pedro"/>
          <FamiliaMembro nome="Ana"/>
          <FamiliaMembro nome="Gustavo"/>
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={150} max={890} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parametro" color="#E8B71A">
        <ComParametro titulo="Situação do aluno"
          aluno="Iury" nota={9.3} />
      </Card>

      <Card titulo="#01 -Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
