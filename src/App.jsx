import Weather from './Weather.jsx';
import Search from "./Search.jsx";
import Footer from './Footer.jsx';


function App() {
    return (
    <div className="App">
      <header className="App-header">
<h3>Krystlecodes</h3>
<Search />
<Weather city = "London"/>
      </header>
      <Footer />
    </div>
  );
}


export default App
