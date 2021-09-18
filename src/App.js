import {Header} from './components'
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import React from "react";
import axios from "axios";

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(({data}) => {setPizzas(data.pizzas)});
        }, []);

  return (
    <div className="App">
      <div className="wrapper">
          <Header />
          <div className="content">
              <Route exact path='/' render={() => <Home items={pizzas}/>}/>
              <Route path='/cart' component={Cart}/>
          </div>
      </div>
    </div>
  );
}

export default App;
