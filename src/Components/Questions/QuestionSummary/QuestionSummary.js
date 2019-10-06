import React, { Component } from "react";
import { SummaryStyles } from "./QuestionSummaryStyles";

class QuestionSummary extends Component{
    render(){
        return (<SummaryStyles>
            <div className="header">{this.props.author.name}</div>
            <div className="flexbox">
                <div className="ImgWrapper">
                    <img src={this.props.author.avatarURL} alt="not-found" />
                </div>
                <div className="questionSummary">
                    <div className="second-header">Would you Rather</div>
                    <div className="Options">...{this.props.question.optionOne.text}...</div>
                    <button onClick={this.props.getDetailedQuestion}>View Poll</button>
                </div>
            </div>
           
        </SummaryStyles>)
    }
}

export default QuestionSummary;