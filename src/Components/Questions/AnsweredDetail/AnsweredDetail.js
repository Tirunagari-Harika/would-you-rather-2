import React, { Component } from "react";
import { AnsweredDetailStyles, ProgressBarStyles } from "./AnsweredDetailStyles";

import * as utility from "../../../utility";

const baseURI = window.location.origin;

const ProgressBar = (props) => {
    // get hold of no. of users
    let firstWidth = parseInt(props.votesLength)/parseInt(props.totalVotes);
    //console.log("Progress Bar ", props.votesLength, props.totalVotes);
   // let secondWidth = 1 - firstWidth;
    return (<ProgressBarStyles 
                    firstWidth={firstWidth * 100}>
                <div className="progressBar">
                    <div>{(firstWidth * 100).toPrecision(3) + "%"}</div>
                   
                </div>
                <div className="votes">{props.votesLength} out of {props.totalVotes} votes</div>
            </ProgressBarStyles>)
}

class AnsweredDetail extends Component{

    calculateTotalVotes = () => {
        let question = this.props.questionDetail; 
        let opt1Len = 0; 
        let opt2Len = 0;      
        if(question.optionOne.votes && question.optionOne.votes.length){
            opt1Len = question.optionOne.votes.length;
        }
        if(question.optionTwo.votes && question.optionTwo.votes.length){
            opt2Len = question.optionTwo.votes.length;
        }

        return {
            votesOpt1: opt1Len,
            votesOpt2: opt2Len,
            totalVotes: opt1Len + opt2Len
        };
        
    }


    optionTemplate = (option) => {
        let opt1 = (option === "optionOne" ? "activeDiv" : "");
        let opt2 = (option === "optionTwo" ? "activeDiv" : "");       
        let votes = this.calculateTotalVotes();

        return (<div className="OptionsDiv">
                    <h3>Results:</h3>
                    <div className={"resultDiv " + opt1 }>
                        <div>Would you rather <span>{this.props.questionDetail.optionOne.text}</span></div>
                        <ProgressBar 
                            votesLength={votes.votesOpt1} 
                            totalVotes={votes.totalVotes}/>
                    </div>
                    <div className={"resultDiv " + opt2}>
                        <div>Would you rather <span>{this.props.questionDetail.optionTwo.text}</span></div>
                        <ProgressBar 
                            votesLength={votes.votesOpt2}  
                            totalVotes={votes.totalVotes}/>
                    </div>
                </div>)
    }
   

    voteSelected = () => {
        let question = this.props.questionDetail;
        let userId = this.props.currentUserId;
        let option = null;
        if(utility.checkSingleEleInArr(question.optionOne.votes,userId)){
            option = "optionOne";
        }else if(utility.checkSingleEleInArr(question.optionTwo.votes,userId)){
            option = "optionTwo";
        }

        if(!option || option == null) return;
        return this.optionTemplate(option);


    }

    render(){
       // console.log("Answered -- ",this.props);
        return (<AnsweredDetailStyles>
            <div className="title">{this.props.authorDetail.name}</div>
            <div className="detail">
                <div className="imgWrapper">
                    <img src={baseURI + "/" + this.props.authorDetail.avatarURL} alt="not-found" />
                </div>
                {this.voteSelected()}
            </div>
        </AnsweredDetailStyles>)
    }
}

export default AnsweredDetail;

