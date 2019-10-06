import React, { Component } from "react";
import * as actionCreators from "../../store/actionCreators";
import { connect } from "react-redux";
import { HomeStyles } from "./HomeStyles";

import QuestionSummary from "../../Components/Questions/QuestionSummary/QuestionSummary";
//import AnsweredDetail from "../../Components/Questions/AnsweredDetail/AnsweredDetail";

class Home extends Component{
    state = {
        /* showUnanswered:true, */
        key:"unansweredquestions" //[answeredquestions | unansweredquestions]
    }

    componentDidMount(){
        this.props.getQuestionsOfUser(this.props.location.state.currentUser.id);
        this.props.getUsers();
    }

    toggleTabs = (val) => {
        this.setState({
            key:val
        })
    }

    getDetailedQuestion = (id) => {
       // let key = this.state.showUnanswered? "unansweredquestions" : "answeredquestions";
       // console.log("ID for the detailed question", id,key);
        this.props.history.push({pathname:"/questions/" + id});
    }
    
    render(){
       // let setclass = (this.state.showUnanswered? "activeList":"");
      //  let key = this.state.showUnanswered? "unansweredquestions" : "answeredquestions";
        let unLen = this.props.questions.unansweredquestions;
        let ansLen = this.props.questions.answeredquestions;

        if((!unLen && !ansLen) || !unLen.length || !ansLen.length ) return (<div>Not Possible</div>)

        let checkAnswered = this.state.key === "answeredquestions"? "activeList":"";
        let checkUnanswered = this.state.key === "unansweredquestions"? "activeList":""; 
       
        
        return (<HomeStyles>
            <div className="titles">
                <div className={checkUnanswered}
                    onClick={this.toggleTabs.bind(this,"unansweredquestions")}>
                    Unanswered Questions</div>
                <div className={checkAnswered}
                    onClick={this.toggleTabs.bind(this,"answeredquestions")}>
                        Answered Questions</div>
            </div>

            <div className="questionsList">
                {this.props.questions[this.state.key].map((question,i) => {
                   // let author = this.props.users[question.author];
                   // console.log("In Home Author ",author);
                    return (<QuestionSummary 
                                question={question} 
                                author={this.props.users[question.author]}
                            key={i}
                            getDetailedQuestion={this.getDetailedQuestion.bind(this,question.id)}/>)
                })}              
            </div>
         
        </HomeStyles>)
    }
}

const mapStateToProps = (state) => {
  //  console.log("Home ",state);
    return {
        questions: state.state.questions,
        users: state.state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestionsOfUser: (currentUserId) => dispatch(actionCreators.getQuestionsOfUser(currentUserId)),
        getUsers: () => dispatch(actionCreators.getUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);


/* 

shouldUpdateQuestions(prevProps){
    let newUser = this.props.location.state.currentUser;

    if((!prevProps.currentUser) ||
    // first attempt using the app first time
    (newUser &&
        prevProps.currentUser &&  
        prevProps.currentUser.id !== newUser.id) ||
        // checking user from second time
    (this.props.questions && this.props.questions.length &&
        this.props.questions.length !== prevProps.questions.length)){
        // change in questions
        return true;
    }
    return false;
}

componentDidUpdate(prevProps){
    // user exists and there is a change in no. of questions
    if(this.shouldUpdateQuestions(prevProps)){
        this.props.getQuestionsOfUser(this.props.location.state.currentUser.id);
    }        
} */