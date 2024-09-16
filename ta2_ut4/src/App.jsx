import { useState } from 'react'
import './App.css'
import './components/Card/card.module.css'

import { Card } from "./components/Card";
import { CardContent } from './components/CardContent';
import { UserInput } from './components/UserInput';
import { Counter } from './components/Counter';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <Card>
        <CardContent
          titulo="titulo"
          descripcion="describiendo tarea"
          personaAsignada="pepito"
          fechaInicio="05-09-2024"
          fechaFin="12-09-2024"
        />
      </Card>

      <Card>
        <CardContent
          titulo="titulo2"
          descripcion="describiendo tarea 2.0"
          personaAsignada="clementina"
          fechaInicio="05-09-2024"
          fechaFin="22-09-2024"
        />
      </Card>

      <Card>
        <CardContent
          titulo="titulo3"
          descripcion="acá se supone que describo la tarea"
          personaAsignada="olaf"
          fechaInicio="05-09-2024"
          fechaFin="10-09-2024"
        />
      </Card>

      <UserInput> </UserInput>

      <Counter></Counter>
    </div>
  )
}

export default App
