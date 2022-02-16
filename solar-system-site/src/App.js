// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Cards from './components/Cards';  
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <main className='main'>
      <div className='cards-container'>
      <Cards/>
      </div>
    </main>
    <Button/>
    </div>
  );
}

export default App;
