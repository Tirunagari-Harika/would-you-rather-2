import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class UserProfile extends Component{
    getUserData = () => {
        let currentUser = { name:"",avatarURL:"" };
        let toggleClass = "hideUser";
        if(this.props.currentUser && this.props.currentUser.name){
            currentUser = this.props.currentUser;
            toggleClass = "showUser";
        }
        return (<li className={"userprofile " + toggleClass}>
            <div>Hello, {currentUser.name}</div>
            <div><img src={currentUser.avatarURL} 
                alt="not-found" 
                className="avtarImg" /></div>
            <div onClick={this.logout}>
                Logout
            </div>
        </li>);
    }

    logout = () => {       
        this.props.userLogout();      
    }

    render(){
       // console.log("UserProfile Render ====== ",this.props);
        return (<ul className="links">                    
            <li><NavLink 
                to={{
                    pathname:"/home",
                    state: { currentUser:this.props.currentUser }
                }}
                 activeClassName="activeLink">Home</NavLink></li>
            <li><NavLink 
                to={{
                    pathname:"/add",
                    state: { currentUser:this.props.currentUser }
                }}
                activeClassName="activeLink">New Question</NavLink></li>
            <li><NavLink 
                to={{
                    pathname:"/leaderboard",
                    state: { currentUser:this.props.currentUser }
                }} 
                activeClassName="activeLink">Leader Board</NavLink></li> 

            {this.getUserData()}
        </ul>)
    }


}

export default UserProfile;