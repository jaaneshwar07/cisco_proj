//import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner title="OM" />
      <header className="App-header">
        
      <Exhibit heading="First Exhibit">
          <p>This is the first child element inside the exhibit.</p>
        </Exhibit>

        <Exhibit heading="Second Exhibit">
          <button>Click Me</button>
        </Exhibit>
        
        
          
        
      </header>
    </div>
  );
}

export default App;
