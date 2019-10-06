import React, { Component } from "react";
import logo from "../../logo.svg";
import { LoginStyles } from "./LoginStyles";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators";
import * as utility from "../../utility";


class Login extends Component{
    state = {        
        currentSelectedUserId:"",
        
     };

    componentDidMount(){
        this.props.getUsers();          
    }

    handleChangeUserHandler = (ev) => {
        //console.log(ev.target.value);
        this.setState({currentSelectedUserId: ev.target.value});
    }

    onSignIN = () => {
        //console.log("SignIn ",this.props);        
        //this.props.location.state.userSignIn(this.state.currentSelectedUserId);
        this.props.logInUser(this.state.currentSelectedUserId);      
    }

    componentDidUpdate(){
        if(this.props.currentUser && this.props.currentUser.id){
            this.props.history.push({
                pathname:"/home",
                state : { currentUser: this.props.currentUser }
            });
        }        
    }
    


    render(){
      //  console.log("Login Render _________________", this.props.users, this.props.users.length);
        
        return (<LoginStyles>
            <div className="title">
                <div className="titleheader">
                    Welcome to the Would You Rather App !
                </div>
                <div className="secondHeader">
                    Please Sign in to continue
                </div>
            </div>
            <div>
                <img src={logo} alt="not loaded" className="logo" />
              
                <select className="selectUsersDropDown" 
                    value={this.state.currentSelectedUserId}
                    onChange={this.handleChangeUserHandler}>              
                    <option value=""></option>
                    { this.props.users && this.props.users.length && this.props.users.map((user) => {
                        return (<option value={user.id} key={user.id}>{user.name}</option>)
                    })}  
                   
                </select>
                <button className="signInBtn" onClick={this.onSignIN}>Sign In</button>
            </div>
        </LoginStyles>)

    }
}

const mapStateToProps = (state) => {
   // console.log("Login State ",state, state.state.users, state.state.users.length);
    return {
        users: utility.getArray(state.state.users),
        currentUser: state.state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(actionCreators.getUsers()),
        logInUser: (id) => dispatch(actionCreators.loggedInCurrentUser(id))
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Login);