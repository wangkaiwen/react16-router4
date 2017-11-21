//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import { Link, Route, Switch,Redirect } from 'react-router-dom';

import Category from './Category';
import Products from './Products';
import {fakeAuth,Login} from './Login';
import './App.css';

const Home = ()=>(
    <div>
        <h2>首页</h2>
    </div>
);

const PrivateRoute = ({component:Component,authed,...rest}) =>{
    return (
        <Route {...rest} render={(prop)=>authed==true?<Component {...prop}/>:<Redirect to={{pathname:'/login',state:{from:prop.location}}}/>}/>
    )
}

class App extends Component {

    render() {
        return (

            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav category">
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/category">分类</Link></li>
                        <li><Link to="/products">产品</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component={Products}/>
                </Switch>
            </div>

        );
    }
}

export default App;
