import Navbar from './Navbar'
import Home from './Home'
import Border from './Border'
import AnotherPage from './AnotherPage'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <div className="container">
        <Border />
        </div>
      </div>
    </div>
  );
}

export default App;
