import React, { Component } from "react";
import { NewQuestionStyles, Input, Button } from "./NewQuestionStyles";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actionCreators";

class NewQuestion extends Component{
    state = {
        optionOneText:"",
        optionTwoText:""
    }

    onChange = (ev) => {
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }

    submit =  () => {
        console.log("New Question ",this.state);
        let obj = {
            author: this.props.location.state.currentUser.id,
            optionOneText: this.state.optionOneText,
            optionTwoText: this.state.optionTwoText
        }
        this.props.addPoll(obj);
        this.props.history.push({
            pathname:"/home",
            state : { currentUser: this.props.location.state.currentUser }
        });

    }

    render(){
        return (<NewQuestionStyles>
            <div className="new-question-header">Create New Question</div>
            <div className="new-question-form">
                <div>Complete the question:</div>
                <div className="would">Would You Rather ...</div>
                <Input 
                    type="text" 
                    placeholder="Enter Option One Text Here..."
                    name="optionOneText"
                    value={this.state.optionOneText}
                    onChange={this.onChange} />
                <div className="ORStmt">OR</div>
                <Input 
                    type="text" 
                    placeholder="Enter Option Two Text Here.. "
                    name="optionTwoText"
                    value={this.state.optionTwoText}
                    onChange={this.onChange} />
                <Button onClick={this.submit}>Submit</Button>
            </div>
        </NewQuestionStyles>)
    }
}

const mapStateToProps = (state) => {
    if(state && state.questions && state.questions.unansweredQuestions){
        console.log("New Question Added ", state.questions.unansweredQuestions);
    }
    
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPoll: (poll) => dispatch(actionCreators.saveQuestion(poll))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion);