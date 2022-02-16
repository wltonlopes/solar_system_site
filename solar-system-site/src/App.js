// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Rotas from './router';

function App() {
  return (
    <div className="App">
    <Header/>
    <main className='main'>
      <div className='cards-container'>
        <Rotas/>
      </div>
    </main>
    <Button/>
    </div>
  );
}

export default App;
