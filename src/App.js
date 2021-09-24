import {Header} from './components'
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import React from "react";
import axios from "axios";
import {setPizzas as setPizzasAction} from "./redux/actions/pizzas"
import { connect } from 'react-redux'

class App extends React.Component{

    componentDidMount() {
        axios.get("http://localhost:3000/db.json").then(({data}) => {
            this.props.setPizzas(data.pizzas)
        });
    }

    render() {
        return(
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <div className="content">
                        <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
                        <Route path='/cart' component={Cart}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{ // ф-ия, которая добавляет в props св-во items
    return{
        items: state.pizzas.items,
    }
}

const mapDispatchToProps = dispatch => { // ф-ия, которая добавляет в props св-во - ф-ию setPizzas
  return{
      setPizzas: (items) => dispatch(setPizzasAction(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // связываем react c redux
