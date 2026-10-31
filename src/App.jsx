import './App.css'
import { Sidebar } from './components/Sidebar'
import {Navbar} from './components/Navbar';
import { Menu } from './pages/Menu';

function App() {


  return (
    <div className="App">
      
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='main-content'>
        <Navbar />
        <Menu />
      </div>

      <div className='order-panel'>
        <h1>Order-panel</h1>
      </div>
    </div>
  )
}

export default App
