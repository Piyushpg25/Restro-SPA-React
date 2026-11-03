import './App.css'
import { OrderPanel } from './components/OrderPanel';
import { Sidebar } from './components/Sidebar'

import { Menu } from './pages/Menu';

function App() {
  

  return (
    <div className="App">
      
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='main-content'>
        
        <Menu />
      </div>

      <div className='order-panel'>
        <OrderPanel />
      </div>
    </div>
  )
}

export default App
