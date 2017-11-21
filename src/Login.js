/**
 * Created by kevin on 2017/11/21.
 */
import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            redirectToReferrer:false
        };
        this.login=this.login.bind(this);
    }
    login(){
        fakeAuth.authenticate(()=>{
            this.setState({redirectToReferrer:true});
        })
    }
    render(){
        const {from}=this.props.location.state||{from:{pathname:'/'}};
        const {redirectToReferrer}=this.state;
        if(redirectToReferrer){
            return (
                <Redirect to={from}/>
            )
        }else{
            return (
                <div>
                    <p>你必须登录在{from.pathname}</p>
                    <button onClick={this.login}>登录</button>
                </div>
            )
        }
    }
}
 const fakeAuth={
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated=true;
        setTimeout(cb,100);
    }
};
export {
    fakeAuth,Login
}