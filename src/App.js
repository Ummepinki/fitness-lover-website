
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route path="/" element={<Home></Home>}></Route>
    </div>
  );
}

export default App;
