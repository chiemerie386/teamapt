import logo from './logo.svg';
import './App.css';
import { Header } from './components/headerContent/Header';
import Bottom from './components/bottomContent/Bottom';
import { Body } from './components/bodyContent/Body';

function App() {
  return (
    <div className="App">

      <Header/>
      <Body/>
      <Bottom/>
      
    </div>
    
  );
}

export default App;
