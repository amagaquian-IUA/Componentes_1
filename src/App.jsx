import './App.css'
import Button from './components/common/Button'
import Input from './components/common/Input'
import { buttonConfig } from './lib/component-config/buttons.config'
function App() {
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
    </>
  )
}

export default App
