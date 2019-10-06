import React, { Component, Fragment } from "react";
import { LeaderBoardStyles } from "./LeaderBoardStyles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators";
import * as utility from "../../utility";

const Contestant = (props) => (<Fragment>
    <div className="contestant">
        <div className={`highlight ${props.activeClass}`}></div>
        <div className="ImgWrapper">
            <img src={props.user.avatarURL} alt="not-found" />
        </div>
        <div className="dashboard">
            <div className="userName">{props.user.name}</div>
            <div className="answered">Answered questions {props.user.answers.length}</div>                    
            <div className="created">Created questions {props.user.questions.length}</div>
        </div>
        <div className="score">
            <div>
                <div className="score-header"> Score </div>
                <div className="score-detail">
                    <div className="totalscore"> 
                        {props.user.answers.length + props.user.questions.length} 
                    </div>                           
                </div>
            </div>
        </div>
    </div>
</Fragment>)



class LeaderBoard extends Component{
    componentDidMount(){
        console.log("LeaderBoard ",this.props.location.state.currentUser);
        this.props.getUsers();
        //console.log("");
    }

    displayUsers = () => {
        if(!this.props.location.state.currentUser.id)  return;
        let currentUserId = this.props.location.state.currentUser.id;

        /* let users = utility.getArray(this.props.users); */

        let users = utility.getAnswersArrUsers(this.props.users);
        users = utility.sortUsersArr(users);

        return (<LeaderBoardStyles>
            {users.map((user) => {
                let activeClass = "";                
                if(currentUserId === user.id){
                    activeClass = "activeHighlight"
                }
                return (<Contestant key={user.id} user={user} activeClass={activeClass}/>)
            })}
        </LeaderBoardStyles>)
        
    }

    render(){
        return (<Fragment>
            {this.displayUsers()}
        </Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        users: utility.getArray(state.state.users),
       /*  currentUser: state.state.currentUser */
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(actionCreators.getUsers()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeaderBoard);