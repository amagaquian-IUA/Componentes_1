import './App.css'
import Button from './components/common/Button'
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
    </>
  )
}

export default App
