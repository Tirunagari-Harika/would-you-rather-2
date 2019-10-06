import styled from "styled-components";

export const Input = styled.input.attrs(() => {
    return {
        name: props => props.name,
        value: props => props.value,
        onChange: props => props.onChange,
        placeholder: props => props.placeholder,
        type: props => props.type
    }
})`
    ::placeholder{
        color: #ccc;
        padding: 5px;
        font-size: 16px;
    }

    width: 98%;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin: 10px 10px 10px 0px;
    box-sizing: border-box;
    font-size: 16px;

`;

export const Button = styled.button`
    background-color: #14cece;
    color: #fff;
    width: 98%;
    border-radius: 6px;
    margin: 10px 10px 10px 0px;
    border: 1px solid #fff;
    font-size: 17px;
    font-weight: 500;
`;

export const NewQuestionStyles = styled.div`
    width: 600px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin: 20px auto;
    text-align:left;

    .new-question-header{
        font-size: 25px;
        font-weight:700;
        padding: 5px;
        border-bottom: 1px solid #ccc;
        text-align:center;
    }

    .new-question-form{
        display:flex;
        flex-direction: column;
        padding: 15px;        
    }

    .new-question-form * {
        line-height: 2.5;
    }

    .would{
        font-size: 18px;
        font-weight: 700;
    }

    .ORStmt{
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
    }

    .ORStmt::before{
        content: "";
        display: inline-block;
        width: 40%;
        border: 0.5px solid #ccc;
        margin-right: 15px;
        transform: translateY(-5px);
    }

    .ORStmt::after{
        content: "";        
        display: inline-block;
        width: 40%;
        border: 0.5px solid #ccc;
        margin-left: 15px;
        transform: translateY(-5px);
    }

    
`;
