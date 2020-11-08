import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './Components/MenuComponents';

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
          </div>
        </Navbar>
        <div><Menu /></div>
    </div>
  );
}

export default App;
