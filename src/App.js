import './App.css';
import Evento from './components/Evento'
import Form from './components/Form'
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento Numero={1}/>
      <Evento Numero={2}/>
      <Form/>
      <HelloWorld/>    
    </div>
  )
}

export default App
