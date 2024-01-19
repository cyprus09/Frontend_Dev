// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
// import Hello from './components/Hello';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name = "mayank"/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
