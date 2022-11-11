import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login';
import Footer  from './footer';
import Deals from './deals';
import Steps  from './steps';



function App() {
  return (
    <div className="App">
      <Router>
       
      <Navbar/>
          < Switch>
          <Route exact path="/login">
             <Login/>
          </Route>
          <Route exact path="/deals">
            <Deals/>
          </Route>
          <Route exact path="/steps">
            <Steps/>
          </Route>
         </Switch>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;
