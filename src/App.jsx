import './App.css'
import Header from './Components/Header';
import Input from './Components/Input';
import Output from './Components/Output';
import Help from './Components/Help';


function App() {

  return (
    <div className='App'>
      <Header />
      <Help/>
      <div className="contentWrapper">
        <div className="content">
          <Input/>
          <Output/>
        </div>
      </div>
    </div>
  )
}

export default App
