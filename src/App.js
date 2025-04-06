//import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import PublicIP from './PublicIP';

function App() {
  return (
    <div className="App">
      <Banner title="OM" />
      <header className="App-header">
        
      

        <Exhibit heading="Your IPv4 Address">
          <PublicIP version="v4" />
        </Exhibit>

        <Exhibit heading="Your IPv6 Address">
          <PublicIP version="v6" />
        </Exhibit>


        <Exhibit heading="Second Exhibit">
          <button>Click Me</button>
        </Exhibit>
        
        
          
        
      </header>
    </div>
  );
}

export default App;
