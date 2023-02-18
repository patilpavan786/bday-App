import './App.css';
import BdayCard from './Atom/BdayCard/BdayCard';
import Register from './Pages/Register/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<Routes>
  <Route path='/'  element={<Register />}></Route>
  <Route path='/BdayCard'  element={<BdayCard />}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
