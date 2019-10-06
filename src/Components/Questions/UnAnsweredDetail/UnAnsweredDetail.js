import React, { Component } from "react";
import { SummaryStyles } from "../QuestionSummary/QuestionSummaryStyles";
import { UnAnsweredDetailStyles, OptionStyles } from "./UnAnsweredDetailStyles";

const baseURI = window.location.origin;

const Option = (props) => {
    let checked = props.selectedValue === props.optionValue? true : false;
    return (<OptionStyles>
        <input type="radio" name={"option"} 
            checked={checked} 
            value={props.optionValue} 
            onChange={props.onChange}/>

        <span> {props.optionText} </span>
    </OptionStyles>)
}

class UnAnsweredDetail extends Component{
    state = {
        selectedValue: "optionOne"
    }

    onChangeRadio = (ev) => {
       this.setState({
            selectedValue:ev.currentTarget.value
        });
    }

    submit = () => {
        this.props.answertheQuestion(this.state.selectedValue);
    }

    render(){
        //console.log("--- --- UnAnswered ",this.props.questionDetail.author);
        return (<UnAnsweredDetailStyles>
            <SummaryStyles>
            <div className="header">{this.props.authorDetail.name}</div>
            <div className="flexbox">
                <div className="ImgWrapper">
                  {/*   <img src={"http://localhost:3000/" + this.props.authorDetail.avatarURL} alt="not-found" /> */}
                   {/* <img src={"./" + this.props.authorDetail.avatarURL} alt="not-found" /> */}
                   <img src={baseURI + "/" + this.props.authorDetail.avatarURL} alt="not-found" /> 
                   
                </div>
                <div className="questionSummary">
                    <div className="second-header">Would you Rather</div>
                    <div className="Options">
                        <Option 
                            optionValue={"optionOne"} 
                            optionText={this.props.questionDetail.optionOne.text}
                            onChange={this.onChangeRadio}
                            selectedValue={this.state.selectedValue} />
                        <Option 
                            optionValue={"optionTwo"}
                            optionText={this.props.questionDetail.optionTwo.text}
                            onChange={this.onChangeRadio}
                            selectedValue={this.state.selectedValue} />
                    </div>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
           
        </SummaryStyles>
        </UnAnsweredDetailStyles>)
    }
}

export default UnAnsweredDetail;