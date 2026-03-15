import './App.css'
/*Imports de componentes */
import Button from './components/common/Button'
import Input from './components/common/Input'
import { Card, CardTitle, CardBody, CardFooter } from './components/common/Card'
import CardRegistro from './components/auth/Registro'
/*Imports de configs y otros */
import { buttonConfig } from './lib/component-config/buttons.config'

function App() {
  const handlerSubmit = () => {
    alert("Formulario Enviado")
  }

  return (
    <>
      {
        buttonConfig.map(e =>
        (
          <Button title={e.title} variant={e.variant} handle={e.handle} />
        )
        )
      }
      <Input placeHolder={"Texto de prueba 2"} isActive={true} type={"text"} />
      <Input placeHolder={"Texto de prueba 3"} isActive={false} type={"text"} />
      <Input placeHolder={"Texto de prueba 4"} isActive={true} type={"tel"} />
      <Input placeHolder={"Coloca un número"} isActive={true} type={"number"} />

      <CardRegistro submit={handlerSubmit} />

    </>
  )
}

export default App
