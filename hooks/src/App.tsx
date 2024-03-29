import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './components/Counter'
import { ScrollHooks } from './components/ScrollHooks'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
      <Counter />
      <ScrollHooks />
    </div>
  )
}

export default App
