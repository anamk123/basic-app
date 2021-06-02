import './css/App.css';
import Home from './components/home';
import Header from './components/header';
import Products from './components/product';
import TestingStates from './components/testStates';
import Stock from './components/stock';
import Weather from './components/weather';
import Add from './components/addUser';
import UsersList from './components/userList';


import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
            <BrowserRouter>

      <header >
      <Header/>  
      </header>
      <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Add} path="/add"/>
      <Route component={UsersList} path="/users"/>
      <Route component={Products} path="/products" />
      <Route component={TestingStates} path="/test-states" />
      <Route component={Stock} path="/stocks" />
      <Route component={Weather} path="/weather" />




          
        </Switch>
      </BrowserRouter>

        <body className="">
          
        
        </body>

    </div>
  );
}

export default App;
