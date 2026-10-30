
import './App.css'
import { Sidebar } from './components/Sidebar'
import {Navbar} from './components/Navbar';

function App() {


  return (
    <div className="App">
      
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='main-content'>
        <Navbar />
      </div>

      <div className='order-panel'>
        <h1>Order-panel</h1>
      </div>
    </div>
  )
}

export default App
