import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
  <div className='App'>
    <h1>Fundamentos React</h1>
    <div className='Cards'>
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
