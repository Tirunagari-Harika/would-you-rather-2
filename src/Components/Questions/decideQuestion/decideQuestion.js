import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import AnsweredDetail from "../AnsweredDetail/AnsweredDetail";
import UnAnsweredDetail from "../UnAnsweredDetail/UnAnsweredDetail";

import * as actionCreators from "../../../store/actionCreators";
import * as utility from "../../../utility";
import * as api from "../../../_DATA";

class DecideQuestion extends Component {
    componentDidMount(){ 
      //  console.log("Did Mount");           
        let questionId = this.props.match.params.question_id;
        this.props.getQuestion(questionId);        
        this.props.getUsers();
    }

    componentDidUpdate(prevProps){
       // console.log("Did Update");
       /*  if(prevProps.match.params.question_id !== this.props.match.params.question_id) return;
        let questionId = this.props.match.params.question_id;
        this.props.getQuestion(questionId);        
        this.props.getUsers(); */
    }

    answertheQuestion = (answerValue) => {
        /* authedUser
        qid
        answer */
        let obj = {
            authedUser: this.props.currentUser.id,
            qid: this.props.particularQuestion.id,
            answer: answerValue
        }
        api._saveQuestionAnswer(obj).then(() => {
            //console.log("Answer submitted");
            let questionId = this.props.match.params.question_id;
            this.props.getQuestion(questionId);        
            this.props.getUsers();
            this.props.history.push({
                pathname:"/questions/" + this.props.particularQuestion.id
            });
        })
        .catch((e) => {
          //  console.log("Error in submitting answer ",e);
        });
               
    }

    checkQuestion = () => {
        //console.log("Welcome to Author");
        let fragment = null;
        if(!this.props.particularQuestion.id) return null;
        /* if(!this.props.users || !this.props.users.length) return null; */
        let particularQuestion = this.props.particularQuestion;
        //let author = utility.getItemInObj(this.props.users,particularQuestion.author);
        let author = this.props.users[particularQuestion.author];
      // console.log("Author in Decide --- ",author);
        // check whether answered or unanswered
        let answered = utility.checkUserAnsweredQuestion(particularQuestion,this.props.currentUser.id);
        
        if(answered){
          //  console.log("Answer");
            fragment = (<AnsweredDetail 
                            currentUserId={this.props.currentUser.id}
                            questionDetail={particularQuestion}
                            authorDetail={author}
                            />)
        }else{
            fragment = (<UnAnsweredDetail 
                            questionDetail={particularQuestion}
                            authorDetail={author} 
                            answertheQuestion={this.answertheQuestion.bind(this)} />)
        }

        return fragment;
    }

    render(){
       // console.log(this.props.particularQuestion);
        return (<Fragment>
            {this.checkQuestion()}
        </Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.state.currentUser,
        particularQuestion: state.state.particularQuestion,
        /* author: utility.getItemInObj(state.state.users,state.particularQuestion.author) */
        users: state.state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestion: (questionId) => dispatch(actionCreators.getParticularQuestion(questionId)),
        getUsers: () => dispatch(actionCreators.getUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DecideQuestion);