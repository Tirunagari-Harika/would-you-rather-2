import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators";

import { MainWrapperStyles } from "./MainStyles";
 
import Login from "../../Components/Login/Login";
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";
import NewQuestion from "../../Components/NewQuestion/NewQuestion";
import DecideQuestion from "../../Components/Questions/decideQuestion/decideQuestion";
import Home from "../Home/Home";

import UserProfile from "./UserProfile";


class Main extends Component {

    /* userSignIn = (id) => {
        this.props.logInUser(id);
        this.props.history.push({
            pathname: "/home",
            state: { currentUser:this.props.currentUser }
        });
    }
 */
    componentDidMount(){
      //  console.log("Main ",this.props);
       /*  this.props.history.push({
            pathname: "/login",
            state: { userSignIn: this.userSignIn }
        }); */   
    }

    componentDidUpdate(){
       
    }

    userLogout = () => {
        this.props.logoutUser();
        this.props.history.replace({
            pathname: "/login",
            /* state: { userSignIn: this.userSignIn } */
        });
    } 

    render(){
        return (<MainWrapperStyles>
            <div className="header">React App</div>
            <UserProfile currentUser={this.props.currentUser}
                    userLogout={this.userLogout}
                     />
            
            <Route path="/home" exact component={Home} />
            <Route path="/add" exact component={NewQuestion} />
            <Route path="/leaderboard" exact component={LeaderBoard} /> 
            <Route path="/questions/:question_id"  exact component={DecideQuestion} />          
                
            <Switch>
                <Route path="/login" exact  component={Login}/>
                <Route path="/"  exact  component={Login}/>
            </Switch>
        </MainWrapperStyles>)
    }
}

const mapStateToProps = (state) => {
   // console.log(state);
    return {
        currentUser: state.state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(actionCreators.logoutCurrentUser()),
       /*  logInUser: (id) => dispatch(actionCreators.loggedInCurrentUser(id)) */
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);