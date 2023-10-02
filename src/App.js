import Navbar from './pages/navber/Navbar';
import Home from './pages/home/Home/Home';
import Contact from './pages/home/Contact/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      
        <Switch>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={Contact}/>
        
       
        </Switch>
      
      </header>
    </div>
    </BrowserRouter>
  );
}
export default App;
